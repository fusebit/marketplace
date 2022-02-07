import React from "react";
import useGetTileElements from "../hooks/useGetTileElements";
import { TileProps } from "../interfaces/marketplace";

const Tile: React.FC<TileProps> = ({
  title,
  image,
  imageAlt,
  wrapperClass,
  titleClass,
  imageClass,
  actionsWrapperClass,
  docsLinkClass,
  mainActionClass,
  docsLinkInnerText,
  mainActionInstallInnerText,
  mainActionUninstallInnertext,
  docsLinkTarget,
  docsLinkUrl,
  disableDocsLink,
  disableTitle,
  disableImage,
  customDocsLinkElement,
  customMainActionElement,
  onMainActionClick,
  children,
}) => {
  const isInstalled = false;

  const { docsElement, mainActionElement } = useGetTileElements({
    isInstalled,
    mainActionUninstallInnertext,
    mainActionInstallInnerText,
    mainActionClass,
    disableDocsLink,
    docsLinkUrl,
    docsLinkTarget,
    docsLinkClass,
    docsLinkInnerText,
    customDocsLinkElement,
    customMainActionElement,
  });

  const handleClick = () => {
    onMainActionClick?.();
  };

  const addClickToComponent = (component: JSX.Element) =>
    React.cloneElement(component, {
      onClick: handleClick,
    });

  const mainAction = addClickToComponent(mainActionElement);

  return (
    <div className={`tile-wrapper ${wrapperClass ?? ""}`}>
      {!disableTitle && (
        <h4 className={`tile-title ${titleClass ?? ""}`}>{title}</h4>
      )}
      {!disableImage && (
        <img
          className={`tile-image ${imageClass ?? ""}`}
          src={image}
          alt={imageAlt || title || "integration-img"}
        />
      )}
      {children}
      <div className={`tile-actions-wrapper ${actionsWrapperClass ?? ""}`}>
        {docsElement}
        {mainAction}
      </div>
    </div>
  );
};

export default Tile;
