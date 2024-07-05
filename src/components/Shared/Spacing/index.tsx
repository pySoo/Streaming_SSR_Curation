export default function Spacing({ size }: { size: number }) {
  return (
    <div
      className={`w-full flex-none`}
      style={{
        height: `${size}px`,
      }}
    />
  );
}
