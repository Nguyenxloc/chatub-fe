"use client";
import Cmp from "@/types/Cmp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Cmp/>
      </div>
    </main>
  );
}
