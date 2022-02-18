import React from 'react';
import Tile from '../Tile';
import cn from 'classnames';
import styles from './Marketplace.module.css';
import { MarketplaceProps } from '../interfaces/marketplace';

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
}) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      {integrations?.map((integration) => (
        <Tile
          key={integration.integrationId}
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
      ))}
    </div>
  );
};

export default Marketplace;
