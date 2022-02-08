import React from 'react';
import styles from './Link.module.css';

interface Props {
  hideLink?: boolean;
  customLinkElement?: JSX.Element;
  linkUrl?: string;
  linkTarget?: string;
  linkClass?: string;
  linkInnerText?: string;
}

const Link: React.FC<Props> = ({ linkClass, linkInnerText, linkTarget, linkUrl, customLinkElement, hideLink }) => {
  if (hideLink) {
    return null;
  }

  if (customLinkElement) {
    return customLinkElement;
  }

  return (
    <a
      href={linkUrl}
      rel="noreferrer"
      target={linkTarget || '_blank'}
      className={`${styles['link']} ${linkClass ?? ''}`}
    >
      {linkInnerText || 'LEARN MORE'}
    </a>
  );
};

export default Link;
