import React from 'react';
import Button from '../Button';
import Image from '../Image';
import styles from './Tile.module.css';
import Link from '../Link';
import Title from '../Title';
import Card from '../Card';
import cn from 'classnames';
import { TileProps } from '../interfaces/marketplace';
import useTile from '../hooks/useTile';

const DEFAULT_INSTALL_TEXT = 'INSTALL APP';
const DEFAULT_UNINSTALL_TEXT = 'UNINSTALL APP';

const Tile: React.FC<TileProps> = ({
  integrationId,
  connectorId,
  title,
  classes,
  images,
  installText,
  uninstallText,
  hideLink,
  linkInnerText,
  hideTitle,
  hideImages,
  onMainActionClick,
  getCustomBody,
  getInstallUrl,
  onCommitSession,
  onUninstall,
  onInstalled,
  onUninstalled,
  getIsInstalled,
}) => {
  const { handleClick, isInstalled, loading, tileImages } = useTile({
    integrationId,
    connectorId,
    images,
    getInstallUrl,
    getIsInstalled,
    onCommitSession,
    onInstalled,
    onMainActionClick,
    onUninstall,
    onUninstalled,
  });

  const buttonText = isInstalled ? uninstallText || DEFAULT_UNINSTALL_TEXT : installText || DEFAULT_INSTALL_TEXT;

  return (
    <>
      {getCustomBody ? (
        getCustomBody({
          handleClick,
          loading,
        })
      ) : (
        <Card className={classes?.card}>
          {!hideTitle && <Title className={classes?.title}>{title}</Title>}
          {!hideImages && (
            <div className={cn(styles['images-wrapper'], classes?.imagesWrapper)}>
              {tileImages?.map((image) => (
                <Image key={image.alt} image={image} className={classes?.image} />
              ))}
            </div>
          )}
          <div className={cn(styles['buttons-wrapper'], classes?.buttonsWrapper)}>
            {!hideLink && (
              <Link className={classes?.link} rel="noreferrer" target="_blank">
                {linkInnerText}
              </Link>
            )}
            {loading ? (
              <svg
                className={cn(styles['spinner'], classes?.spinner)}
                width="62"
                height="62"
                viewBox="0 0 62 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M58.9999 31C58.9999 24.3836 56.6569 17.981 52.3863 12.9274C48.1157 7.87376 42.1935 4.49572 35.6698 3.39223C29.1461 2.28874 22.4424 3.53109 16.7473 6.89899C11.0522 10.2669 6.73378 15.5428 4.5577 21.7911C2.38163 28.0394 2.48851 34.8564 4.85942 41.0334C7.23032 47.2104 11.712 52.3483 17.5099 55.536C23.3078 58.7237 30.0472 59.7553 36.5331 58.4478"
                  stroke="#F83420"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <Button onClick={handleClick} isInstalled={isInstalled} className={classes?.button}>
                {buttonText}
              </Button>
            )}
          </div>
        </Card>
      )}
    </>
  );
};

export default Tile;
