import React from 'react';
import styles from './BaseImage.modules.css';

interface Props {
  imageClass?: string;
  image?: string;
  imageAlt?: string;
  title?: string;
  hideImage?: boolean;
}

const BaseImage: React.FC<Props> = ({ image, imageClass, imageAlt, title, hideImage }) => {
  if (!hideImage) {
    return (
      <img
        className={`${styles['image']} ${imageClass ?? ''}`}
        src={image}
        alt={imageAlt || title || 'integration-img'}
      />
    );
  }

  return null;
};

export default BaseImage;
