import { ProductId } from '@/app/api/types';

import Checkbox from '../Shared/CheckBox';

interface Props {
  id: ProductId;
  value: boolean;
  onSelect: (id: ProductId, selected: boolean) => void;
}

export default function ProductCheckBox({ id, value, onSelect }: Props) {
  const handleClickCheckbox = (selected: boolean) => {
    onSelect(id, selected);
  };

  return (
    <Checkbox
      value={value}
      onChange={handleClickCheckbox}
    />
  );
}
