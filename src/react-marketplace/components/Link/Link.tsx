import React from 'react';
import styles from './Link.module.css';

interface Props {
  link?: HTMLAnchorElement;
  linkClass?: string;
  linkInnerText?: string;
}

const Link: React.FC<Props> = ({ linkClass, linkInnerText, link }) => {
  return (
    <a
      href={link?.href}
      rel={link?.rel}
      target={link?.target || '_blank'}
      className={`${styles['link']} ${linkClass ?? ''}`}
    >
      {linkInnerText || 'LEARN MORE'}
    </a>
  );
};

export default Link;
