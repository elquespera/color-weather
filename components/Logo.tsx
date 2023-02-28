interface LogoProps {
  onClick?: () => void;
}

export default function Logo({ onClick }: LogoProps) {
  return (
    <div className="flex" onClick={onClick}>
      <span className="translate-y-[0.2em] text-[0.8em] text-primary-100">
        C
      </span>
      <span className="font-semibold">W</span>
    </div>
  );
}
