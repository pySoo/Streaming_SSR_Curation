import { useState } from 'react';

let idCounter = 0;

export const generateID = (prefix = 'id-') => {
  idCounter = idCounter + 1;
  return `${prefix}${idCounter}`;
};

export default function useId(prefix?: string) {
  const [id] = useState(() => {
    return generateID(prefix);
  });

  return id;
}
