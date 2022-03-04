import React from 'react';
import cn from 'classnames';
import { ImageProps } from '../interfaces/marketplace';
import styles from './Image.module.css';

interface Props {
  image?: ImageProps;
  className?: string;
  singleImage: boolean;
  title: string;
}

const Image: React.FC<Props> = ({ image, className, singleImage, title }) => (
  <img
    title={title}
    className={cn(singleImage ? styles['single-image'] : styles['multi-image'], className)}
    src={image?.src}
    alt={image?.alt || 'integration-img'}
  />
);

export default Image;
