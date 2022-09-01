import { useState } from 'react';

export const useFiltering = searchParams => {
  const [state, setState] = useState(() => {
    const data = searchParams.get('filtering');
    if (!data) {
      return null;
    }
    const dataSplit = data.split('-');
    return { value: Number(dataSplit[0]), label: dataSplit[1] };
  });

  return [state, setState];
};