import { useEffect, useState } from 'react';

import { asyncStorageService } from '@/shared/service/asyncStorageService';

export const useAsyncStorageKeys = () => {
  const [keys, setKeys] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const items = await asyncStorageService.getAllItems();
      const ids = items ? items.map((item) => item.split('-').at(-1)) : [];

      setKeys(ids as string[]);
    })();
  }, [keys]);

  return { keys };
};
