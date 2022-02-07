import React from 'react';
import BaseButton from '../BaseButton';
import BaseButtonsWrapper from '../BaseButtonsWrapper';
import BaseImage from '../BaseImage';
import BaseImagesWrapper from '../BaseImagesWrapper';
import BaseLink from '../BaseLink';
import BaseTitle from '../BaseTitle';
import BaseWrapper from '../BaseWrapper';
import { TileProps } from '../interfaces/marketplace';

const Tile: React.FC<TileProps> = ({
  title,
  images,
  wrapperClass,
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
          wrapperClass,
        })
      ) : (
        <BaseWrapper wrapperClass={wrapperClass}>
          <BaseTitle title={title} titleClass={titleClass} hideTitle={hideTitle} />
          {!hideImages && (
            <BaseImagesWrapper imagesWrapperClass={imagesWrapperClass}>
              {images?.map((image) => (
                <BaseImage key={image.alt} image={image} />
              ))}
            </BaseImagesWrapper>
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
        </BaseWrapper>
      )}
    </>
  );
};

export default Tile;
