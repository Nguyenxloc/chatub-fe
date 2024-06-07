"use client";
import { BrowserView, MobileView } from "react-device-detect";
import DetailSP from "../detailSP";
import DetailSPMobile from "../detailSPMobile";
import { useParams } from "next/navigation";
export default function Page() {
  const params = useParams<{id:string}>();
  return (
    <div>
      <BrowserView>
        <DetailSP id={params.id}/>
      </BrowserView>
      <MobileView>
        <DetailSPMobile id={params.id}/>
      </MobileView>
    </div>
  );
}
