import React from 'react';
import Button from '../Button';
import Image from '../Image';
import styles from './Tile.module.css';
import Link from '../Link';
import Title from '../Title';
import Card from '../Card';
import { TileProps } from '../interfaces/marketplace';

const Tile: React.FC<TileProps> = ({
  title,
  images,
  cardClass,
  titleClass,
  imagesWrapperClass,
  buttonsWrapperClass,
  buttonClass,
  buttonInstallInnerText,
  buttonUninstallInnerText,
  hideLink,
  linkClass,
  linkInnerText,
  link,
  hideTitle,
  hideImages,
  onMainActionClick,
  getCustomBody,
}) => {
  const isInstalled = false;

  const handleClick = () => {
    onMainActionClick?.();
  };

  const installAppInnerText = (() => {
    if (isInstalled) {
      if (buttonUninstallInnerText) {
        return buttonUninstallInnerText;
      } else {
        return 'UNINSTALL APP';
      }
    } else {
      if (buttonInstallInnerText) {
        return buttonInstallInnerText;
      } else {
        return 'INSTALL APP';
      }
    }
  })();

  return (
    <>
      {getCustomBody ? (
        getCustomBody({
          handleClick,
        })
      ) : (
        <Card cardClass={cardClass}>
          {!hideTitle && <Title title={title} titleClass={titleClass} />}
          {!hideImages && (
            <div className={`${styles['images-wrapper']} ${imagesWrapperClass ?? ''}`}>
              {images?.map((image) => (
                <Image key={image.alt} image={image} />
              ))}
            </div>
          )}
          <div className={`${styles['buttons-wrapper']} ${buttonsWrapperClass ?? ''}`}>
            {!hideLink && <Link linkClass={linkClass} linkInnerText={linkInnerText} link={link} />}
            <Button isInstalled={isInstalled} buttonClass={buttonClass}>
              {installAppInnerText}
            </Button>
          </div>
        </Card>
      )}
    </>
  );
};

export default Tile;
