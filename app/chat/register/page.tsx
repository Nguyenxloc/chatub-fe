"use client"
import { BrowserView, MobileView } from "react-device-detect";
import RegisterView from "./registerView";
export default function Page() {
  return (
      <div>
          <RegisterView/>
      </div>
  );
}