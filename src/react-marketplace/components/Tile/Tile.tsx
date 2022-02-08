import React from 'react';
import BaseButton from '../BaseButton';
import BaseButtonsWrapper from '../BaseButtonsWrapper';
import Image from '../Image';
import styles from './Tile.module.css';
import BaseLink from '../BaseLink';
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
  linkTarget,
  linkUrl,
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
          linkTarget,
          linkUrl,
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
          <BaseButtonsWrapper buttonsWrapperClass={buttonsWrapperClass}>
            <BaseLink
              customLinkElement={customLinkElement}
              linkClass={linkClass}
              linkInnerText={linkInnerText}
              linkTarget={linkTarget}
              linkUrl={linkUrl}
              hideLink={hideLink}
            />
            {BaseButtonWithClick}
          </BaseButtonsWrapper>
        </Card>
      )}
    </>
  );
};

export default Tile;
