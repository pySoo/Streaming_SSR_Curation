import { FaHeart, FaRegHeart } from 'react-icons/fa6';

interface Props {
  value: boolean;
  size?: number;
  onChange: (value: boolean) => void;
}

export default function LikeButton({ value, size = 20, onChange }: Props) {
  const toggleValue = () => {
    onChange(!value);
  };

  return (
    <button
      onClick={toggleValue}
      className={`${value ? 'text-[#ED4855]' : 'text-white'}`}
      style={{
        filter: `drop-shadow(${value ? '#888' : '#444'} 0.1rem 0.1rem 0.1rem)`,
      }}
    >
      {value ? <FaHeart size={size} /> : <FaRegHeart size={size} />}
    </button>
  );
}
