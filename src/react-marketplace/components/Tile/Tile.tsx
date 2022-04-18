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
import Subtitle from '../Subtitle';
import Description from '../Description';

const DEFAULT_INSTALL_TEXT = 'INSTALL APP';
const DEFAULT_UNINSTALL_TEXT = 'UNINSTALL APP';

const Tile: React.FC<TileProps> = ({
  integrationId,
  feedId,
  feed,
  isInstalled,
  title,
  hideTitle,
  hideSubtitle,
  hideDescription,
  classes,
  getTileImages,
  installText,
  uninstallText,
  hideLearnMore,
  learnMoreText,
  hideImages,
  onInstallClick,
  getCustomBody,
  getInstallUrl,
  onUninstallClick,
  onUninstalled,
  isDisabled,
}) => {
  const { handleClick, loading, image, linkUrl } = useTile({
    integrationId,
    feed,
    feedId,
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
          <div className={cn(styles['top-wrapper'])}>
            {!hideImages && (
              <div className={cn(styles['images-wrapper'], classes?.imagesWrapper)}>
                {getTileImages?.(integrationId, feedId) || (
                  <Image
                    title={feedId || ''}
                    key={image.alt}
                    image={image}
                    className={cn(classes?.image, { [styles['demo-img']]: isDisabled })}
                    height={52}
                  />
                )}
              </div>
            )}
            {!hideTitle && <Title className={classes?.title}>{title}</Title>}
            {!hideSubtitle && <Subtitle className={classes?.subtitle}>{title}</Subtitle>}
          </div>
          <div className={cn(styles['bottom-wrapper'])}>
            {!hideDescription && (
              <Description className={classes?.description}>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit, sed do eiusmod tempor.
              </Description>
            )}
            <div
              className={cn(styles['buttons-wrapper'], classes?.buttonsWrapper, {
                [styles['demo-button']]: isDisabled,
              })}
            >
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
              {!hideLearnMore && (
                <Link href={linkUrl} className={classes?.link} rel="noreferrer" target="_blank">
                  {learnMoreText}
                </Link>
              )}
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default Tile;
