import NetInfo, { NetInfoStateType } from '@react-native-community/netinfo';
import { useEffect, useState } from 'react';

export function useNetworkInfo() {
  const [isGreatConnection, setIsGreatConnection] = useState(false);

  useEffect(() => {
    const unregister = NetInfo.addEventListener(state => {
      setIsGreatConnection(
        !!state.isConnected && state.type === NetInfoStateType.wifi,
      );
    });

    return () => {
      unregister();
    };
  }, []);

  return {
    isGreatConnection,
  };
}
