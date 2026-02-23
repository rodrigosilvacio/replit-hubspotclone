import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f5f8fa] text-foreground flex">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64 min-w-0">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
