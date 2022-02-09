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
  classes?: {
    link?: string;
    card?: string;
    title?: string;
    image?: string;
    button?: string;
    imagesWrapper?: string;
    buttonsWrapper?: string;
  };
  linkInnerText?: string;
  installText?: string;
  uninstallText?: string;
  onMainActionClick?: () => void;
  getCustomBody?: (obj: CustomBodyProps) => React.ReactNode;
} & ({ title: string; hideTitle?: never } | { title?: never; hideTitle: boolean }) &
  ({ images: ImageProps[]; hideImages?: never } | { images?: never; hideImages: boolean }) &
  ({ link: HTMLAnchorElement; hideLink?: never } | { link?: never; hideLink: boolean });

export interface MarketplaceProps {
  integrations: TileProps[];
  wrapperClass?: string;
}
