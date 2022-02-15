import React, { useEffect, useState } from 'react';
import Button from '../Button';
import Image from '../Image';
import styles from './Tile.module.css';
import Link from '../Link';
import Title from '../Title';
import Card from '../Card';
import cn from 'classnames';
import { TileProps } from '../interfaces/marketplace';

const DEFAULT_INSTALL_TEXT = 'INSTALL APP';
const DEFAULT_UNINSTALL_TEXT = 'UNINSTALL APP';

const Tile: React.FC<TileProps> = ({
  title,
  classes,
  images,
  installText,
  uninstallText,
  hideLink,
  linkInnerText,
  hideTitle,
  hideImages,
  onMainActionClick,
  getCustomBody,
  getInstallUrl,
  onCommitSession,
  onUninstall,
  getIsInstalled,
}) => {
  const [isInstalled, setIsInstalled] = useState(false);
  const params = new URLSearchParams(window.location.search);
  const [url, setUrl] = useState('');
  const buttonText = isInstalled ? uninstallText || DEFAULT_UNINSTALL_TEXT : installText || DEFAULT_INSTALL_TEXT;

  useEffect(() => {
    const checkInstallState = async () => {
      const installationState = await getIsInstalled?.();
      setIsInstalled(!!installationState);
    };

    checkInstallState();
  }, []);

  useEffect(() => {
    const commitSession = async () => {
      const session = params.get('session');
      if (session) {
        await onCommitSession?.(session);
        const installationState = await getIsInstalled?.();
        setIsInstalled(!!installationState);
      }
    };

    commitSession();
  }, []);

  useEffect(() => {
    const setInstallUrl = async () => {
      const installUrl = await getInstallUrl?.();
      setUrl(installUrl || '');
    };

    setInstallUrl();
  }, []);

  const handleClick = async () => {
    onMainActionClick?.();
    if (isInstalled) {
      await onUninstall?.();
      const installationState = await getIsInstalled?.();
      setIsInstalled(!!installationState);
    } else {
      window.open(url);
    }
  };

  return (
    <>
      {getCustomBody ? (
        getCustomBody({
          handleClick,
        })
      ) : (
        <Card className={classes?.card}>
          {!hideTitle && <Title className={classes?.title}>{title}</Title>}
          {!hideImages && (
            <div className={cn(styles['images-wrapper'], classes?.imagesWrapper)}>
              {images?.map((image) => (
                <Image key={image.alt} image={image} className={classes?.image} />
              ))}
            </div>
          )}
          <div className={cn(styles['buttons-wrapper'], classes?.buttonsWrapper)}>
            {!hideLink && (
              <Link className={classes?.link} rel="noreferrer" target="_blank">
                {linkInnerText}
              </Link>
            )}
            <Button onClick={handleClick} isInstalled={isInstalled} className={classes?.button}>
              {buttonText}
            </Button>
          </div>
        </Card>
      )}
    </>
  );
};

export default Tile;
