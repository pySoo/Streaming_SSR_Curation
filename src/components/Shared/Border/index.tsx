export default function Border({ size }: { size: number }) {
  return (
    <div
      className={`w-full bg-white/20 rounded-sm`}
      style={{
        height: `${size}px`,
      }}
    />
  );
}
