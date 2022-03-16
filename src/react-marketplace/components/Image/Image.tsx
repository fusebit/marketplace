import React from 'react';
import cn from 'classnames';
import { ImageProps } from '../interfaces/marketplace';
import styles from './Image.module.css';

interface Props {
  image?: ImageProps;
  className?: string;
  title: string;
  height?: number;
}

const Image: React.FC<Props> = ({ image, className, title, height }) => (
  <img
    title={title}
    className={cn(styles['single-image'], className)}
    src={image?.src}
    alt={image?.alt || 'integration-img'}
    height={height}
  />
);

export default Image;
