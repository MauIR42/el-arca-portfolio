import type { ReactNode } from "react";
import MainNav from "../components/layout/main-nav";
import { Footer } from "../components/layout/footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <MainNav />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}