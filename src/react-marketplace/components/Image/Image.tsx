import React from 'react';
import { ImageProps } from '../interfaces/marketplace';
import cn from 'classnames';
import styles from './Image.module.css';

interface Props {
  image?: ImageProps;
  className?: string;
}

const Image: React.FC<Props> = ({ image, className }) => {
  return <img className={cn(styles.image, className)} src={image?.src} alt={image?.alt || 'integration-img'} />;
};

export default Image;
