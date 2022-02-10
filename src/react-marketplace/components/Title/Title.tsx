import React from 'react';
import cn from 'classnames';
import styles from './Title.module.css';

interface Props {
  className?: string;
}

const Title: React.FC<Props> = ({ className, children }) => {
  return <h4 className={cn(styles.title, className)}>{children}</h4>;
};

export default Title;
