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
  buttonUninstallInnertext,
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

  const BaseButtonWithClick = addClickToComponent(
    <BaseButton
      customButtonElement={customButtonElement}
      isInstalled={isInstalled}
      buttonClass={buttonClass}
      buttonInstallInnerText={buttonInstallInnerText}
      buttonUninstallInnerText={buttonUninstallInnertext}
    />
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
          title,
          buttonClass,
          buttonInstallInnerText,
          buttonUninstallInnertext,
          buttonsWrapperClass,
          images,
          linkClass,
          linkInnerText,
          link,
          titleClass,
          cardClass,
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
