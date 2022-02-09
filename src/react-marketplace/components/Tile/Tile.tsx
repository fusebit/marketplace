import React from 'react';
import Button from '../Button';
import Image from '../Image';
import styles from './Tile.module.css';
import Link from '../Link';
import Title from '../Title';
import Card from '../Card';
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
  link,
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
        <Card cardClass={classes?.card}>
          {!hideTitle && <Title title={title} titleClass={classes?.title} />}
          {!hideImages && (
            <div className={`${styles['images-wrapper']} ${classes?.imagesWrapper ?? ''}`}>
              {images?.map((image) => (
                <Image key={image.alt} image={image} />
              ))}
            </div>
          )}
          <div className={`${styles['buttons-wrapper']} ${classes?.buttonsWrapper ?? ''}`}>
            {!hideLink && <Link linkClass={classes?.link} linkInnerText={linkInnerText} link={link} />}
            <Button isInstalled={isInstalled} buttonClass={classes?.button}>
              {buttonText}
            </Button>
          </div>
        </Card>
      )}
    </>
  );
};

export default Tile;
