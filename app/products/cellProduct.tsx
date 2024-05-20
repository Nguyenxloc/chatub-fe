import { Card } from "flowbite-react";
import { useRouter } from "next/navigation";
export default function CellProduct({ productCell }) {
  const router = useRouter();
  return (
    <Card
      onClick={() => router.push("/products/detail/"+productCell.id)}
      imgSrc={productCell.url}
      className="mt-5 w-[300px]"
    >
      <a>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>
      </a>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          $599
        </span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
    </Card>
  );
}
