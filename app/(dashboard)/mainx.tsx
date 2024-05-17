"use client"
import { HomePage } from "./routes-page/homePage";
import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom"
export const Mainx = createBrowserRouter(
  [
    {
      path:"/home",
      element: <HomePage/>
    }
  ]
)
