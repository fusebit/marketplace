import React, { useEffect, useMemo, useState } from 'react';
import cn from 'classnames';
import Tile from '../Tile';
import styles from './Marketplace.module.css';
import { Entity, Integration, MarketplaceProps } from '../interfaces/marketplace';
import Spinner from '../Spinner';

const PRODUCTION_FEED_URL = 'https://manage.fusebit.io/feed/integrationsFeed.json';

const Marketplace: React.FC<MarketplaceProps> = ({
  getIntegrations,
  className,
  classes,
  getCustomBody,
  hideImages,
  hideLearnMore,
  getTileImages,
  installText,
  learnMoreText,
  getInstallUrl,
  onUninstallClick,
  onInstallClick,
  onUninstalled,
  uninstallText,
  isDemo,
  feedUrl,
}) => {
  const [feed, setFeed] = useState<Entity[]>([]);
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [isLoadingFeed, setIsLoadingFeed] = useState(false);
  const [isLoadingIntegrations, setIsLoadingIntegrations] = useState(false);
  const isLoading = isLoadingFeed || isLoadingIntegrations;

  useEffect(() => {
    setIsLoadingFeed(true);
    const get = async () => {
      try {
        const res = await fetch(feedUrl || PRODUCTION_FEED_URL);
        setFeed(await res.json());
      } catch (error) {
        console.warn('There was an error fetching the feed.');
      } finally {
        setIsLoadingFeed(false);
      }
    };

    get();
  }, []);

  useEffect(() => {
    setIsLoadingIntegrations(true);
    const get = async () => {
      try {
        const res = await getIntegrations();
        setIntegrations(res);
      } catch (error) {
        console.warn('There was an error fetching the integrations.');
      } finally {
        setIsLoadingIntegrations(false);
      }
    };

    get();
  }, []);

  const uninstalledIntegrations = useMemo(
    () => feed.filter((entity) => !integrations.find((i) => i.feedId === entity.id)),
    [integrations, feed]
  );

  if (isLoading) {
    return (
      <div className={cn(styles['loading-wrapper'])}>
        <Spinner className={classes?.spinner} />
      </div>
    );
  }

  return (
    <div className={cn(styles.marketplace, className)}>
      <div className={cn(styles.wrapper)}>
        {integrations.map((integration) => (
          <Tile
            key={integration.integrationId}
            feed={feed}
            classes={classes}
            hideImages={hideImages}
            hideLearnMore={hideLearnMore}
            getTileImages={getTileImages}
            installText={installText}
            learnMoreText={learnMoreText}
            onInstallClick={onInstallClick}
            onUninstalled={onUninstalled}
            uninstallText={uninstallText}
            getCustomBody={getCustomBody}
            getInstallUrl={getInstallUrl}
            onUninstallClick={onUninstallClick}
            {...integration}
          />
        ))}
      </div>
      {isDemo && (
        <div className={cn(styles.wrapper, styles['wrapper-disabled'])}>
          {uninstalledIntegrations.map((entity) => (
            <Tile
              key={entity.id}
              feed={feed}
              getInstallUrl={getInstallUrl}
              onUninstallClick={onUninstallClick}
              getTileImages={getTileImages}
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
