/* eslint-disable no-console */
import { useEffect, useMemo, useState } from 'react';
import { InstallStatusResponse, ImageProps, Entity } from '../interfaces/marketplace';

interface Props {
  integrationId: string;
  feedId: string;
  feed: Entity[];
  isInstalled: boolean;
  images?: ImageProps[];
  onInstallClick?: (integrationId: string) => void;
  getInstallUrl: (integrationId: string) => Promise<string>;
  onUninstallClick?: (integrationId: string) => Promise<void>;
  onUninstalled?: (res: InstallStatusResponse) => void;
  isDisabled?: boolean;
}

const useTile = ({
  integrationId,
  feedId,
  feed,
  isInstalled,
  images,
  onInstallClick,
  getInstallUrl,
  onUninstallClick,
  onUninstalled,
  isDisabled,
}: Props) => {
  const [url, setUrl] = useState('');
  const [isUninstalling, setIsUninstalling] = useState(false);

  const entity = useMemo(() => feed.find((e) => e.id === feedId), [feed, feedId]);

  useEffect(() => {
    const setInstallUrl = async () => {
      try {
        const installUrl = await getInstallUrl(integrationId);
        setUrl(installUrl);
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
      if (isInstalled) {
        setIsUninstalling(true);
        try {
          await onUninstallClick?.(integrationId);
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
        onInstallClick?.(integrationId);
        window.open(url, '_self');
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
    loading: isUninstalling,
    tileImages,
    linkUrl: entity?.resources?.configureAppDocUrl || '',
  };
};

export default useTile;
