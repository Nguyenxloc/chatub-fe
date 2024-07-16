"use client"
import { BrowserView, MobileView } from "react-device-detect";
import SignUpView from "./signUpView";
export default function Page() {
  return (
      <div>
          <SignUpView/>
      </div>
  );
}