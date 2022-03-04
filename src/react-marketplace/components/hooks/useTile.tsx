/* eslint-disable no-console */
import { useEffect, useMemo, useState } from 'react';
import { InstallStatusResponse, ImageProps, Entity } from '../interfaces/marketplace';

interface Props {
  integrationId: string;
  feedId: string;
  feed: Entity[];
  isInstalled: boolean;
  images?: ImageProps[];
  onMainActionClick?: () => void;
  getInstallUrl?: (integrationId: string) => Promise<string>;
  onAuthentication?: (integrationId: string, session: string) => Promise<void>;
  onUninstall?: (integrationId: string) => Promise<void>;
  onUninstalled?: (res: InstallStatusResponse) => void;
  onInstalled?: (res: InstallStatusResponse) => void;
  isDisabled?: boolean;
}

const useTile = ({
  integrationId,
  feedId,
  feed,
  isInstalled,
  images,
  onMainActionClick,
  getInstallUrl,
  onAuthentication,
  onInstalled,
  onUninstall,
  onUninstalled,
  isDisabled,
}: Props) => {
  const [url, setUrl] = useState('');
  const [isCommitingSession, setIsCommittingSession] = useState(false);
  const [isUninstalling, setIsUninstalling] = useState(false);

  const entity = useMemo(() => feed.find(e => e.id === feedId), [feed, feedId]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const commitSession = async () => {
      const session = params.get('session');
      const id = params.get('integrationId');
      if (session && integrationId === id && !isInstalled) {
        setIsCommittingSession(true);
        try {
          await onAuthentication?.(integrationId, session);
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

    if (!isDisabled) {
      commitSession();
    }
  }, [integrationId, isDisabled, isInstalled, onAuthentication, onInstalled]);

  useEffect(() => {
    const setInstallUrl = async () => {
      try {
        const installUrl = await getInstallUrl?.(integrationId);
        setUrl(installUrl || '');
      } catch (err) {
        console.warn(`There was a problem fetching the install url: ${err}`);
      }
    };

    if (!isDisabled) {
      setInstallUrl();
    }
  }, [getInstallUrl, integrationId, isDisabled]);

  const handleClick = async () => {
    if (!isDisabled) {
      onMainActionClick?.();
      if (isInstalled) {
        setIsUninstalling(true);
        try {
          await onUninstall?.(integrationId);
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
    }
  };

  const tileImages = images || [
    {
      src: `data:image/svg+xml;utf8,${encodeURIComponent(entity?.largeIcon || '')}`,
      alt: entity?.name || '',
    },
  ];

  return {
    handleClick,
    loading: isCommitingSession || isUninstalling,
    tileImages,
    linkUrl: entity?.resources?.configureAppDocUrl || '',
  };
};

export default useTile;
