import React from 'react';
import { ImageProps } from '../interfaces/marketplace';
import cn from 'classnames';
import styles from './Image.module.css';

interface Props {
  image?: ImageProps;
}

const Image: React.FC<Props> = ({ image }) => {
  return <img className={cn(styles.image, image?.class)} src={image?.src} alt={image?.alt || 'integration-img'} />;
};

export default Image;
