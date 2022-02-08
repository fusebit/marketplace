import React from 'react';
import styles from './Title.module.css';

interface Props {
  title?: string;
  titleClass?: string;
}

const Title: React.FC<Props> = ({ titleClass, title }) => {
  return <h4 className={`${styles['title']} ${titleClass ?? ''}`}>{title}</h4>;
};

export default Title;
