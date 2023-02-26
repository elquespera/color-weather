import Header from "./Header";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col items-center min-w-full min-h-screen ">
      <Header />
      <main className="w-full md:w-max-app min-h-screen pt-header flex">
        <div className="p-4 md:p-8 w-full bg-slate-300">{children}</div>
      </main>
    </div>
  );
}
