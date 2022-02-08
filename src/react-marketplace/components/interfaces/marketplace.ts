import React from 'react';

export interface ImageProps {
  src: string;
  alt: string;
  class?: string;
}

export interface CustomBodyProps {
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
  buttonUninstallInnerText?: string;
  onMainActionClick?: () => void;
  getCustomBody?: (obj: CustomBodyProps) => React.ReactNode;
} & ({ title: string; hideTitle?: never } | { title?: never; hideTitle: boolean }) &
  ({ images: ImageProps[]; hideImages?: never } | { images?: never; hideImages: boolean }) &
  ({ link: HTMLAnchorElement; hideLink?: never } | { link?: never; hideLink: boolean });

export interface MarketplaceProps {
  integrations: TileProps[];
  wrapperClass?: string;
}
