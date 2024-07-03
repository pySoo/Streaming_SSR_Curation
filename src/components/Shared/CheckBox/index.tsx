import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

interface Props {
  value: boolean;
  size?: number;
  onChange: (value: boolean) => void;
}

export default function Checkbox({ value, size = 25, onChange }: Props) {
  const toggleValue = () => {
    onChange(!value);
  };

  return (
    <button
      onClick={toggleValue}
      className={`${value ? 'text-highlight' : 'text-gray-500'}`}
      style={{
        filter: 'drop-shadow(#ccc 0.1rem 0.1rem 0.05rem)',
      }}
    >
      {value ? (
        <MdCheckBox size={size} />
      ) : (
        <MdCheckBoxOutlineBlank size={size} />
      )}
    </button>
  );
}
