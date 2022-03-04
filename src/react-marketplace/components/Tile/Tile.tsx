import React from 'react';
import Button from '../Button';
import Image from '../Image';
import styles from './Tile.module.css';
import Link from '../Link';
import Title from '../Title';
import Card from '../Card';
import Spinner from '../Spinner';
import cn from 'classnames';
import { TileProps } from '../interfaces/marketplace';
import useTile from '../hooks/useTile';

const DEFAULT_INSTALL_TEXT = 'INSTALL APP';
const DEFAULT_UNINSTALL_TEXT = 'UNINSTALL APP';

const Tile: React.FC<TileProps> = ({
  integrationId,
  feed,
  feedId,
  feed,
  isInstalled: installInitState,
  title,
  hideTitle,
  classes,
  images,
  installText,
  uninstallText,
  hideLink,
  linkText,
  hideImages,
  onMainActionClick,
  getCustomBody,
  getInstallUrl,
  onAuthentication,
  onUninstall,
  onInstalled,
  onUninstalled,
}) => {
  const { handleClick, isInstalled, loading, tileImages, linkUrl } = useTile({
    integrationId,
    feed,
    feedId,
    feed,
    images,
    getInstallUrl,
    installInitState,
    onAuthentication,
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
          isLoading: loading,
        })
      ) : (
        <Card className={classes?.card}>
          {!hideTitle && <Title className={classes?.title}>{title}</Title>}
          {!hideImages && (
            <div className={cn(styles['images-wrapper'], classes?.imagesWrapper)}>
              {tileImages?.map((image) => (
                <Image singleImage={tileImages.length === 1} key={image.alt} image={image} className={classes?.image} />
              ))}
            </div>
          )}
          <div className={cn(styles['buttons-wrapper'], classes?.buttonsWrapper)}>
            {!hideLink && (
              <Link href={linkUrl} className={classes?.link} rel="noreferrer" target="_blank">
                {linkText}
              </Link>
            )}
            {loading ? (
              <Spinner className={classes?.spinner} />
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
