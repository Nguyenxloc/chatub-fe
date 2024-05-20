
export default function DetailProduct({ id }) {
  console.log("id: " + id);
  const data = {};

  return (
    <div className="flex w-full flex-wrap border">
      <div className="flex w-6/12 flex-col gap-5 border">
        <div className="">
          <img
            src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/03/Mac-mini-2023-2.jpg"
            alt=""
          />
        </div>
        <div className="flex gap-5">
          <img
            className="h-[80px] w-[100px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnEWUIceil35U7DxH9_MSd1eKfSH9sPbcXeEzeFGDwAQ&s"
            alt=""
          />
          <img
            className="h-[80px] w-[100px]"
            src="https://www.digitaltrends.com/wp-content/uploads/2023/02/mac-mini-m2-pro-01.jpg?p=1"
            alt=""
          />
          <img
            className="h-[80px] w-[100px]"
            src="https://cdn.mos.cms.futurecdn.net/4wr7d9RzrqSYsYxN4j6gDE.jpg"
            alt=""
          />
          <img
            className="h-[80px] w-[100px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4EzBrbWUdWJsR_zPpzpRg2_IKVzr0xoD3nrIM0pB8g&s"
            alt=""
          />
          <img
            className="h-[80px] w-[100px]"
            src="https://24hstore.vn/upload_images/images/2023/02/06/Mac-Mini-2023-M2-5.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-6/12 border">
        <div
          className="w-full"
        >
          <a>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>
          </a>
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              $599
            </h1>
            <a
              href="#"
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
