import React from 'react';
import styles from './Title.module.css';

interface Props {
  title?: string;
  titleClass?: string;
  hideTitle?: boolean;
}

const Title: React.FC<Props> = ({ titleClass, hideTitle, title }) => {
  if (!hideTitle) {
    return <h4 className={`${styles['title']} ${titleClass ?? ''}`}>{title}</h4>;
  }

  return null;
};

export default Title;
