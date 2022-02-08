import React from 'react';
import { Image } from '../interfaces/marketplace';
import styles from './BaseImage.module.css';

interface Props {
  image?: Image;
}

const BaseImage: React.FC<Props> = ({ image }) => {
  return (
    <img
      className={`${styles['image']} ${image?.class ?? ''}`}
      src={image?.src}
      alt={image?.alt || 'integration-img'}
    />
  );
};

export default BaseImage;
