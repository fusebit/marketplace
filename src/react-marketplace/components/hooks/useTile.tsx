/* eslint-disable no-console */
import { useEffect, useMemo, useState } from 'react';
import { InstallStatusResponse, ImageProps, Entity } from '../interfaces/marketplace';

interface Props {
  integrationId: string;
  feedId: string;
  feed: Entity[];
  isInstalled: boolean;
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
  isInstalled: initialInstallStatus,
  onInstallClick,
  getInstallUrl,
  onUninstallClick,
  onUninstalled,
  isDisabled,
}: Props) => {
  const [url, setUrl] = useState('');
  const [isInstalled, setIsInstalled] = useState(initialInstallStatus);
  const [isUninstalling, setIsUninstalling] = useState(false);

  const entity = useMemo(() => feed.find((e) => e.id === feedId), [feed, feedId]);

  const { subtitle, description } = useMemo(() => {
    const tags = entity?.tags.catalog;
    const desc = entity?.description;

    const parsedTags = tags?.replaceAll(',', ', ');
    const descriptionParagraph = desc?.split('[')?.[0];

    return { subtitle: parsedTags, description: descriptionParagraph };
  }, [entity]);

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
        if (onInstallClick) {
          onInstallClick?.(url);
        } else {
          window.open(url, '_blank');
        }
      }
    }
  };

  const image = {
    src: `data:image/svg+xml;utf8,${encodeURIComponent(entity?.largeIcon || '')}`,
    alt: entity?.name || '',
  };

  return {
    handleClick,
    loading: isUninstalling || url === '',
    image,
    linkUrl: entity?.resources?.configureAppDocUrl || '',
    subtitle,
    description,
    isInstalled,
  };
};

export default useTile;
