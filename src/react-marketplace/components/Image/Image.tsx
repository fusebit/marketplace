import React from 'react';
import { ImageProps } from '../interfaces/marketplace';
import styles from './Image.module.css';

interface Props {
  image?: ImageProps;
}

const Image: React.FC<Props> = ({ image }) => {
  return (
    <img
      className={`${styles['image']} ${image?.class ?? ''}`}
      src={image?.src}
      alt={image?.alt || 'integration-img'}
    />
  );
};

export default Image;
