import React, { useEffect, useMemo, useState } from 'react';
import cn from 'classnames';
import Tile from '../Tile';
import styles from './Marketplace.module.css';
import { Entity, MarketplaceProps } from '../interfaces/marketplace';
import Spinner from '../Spinner';

const Marketplace: React.FC<MarketplaceProps> = ({
  integrations,
  className,
  classes,
  getCustomBody,
  hideImages,
  hideLink,
  images,
  installText,
  linkText,
  getInstallUrl,
  onAuthentication,
  onUninstall,
  onMainActionClick,
  onInstalled,
  onUninstalled,
  uninstallText,
  isLoadingIntegrations,
  demo,
}) => {
  const [feed, setFeed] = useState<Entity[]>([]);
  const [isLoadingFeed, setIsLoadingFeed] = useState(false);
  const isLoading = isLoadingFeed || isLoadingIntegrations;

  useEffect(() => {
    setIsLoadingFeed(true)
    const getFeed = async () => {
      const res = await fetch('https://stage-manage.fusebit.io/feed/integrationsFeed.json');
      setFeed(await res.json());
      setIsLoadingFeed(false)
    };

    getFeed();
  }, []);

  const uninstalledIntegrations = useMemo(
    () => feed.filter((entity) => !integrations.find((i) => i.feedId === entity.id)),
    [integrations, feed]
  );

  return (
    <div className={cn(styles.marketplace)}>
      <div className={cn(styles.wrapper, className)}>
        {!isLoading ? (
          integrations.map((integration) => (
            <Tile
              key={integration.integrationId}
              feed={feed}
              classes={classes}
              hideImages={hideImages}
              hideLink={hideLink}
              images={images}
              installText={installText}
              linkText={linkText}
              onInstalled={onInstalled}
              onMainActionClick={onMainActionClick}
              onUninstalled={onUninstalled}
              uninstallText={uninstallText}
              getCustomBody={getCustomBody}
              getInstallUrl={getInstallUrl}
              onAuthentication={onAuthentication}
              onUninstall={onUninstall}
              {...integration}
            />
          ))
        ) : (
          <div className={cn(styles['loading-wrapper'])}>
            <Spinner className={classes?.spinner} />
          </div>
        )}
      </div>
      {demo && !isLoading && (
        <div className={cn(styles.wrapper, className)}>
          {uninstalledIntegrations.map((entity) => (
            <Tile
              key={entity.id}
              feed={feed}
              getInstallUrl={getInstallUrl}
              onAuthentication={onAuthentication}
              onUninstall={onUninstall}
              isInstalled={false}
              integrationId={entity.id}
              feedId={entity.id}
              hideTitle
              isDisabled
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Marketplace;
