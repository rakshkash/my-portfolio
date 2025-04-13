"use client";

import Header from "./components/header";
import PortfolioBody from "./components/portfolio-body";
import "./globals.css";

export default function MyHome() {
  return (
    <main className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white dark:text-white dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Header />
      <PortfolioBody />
      <footer className="text-center text-sm text-slate-400 pb-4">
        © {new Date().getFullYear()} Raksh. All rights reserved.
      </footer>
    </main>
  );
}
