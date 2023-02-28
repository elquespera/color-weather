interface LogoProps {
  onClick?: () => void;
}

export default function Logo({ onClick }: LogoProps) {
  return (
    <div className="flex leading-none" onClick={onClick}>
      <span className="translate-y-[0.4em] translate-x-[0.1em] text-[0.8em] text-primary-100">
        C
      </span>
      <span className="font-semibold">W</span>
    </div>
  );
}
