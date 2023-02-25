import Link from "next/link";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header>
      <h1>Weather App</h1>
      <div>
        <Link href="/">Current</Link>
        <Link href="/tomorrow">Tomorrow</Link>
        <Link href="/5-days">5 days</Link>
      </div>
    </header>
  );
}
