interface LogoProps {
  onClick?: () => void;
}

export default function Logo({ onClick }: LogoProps) {
  return (
    <div className="flex leading-none small-caps w-8" onClick={onClick}>
      <span className="translate-y-[0.3em] translate-x-[0.1em] text-[0.875em] text-primary-100">
        c<span className="hidden md:inline">olor</span>
      </span>
      <span className="font-semibold">
        w<span className="hidden md:inline">eather</span>
      </span>
    </div>
  );
}
