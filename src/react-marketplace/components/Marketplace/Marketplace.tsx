import React from 'react';
import Tile from '../Tile';
import cn from 'classnames';
import styles from './Marketplace.module.css';
import { MarketplaceProps } from '../interfaces/marketplace';
import Spinner from '../Spinner';
import { integrationsFeed } from '../../integrationsFeed';

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
  demo,
}) => {
  const isReady = integrations.length > 0;

  return (
    <div className={cn(styles.marketplace)}>
      <div className={cn(styles.wrapper, className)}>
        {isReady ? (
          integrations.map((integration) => (
            <Tile
              key={integration.integrationId}
              feed={integrationsFeed}
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
      {demo && isReady && (
        <div className={cn(styles.wrapper, className)}>
          {integrationsFeed.map((entity) => {
            return (
              <Tile
                feed={integrationsFeed}
                getInstallUrl={getInstallUrl}
                onAuthentication={onAuthentication}
                onUninstall={onUninstall}
                isInstalled={false}
                integrationId={entity.id}
                feedId={entity.id}
                hideTitle
                classes={{
                  card: cn(styles['demo-card']),
                  image: cn(styles['demo-img']),
                  link: cn(styles['demo-button']),
                  button: cn(styles['demo-button']),
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Marketplace;
