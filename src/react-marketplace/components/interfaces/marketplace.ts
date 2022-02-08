import React from 'react';

export interface ImageProps {
  src: string;
  alt: string;
  class?: string;
}

export interface CustomBodyProps {
  title?: string;
  images?: ImageProps[];
  imageAlt?: string;
  linkUrl?: string;
  cardClass?: string;
  titleClass?: string;
  buttonsWrapperClass?: string;
  linkClass?: string;
  buttonClass?: string;
  linkInnerText?: string;
  buttonInstallInnerText?: string;
  buttonUninstallInnertext?: string;
  linkTarget?: '_blank' | '_parent' | '_self' | '_top';
  handleClick: () => void;
}

export type TileProps = {
  id: string;
  cardClass?: string;
  titleClass?: string;
  imagesWrapperClass?: string;
  buttonsWrapperClass?: string;
  linkClass?: string;
  buttonClass?: string;
  linkInnerText?: string;
  buttonInstallInnerText?: string;
  buttonUninstallInnertext?: string;
  linkTarget?: '_blank' | '_parent' | '_self' | '_top';
  customLinkElement?: JSX.Element;
  customButtonElement?: JSX.Element;
  onMainActionClick?: () => void;
  getCustomBody?: (obj: CustomBodyProps) => React.ReactNode;
} & ({ title: string; hideTitle?: never } | { title?: never; hideTitle: boolean }) &
  ({ images: ImageProps[]; hideImages?: never } | { images?: never; hideImages: boolean }) &
  ({ linkUrl: string; hideLink?: never } | { linkUrl?: never; hideLink: boolean });

export interface MarketplaceProps {
  integrations: TileProps[];
  wrapperClass?: string;
}
