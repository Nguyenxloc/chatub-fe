export default function DetailProduct({ id }) {
  console.log("id: " + id);
  const data = {};

  return (
    <div className="flex w-full flex-wrap border">
      <div className="flex w-6/12 flex-col gap-5 border">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnEWUIceil35U7DxH9_MSd1eKfSH9sPbcXeEzeFGDwAQ&s"
          alt=""
        />
        <div className="flex gap-5">
          <div
            className="relative h-[80px] w-[120px] overflow-hidden bg-cover bg-no-repeat border"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnEWUIceil35U7DxH9_MSd1eKfSH9sPbcXeEzeFGDwAQ&s"
              className="h-[80px] w-[120px]"
              alt="Louvre"
            />
            <a onClick={()=>console.log("tes")}>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
          <div
            className="relative h-[80px] w-[120px] overflow-hidden bg-cover bg-no-repeat border"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img
              src="https://www.digitaltrends.com/wp-content/uploads/2023/02/mac-mini-m2-pro-01.jpg?p=1"
              className="h-[80px] w-[120px]"
              alt="Louvre"
            />
            <a href="#!">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
          <div
            className="relative h-[80px] w-[120px] overflow-hidden bg-cover bg-no-repeat border"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img
              src="https://cdn.mos.cms.futurecdn.net/4wr7d9RzrqSYsYxN4j6gDE.jpg"
              className="h-[80px] w-[120px]"
              alt="Louvre"
            />
            <a onClick={()=>console.log("tes")}>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>

          <div
            className="relative h-[80px] w-[120px] overflow-hidden bg-cover bg-no-repeat border"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4EzBrbWUdWJsR_zPpzpRg2_IKVzr0xoD3nrIM0pB8g&s"
              className="h-[80px] w-[120px]"
              alt="Louvre"
            />
            <a onClick={()=>console.log("tes")}>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
          <div
            className="relative h-[80px] w-[120px] overflow-hidden bg-cover bg-no-repeat border"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img
              src="https://24hstore.vn/upload_images/images/2023/02/06/Mac-Mini-2023-M2-5.png"
              className="h-[80px] w-[120px]"
              alt="Louvre"
            />
            <a onClick={()=>console.log("tes")}>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
        </div>
      </div>
      <div className="w-6/12 border">
        <div className="w-full">
          <a>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>
          </a>
          <div className="">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              $599
            </h1>
            <hr />
            <div>
              <h1 className="mt-5">Số lượng</h1>
              <input className="w-[50px]" type="number" />
            </div>
            <br />
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
