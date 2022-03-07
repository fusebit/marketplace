import React from 'react';
import cn from 'classnames';
import styles from './Link.module.css';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
}

const Link: React.FC<Props> = ({ className, children, ...props }) => (
  <a {...props} className={cn(styles.link, className)}>
    {children || 'LEARN MORE'}
  </a>
);

export default Link;
