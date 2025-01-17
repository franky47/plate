import React from 'react';

import { PlateChangeKey } from '../../../types/index';
import { PlateId, usePlateActions } from '../createPlateStore';

export const useIncrementVersion = (key: PlateChangeKey, id?: PlateId) => {
  const previousVersionRef = React.useRef(1);

  const set = usePlateActions(id)[key]();

  return React.useCallback(() => {
    const nextVersion = previousVersionRef.current + 1;
    set(nextVersion);
    previousVersionRef.current = nextVersion;
  }, [set]);
};
