import { useRouter } from "next/navigation";
export default function CellProduct({ productCell }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/products/detail/" + productCell.id)}
      className="mt-5 w-[300px]"
    >
      <div
        className="relative h-[280px] w-[320px] overflow-hidden border bg-cover bg-no-repeat"
        data-twe-ripple-init
        data-twe-ripple-color="light"
      >
        <img
          src={productCell.hinhAnh}
          className="h-[280px] w-[320px]"
          alt="Louvre"
        />
        <a onClick={() => console.log("tes")}>
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </a>
      </div>
      <a>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {productCell.ten}
        </h5>
      </a>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {productCell.giaBan}
        </span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
    </div>
  );
}
