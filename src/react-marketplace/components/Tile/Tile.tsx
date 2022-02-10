import React, { useEffect, useState } from 'react';
import Button from '../Button';
import Image from '../Image';
import styles from './Tile.module.css';
import Link from '../Link';
import Title from '../Title';
import Card from '../Card';
import cn from 'classnames';
import { SessionData, TileProps } from '../interfaces/marketplace';

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
}) => {
  const [installUrl, setInstallUrl] = useState('');
  const isInstalled = false;

  const buttonText = isInstalled ? uninstallText || DEFAULT_UNINSTALL_TEXT : installText || DEFAULT_INSTALL_TEXT;

  const handleClick = () => {
    onMainActionClick?.();
    window.open(installUrl);
  };

  useEffect(() => {
    const postData = async (url = '', data = {}) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UQkZRemxDTURWR1EwSTBNRGc1UmpOQ1JqSkNRVGczTmpZNFJqRXlNRVUyTTBSRE9ETTROdyJ9.eyJodHRwczovL2Z1c2ViaXQuaW8vcHJvZmlsZSI6eyJhY2NvdW50SWQiOiJhY2MtODYyOWFlNDhmNTEzNGJmOCIsInN1YnNjcmlwdGlvbklkIjoic3ViLTNkMDcyZjBhODFlMzQzMWMiLCJ1c2VySWQiOiJ1c3ItOTg1MmU1YThlOTBlNDgxMyJ9LCJpc3MiOiJodHRwczovL2F1dGguZnVzZWJpdC5pby8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDEwNzc5NjQ2MTg3MjY1MDcwNDE2OSIsImF1ZCI6WyJodHRwczovL3N0YWdlLnVzLXdlc3QtMi5mdXNlYml0LmlvIiwiaHR0cHM6Ly9mdXNlYml0LmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2NDQ1MDE2MzUsImV4cCI6MTY0NDU4ODAzNSwiYXpwIjoiZGltdWxzNlZMWWdYcEQ3VVlDbzZ5UGRLQVhQWGpRbmciLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIn0.Jy4C2Gl2NNcS7NGLatdMfZu9UlhyDEcRQ4zDu5zQuQwwqlMt_cG2VhW4EIHnkJuOhKuRRftd6K_gN2TUN_j0XJrQKBZag4DlPjpJAnj2TIT3cS_Bq3fP14qh4DHItbT2GE7grnDQXUO_dwxkhW8sGbqPFw8biCHoOF79rnJKMJMzEibMWCvTZ2zdEACrq-BLGiYCBZFL3wdFyECPd3jzGcMnOefYndkEZyAXTdY8pUu7EHUsYLTdfp1OZhkGUbOmpoxfF8FJhW26TYrGe4LkkC39TEMejXjQzI8cM438pJqDpguXb3skNeSw9jrMeRK9oBrhhMRFDbIPGGu3NZirjg',
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
      });
      return response.json();
    };

    postData(
      'https://stage.us-west-2.fusebit.io/v2/account/acc-8629ae48f5134bf8/subscription/sub-3d072f0a81e3431c/integration/my-integration-901/session',
      {
        redirectUrl:
          'https://stage-manage.fusebit.io/account/acc-8629ae48f5134bf8/subscription/sub-3d072f0a81e3431c/integration/my-integration-901/edit',
        tags: {
          'fusebit.tenantId': 'usr-9852e5a8e90e4813',
        },
      }
    )
      .then((data: SessionData) => {
        setInstallUrl(data.targetUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
