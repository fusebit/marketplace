import React from 'react';
import { ImageProps } from '../interfaces/marketplace';
import cn from 'classnames';
import styles from './Image.module.css';

interface Props {
  image?: ImageProps;
  className?: string;
  singleImage: boolean;
}

const Image: React.FC<Props> = ({ image, className, singleImage }) => {
  return (
    <img
      className={cn(singleImage ? styles['single-image'] : styles['multi-image'], className)}
      src={image?.src}
      alt={image?.alt || 'integration-img'}
    />
  );
};

export default Image;
