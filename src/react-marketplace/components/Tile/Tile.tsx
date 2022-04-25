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
  customDescription,
  customSubtitle,
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
  const { handleClick, loading, image, linkUrl, subtitle: feedSubtitle, description: feedDescription } = useTile({
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
          <div className={cn(styles['top-content'], classes?.topContent, { [styles['demo-top-content']]: isDisabled })}>
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
            {!hideSubtitle && <Subtitle className={classes?.subtitle}>{customSubtitle || feedSubtitle}</Subtitle>}
          </div>
          <div className={cn(styles['bottom-content'], classes?.bottomContent, { [styles['demo-card']]: isDisabled })}>
            {!hideDescription && (
              <Description className={classes?.description}>{customDescription || feedDescription}</Description>
            )}
            <div className={cn(styles['buttons-wrapper'], classes?.buttonsWrapper)}>
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
                <Link
                  href={linkUrl}
                  className={cn(classes?.link, {
                    [styles['demo-link']]: isDisabled,
                  })}
                  rel="noreferrer"
                  target="_blank"
                >
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
