import { useEffect, useState } from 'react';
import { InstallStatusResponse } from '../interfaces/marketplace';

interface Props {
  integrationId: string;
  onMainActionClick?: () => void;
  getInstallUrl?: () => Promise<string>;
  getIsInstalled?: () => Promise<boolean>;
  onCommitSession?: (session: string) => Promise<void>;
  onUninstall?: () => Promise<void>;
  onUninstalled?: (res: InstallStatusResponse) => void;
  onInstalled?: (res: InstallStatusResponse) => void;
}

const useTile = ({
  integrationId,
  onMainActionClick,
  getInstallUrl,
  getIsInstalled,
  onCommitSession,
  onInstalled,
  onUninstall,
  onUninstalled,
}: Props) => {
  const [isInstalled, setIsInstalled] = useState(false);
  const params = new URLSearchParams(window.location.search);
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkInstallState = async () => {
      try {
        const installationState = await getIsInstalled?.();
        setIsInstalled(!!installationState);
        const session = params.get('session');
        const id = params.get('integrationId');
        if (!session || integrationId !== id) {
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    checkInstallState();
  }, []);

  useEffect(() => {
    const commitSession = async () => {
      const session = params.get('session');
      const id = params.get('integrationId');
      if (session && integrationId === id) {
        setLoading(true);
        try {
          await onCommitSession?.(session);
          const installationState = await getIsInstalled?.();
          setIsInstalled(!!installationState);
          onInstalled?.({
            message: `Successfully installed ${integrationId}`,
            status: 'success',
          });
          setLoading(false);
        } catch (err) {
          onInstalled?.({
            message: `There was an error installing ${integrationId}`,
            status: 'error',
            err,
          });
          setLoading(false);
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
      setLoading(true);
      try {
        await onUninstall?.();
        const installationState = await getIsInstalled?.();
        setIsInstalled(!!installationState);
        onUninstalled?.({
          message: `Successfully uninstalled ${integrationId}`,
          status: 'success',
        });
        setLoading(false);
      } catch (err) {
        onUninstalled?.({
          message: `There was an error uninstalling ${integrationId}`,
          status: 'error',
          err,
        });
        setLoading(false);
      }
    } else {
      window.open(url);
    }
  };

  return {
    isInstalled,
    handleClick,
    loading,
  };
};

export default useTile;
