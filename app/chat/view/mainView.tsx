import { BrowserView, MobileView } from "react-device-detect";
import ChatBrowser from "../component/chatBrowser";
import ChatMobile from "../component/chatMobile";

export default function MainView(){
    return(
        <div>
        <BrowserView>
          <ChatBrowser/>
        </BrowserView>
        <MobileView>
          <ChatMobile/>
        </MobileView>
      </div>
    )
}