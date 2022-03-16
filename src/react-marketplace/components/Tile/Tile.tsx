import React from 'react';
import cn from 'classnames';
import Button from '../Button';
import Image from '../Image';
import styles from './Tile.module.css';
import Link from '../Link';
import Title from '../Title';
import Card from '../Card';
import Spinner from '../Spinner';
import { TileProps } from '../interfaces/marketplace';
import useTile from '../hooks/useTile';

const DEFAULT_INSTALL_TEXT = 'INSTALL APP';
const DEFAULT_UNINSTALL_TEXT = 'UNINSTALL APP';

const Tile: React.FC<TileProps> = ({
  integrationId,
  feedId,
  feed,
  isInstalled,
  title,
  hideTitle,
  classes,
  images,
  installText,
  uninstallText,
  hideDocs,
  docsText,
  hideImages,
  onInstallClick,
  getCustomBody,
  getInstallUrl,
  onUninstallClick,
  onUninstalled,
  isDisabled,
}) => {
  const { handleClick, loading, tileImages, linkUrl } = useTile({
    integrationId,
    feed,
    feedId,
    images,
    getInstallUrl,
    isInstalled,
    onInstallClick,
    onUninstallClick,
    onUninstalled,
    isDisabled,
  });

  const buttonText = isInstalled ? uninstallText || DEFAULT_UNINSTALL_TEXT : installText || DEFAULT_INSTALL_TEXT;

  return (
    <>
      {getCustomBody ? (
        getCustomBody({
          handleClick,
          isLoading: loading,
        })
      ) : (
        <Card className={cn(classes?.card, styles['wrapper'], { [styles['demo-card']]: isDisabled })}>
          {!hideTitle && <Title className={classes?.title}>{title}</Title>}
          {!hideImages && (
            <div className={cn(styles['images-wrapper'], classes?.imagesWrapper)}>
              {tileImages?.map((image) => (
                <Image
                  title={feedId || ''}
                  singleImage={tileImages.length === 1}
                  key={image.alt}
                  image={image}
                  className={cn(classes?.image, { [styles['demo-img']]: isDisabled })}
                  height={52}
                />
              ))}
            </div>
          )}
          <div
            className={cn(styles['buttons-wrapper'], classes?.buttonsWrapper, { [styles['demo-button']]: isDisabled })}
          >
            {!hideDocs && (
              <Link href={linkUrl} className={classes?.link} rel="noreferrer" target="_blank">
                {docsText}
              </Link>
            )}
            {loading ? (
              <Spinner className={classes?.spinner} />
            ) : (
              <Button
                onClick={handleClick}
                isInstalled={isInstalled}
                className={cn(classes?.button, {
                  [styles['demo-button']]: isDisabled,
                  [styles['demo-button--disabled']]: isDisabled,
                })}
              >
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
