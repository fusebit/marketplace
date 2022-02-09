import React from 'react';
import cn from 'classnames';
import styles from './Title.module.css';

interface Props {
  title?: string;
  className?: string;
}

const Title: React.FC<Props> = ({ className, title }) => {
  return <h4 className={cn(styles.title, className)}>{title}</h4>;
};

export default Title;
