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
  integrationId,
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
  onInstalled,
  onUninstalled,
  getIsInstalled,
}) => {
  const [isInstalled, setIsInstalled] = useState(false);
  const params = new URLSearchParams(window.location.search);
  const [url, setUrl] = useState('');
  const buttonText = isInstalled ? uninstallText || DEFAULT_UNINSTALL_TEXT : installText || DEFAULT_INSTALL_TEXT;

  useEffect(() => {
    const checkInstallState = async () => {
      try {
        const installationState = await getIsInstalled?.();
        setIsInstalled(!!installationState);
      } catch (err) {
        console.log(err);
      }
    };

    checkInstallState();
  }, []);

  useEffect(() => {
    const commitSession = async () => {
      const session = params.get('session');
      const id = params.get('integrationId');
      if (session && integrationId === id) {
        try {
          await onCommitSession?.(session);
          const installationState = await getIsInstalled?.();
          setIsInstalled(!!installationState);
          onInstalled?.({
            message: `Successfully installed ${integrationId}`,
            status: 'success',
          });
        } catch (err) {
          onInstalled?.({
            message: `There was an error installing ${integrationId}`,
            status: 'error',
            err,
          });
        }
      }
    };

    commitSession();
  }, []);

  useEffect(() => {
    const setInstallUrl = async () => {
      try {
        const installUrl = await getInstallUrl?.();
        setUrl(installUrl || '');
      } catch (err) {
        console.log(err);
      }
    };

    setInstallUrl();
  }, []);

  const handleClick = async () => {
    onMainActionClick?.();
    if (isInstalled) {
      try {
        await onUninstall?.();
        const installationState = await getIsInstalled?.();
        setIsInstalled(!!installationState);
        onInstalled?.({
          message: `Successfully uninstalled ${integrationId}`,
          status: 'success',
        });
      } catch (err) {
        onInstalled?.({
          message: `There was an error uninstalling ${integrationId}`,
          status: 'error',
          err,
        });
      }
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
