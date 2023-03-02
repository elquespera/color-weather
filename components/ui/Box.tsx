import clsx from "clsx";

interface BoxProps {
  title?: string;
  className?: string;
  children?: React.ReactNode;
  horizontal?: boolean;
}

export default function Box({
  children,
  title,
  className,
  horizontal,
}: BoxProps) {
  const boxClass = "px-app sm:px-app-lg";
  const titleClass = "text-lg sm:text-xl text-primary-header";

  return title && !children ? (
    <h2 className={clsx(titleClass, boxClass, className)}>{title}</h2>
  ) : (
    <div
      className={clsx(boxClass, "flex", !horizontal && "flex-col", className)}
    >
      {title && <h2 className={titleClass}>{title}</h2>}
      {children}
    </div>
  );
}
