import { useEffect, useState } from 'react';
import { InstallStatusResponse, ImageProps, Entity } from '../interfaces/marketplace';

interface Props {
  integrationId: string;
  feedId: string;
  feed: Entity[];
  installInitState: boolean;
  images?: ImageProps[];
  onMainActionClick?: () => void;
  getInstallUrl?: (integrationId: string) => Promise<string>;
  onAuthentication?: (integrationId: string, session: string) => Promise<void>;
  onUninstall?: (integrationId: string) => Promise<void>;
  onUninstalled?: (res: InstallStatusResponse) => void;
  onInstalled?: (res: InstallStatusResponse) => void;
}

const useTile = ({
  integrationId,
  feedId,
  feed,
  installInitState,
  images,
  onMainActionClick,
  getInstallUrl,
  onAuthentication,
  onInstalled,
  onUninstall,
  onUninstalled,
}: Props) => {
  const [isInstalled, setIsInstalled] = useState(installInitState);
  const params = new URLSearchParams(window.location.search);
  const [url, setUrl] = useState('');
  const [isCommitingSession, setIsCommittingSession] = useState(false);
  const [isUninstalling, setIsUninstalling] = useState(false);
  const [tileImages, setTileImages] = useState<ImageProps[]>([]);
  const [linkUrl, setLinkUrl] = useState('');

  const getMatchingEntity = async () => {
    return feed.find((entity) => entity.id === feedId);
  };

  useEffect(() => {
    const setDocsLinkUrl = async () => {
      const entity = await getMatchingEntity();
      if (entity) {
        setLinkUrl(entity?.resources?.configureAppDocUrl || '');
      }
    };

    setDocsLinkUrl();
  }, [feedId]);

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
  }, [feedId, images]);

  useEffect(() => {
    const commitSession = async () => {
      const session = params.get('session');
      const id = params.get('integrationId');
      if (session && integrationId === id && !isInstalled) {
        setIsCommittingSession(true);
        try {
          await onAuthentication?.(integrationId, session);
          setIsInstalled(true);
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
        const installUrl = await getInstallUrl?.(integrationId);
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
        await onUninstall?.(integrationId);
        setIsInstalled(false);
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
    loading: isCommitingSession || isUninstalling,
    tileImages,
    linkUrl,
  };
};

export default useTile;
