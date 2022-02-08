import React from 'react';
import BaseButton from '../BaseButton';
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
  customButtonElement,
  customLinkElement,
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

  const addClickToComponent = (component: JSX.Element) =>
    React.cloneElement(component, {
      onClick: handleClick,
    });

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

  const BaseButtonWithClick = addClickToComponent(
    customButtonElement ? (
      customButtonElement
    ) : (
      <BaseButton isInstalled={isInstalled} buttonClass={buttonClass}>
        {installAppInnerText}
      </BaseButton>
    )
  );

  const LinkComponent = (() => {
    if (hideLink) {
      return null;
    }

    if (customLinkElement) {
      return customLinkElement;
    } else {
      return <Link linkClass={linkClass} linkInnerText={linkInnerText} link={link} />;
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
            {LinkComponent}
            {BaseButtonWithClick}
          </div>
        </Card>
      )}
    </>
  );
};

export default Tile;
