import React from 'react';
import Button from '../Button';
import Image from '../Image';
import styles from './Tile.module.css';
import Link from '../Link';
import Title from '../Title';
import Card from '../Card';
import cn from 'classnames';
import { TileProps } from '../interfaces/marketplace';

const DEFAULT_INSTALL_TEXT = 'INSTALL APP';
const DEFAULT_UNINSTALL_TEXT = 'UNINSTALL APP';

const Tile: React.FC<TileProps> = ({
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
}) => {
  const isInstalled = false;

  const buttonText = isInstalled ? uninstallText || DEFAULT_UNINSTALL_TEXT : installText || DEFAULT_INSTALL_TEXT;

  const handleClick = () => {
    onMainActionClick?.();
  };

  return (
    <>
      {getCustomBody ? (
        getCustomBody({
          handleClick,
        })
      ) : (
        <Card className={classes?.card}>
          {!hideTitle && <Title title={title} className={classes?.title} />}
          {!hideImages && (
            <div className={cn(styles['images-wrapper'], classes?.imagesWrapper)}>
              {images?.map((image) => (
                <Image key={image.alt} image={image} />
              ))}
            </div>
          )}
          <div className={cn(styles['buttons-wrapper'], classes?.buttonsWrapper)}>
            {!hideLink && (
              <Link className={classes?.link} rel="noreferrer" target="_blank">
                {linkInnerText}
              </Link>
            )}
            <Button isInstalled={isInstalled} className={classes?.button}>
              {buttonText}
            </Button>
          </div>
        </Card>
      )}
    </>
  );
};

export default Tile;
