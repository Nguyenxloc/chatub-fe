
"use client"
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./routes-page/homePage";
export const Mainx = createBrowserRouter(
  [
    {
      path:"/home",
      element: <HomePage/>
    }
  ]
)
export default function Page() {
  Mainx
  return (
    <div>
       hello world
    </div>
  );
}