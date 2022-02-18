import React from 'react';
import Tile from '../Tile';
import cn from 'classnames';
import styles from './Marketplace.module.css';
import { MarketplaceProps } from '../interfaces/marketplace';
import { useTrail, animated } from 'react-spring';
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
}) => {
  const isReady = integrations.length > 0;
  const trail = useTrail(integrations.length, {
    opacity: 1,
    y: 0,
    config: { mass: 2, tension: 300, friction: 40 },
    from: {
      opacity: 0,
      y: 50,
    },
  });

  return (
    <div className={cn(styles.marketplace)}>
      <div className={cn(styles.wrapper, className)}>
        {isReady ? (
          trail.map((props, i) => (
            <animated.div style={props} key={i}>
              {
                <Tile
                  key={integrations[i].integrationId}
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
                  {...integrations[i]}
                />
              }
            </animated.div>
          ))
        ) : (
          <div className={cn(styles['loading-wrapper'])}>
            <Spinner className={classes?.spinner} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
