import { useEffect, useState } from 'react';
import { InstallStatusResponse, ImageProps, Entity } from '../interfaces/marketplace';

interface Props {
  integrationId: string;
  connectorId: string;
  images?: ImageProps[];
  onMainActionClick?: () => void;
  getInstallUrl?: () => Promise<string>;
  getIsInstalled?: () => Promise<boolean>;
  onCommitSession?: (session: string) => Promise<void>;
  onUninstall?: () => Promise<void>;
  onUninstalled?: (res: InstallStatusResponse) => void;
  onInstalled?: (res: InstallStatusResponse) => void;
}

const useTile = ({
  integrationId,
  connectorId,
  images,
  onMainActionClick,
  getInstallUrl,
  getIsInstalled,
  onCommitSession,
  onInstalled,
  onUninstall,
  onUninstalled,
}: Props) => {
  const [isInstalled, setIsInstalled] = useState(false);
  const params = new URLSearchParams(window.location.search);
  const [url, setUrl] = useState('');
  const [isCheckingInstallState, setIsCheckingInstallState] = useState(true);
  const [isCommitingSession, setIsCommittingSession] = useState(false);
  const [isUninstalling, setIsUninstalling] = useState(false);
  const [tileImages, setTileImages] = useState<ImageProps[]>([]);
  const [linkUrl, setLinkUrl] = useState('');

  const getMatchingEntity = async () => {
    const res = await fetch('https://stage-manage.fusebit.io/feed/connectorsFeed.json');
    const feed: Entity[] = await res.json();
    return feed.find((entity) => entity.id === connectorId);
  };

  useEffect(() => {
    const setDocsLinkUrl = async () => {
      const entity = await getMatchingEntity();
      if (entity) {
        setLinkUrl(entity.resources.configureAppDocUrl);
      }
    };

    setDocsLinkUrl();
  }, [connectorId]);

  useEffect(() => {
    const setImages = async () => {
      if (images) {
        setTileImages(images);
      } else {
        const entity = await getMatchingEntity();
        if (entity) {
          const image: ImageProps = {
            src: `data:image/svg+xml;utf8,${encodeURIComponent(entity?.largeIcon)}`,
            alt: entity.name,
          };
          setTileImages([image]);
        }
      }
    };

    setImages();
  }, [connectorId, images]);

  useEffect(() => {
    const checkInstallState = async () => {
      try {
        const installationState = await getIsInstalled?.();
        setIsInstalled(!!installationState);
      } catch (err) {
        console.warn(`There was a problem getting the instalation state: ${err}`);
      } finally {
        setIsCheckingInstallState(false);
      }
    };

    checkInstallState();
  }, []);

  useEffect(() => {
    const commitSession = async () => {
      const session = params.get('session');
      const id = params.get('integrationId');
      if (session && integrationId === id) {
        setIsCommittingSession(true);
        try {
          await onCommitSession?.(session);
          const installationState = await getIsInstalled?.();
          setIsInstalled(!!installationState);
          onInstalled?.({
            status: 'success',
          });
        } catch (err) {
          onInstalled?.({
            status: 'error',
            err,
          });
          console.warn(`There was a problem commiting the session: ${err}`);
        } finally {
          setIsCommittingSession(false);
        }
      }
    };

    commitSession();
  }, []);

  useEffect(() => {
    const setInstallUrl = async () => {
      try {
        const installUrl = await getInstallUrl?.();
        setUrl(installUrl || '');
      } catch (err) {
        console.warn(`There was a problem fetching the install url: ${err}`);
      }
    };

    setInstallUrl();
  }, []);

  const handleClick = async () => {
    onMainActionClick?.();
    if (isInstalled) {
      setIsUninstalling(true);
      try {
        await onUninstall?.();
        const installationState = await getIsInstalled?.();
        setIsInstalled(!!installationState);
        onUninstalled?.({
          status: 'success',
        });
      } catch (err) {
        onUninstalled?.({
          status: 'error',
          err,
        });
        console.warn(`There was a problem uninstalling the integration: ${err}`);
      } finally {
        setIsUninstalling(false);
      }
    } else {
      window.open(url);
    }
  };

  return {
    isInstalled,
    handleClick,
    loading: isCheckingInstallState || isCommitingSession || isUninstalling,
    tileImages,
    linkUrl,
  };
};

export default useTile;
