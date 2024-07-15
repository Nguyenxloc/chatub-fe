import { Card } from "flowbite-react";
export default function ChatMobile() {
  return (
    <div className="flex flex-cols gap-3">
      <div className="max-w-md border flex flex-cols gap-2 p-3 hover:bg-gray-100 w-4/12">
        <img
          src="https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/306316719_5207478342714818_7984495956455627093_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFP_e9aP-UhSOaP8e9ciINhKXODY68QpWMpc4NjrxClY1EtE06qn1Y3_dQsLF0r0CL1dqhuAu5E1xcV9KHNbnAZ&_nc_ohc=dEp_k6DLFuQQ7kNvgERVARy&_nc_ht=scontent.fhan4-3.fna&oh=00_AYA9mVh_HbKhWbC9-akGhbYdLEOIY9wiJceaCJQGFoj28Q&oe=669A40F2"
          alt="Nguyễn Lộc"
          className="h-16 w-16 rounded-full object-cover"
        />
        <div className="">
          <div className="flex gap-[120px]">
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Nguyễn Lộc
          </h5>   
          <p>datetime</p>         
          </div>
          <p className="text-xl font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise
          </p>
        </div>
      </div>
      <div className="border w-8/12">
            box chat
      </div>
    </div>
  );
}
