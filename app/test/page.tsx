export default function Page() {
  return (
    <div
      className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
      data-twe-ripple-init
      data-twe-ripple-color="light"
    >
      <img
        src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
        className="max-w-xs"
        alt="Louvre"
      />
      <a href="#!">
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
      </a>
    </div>
  );
}
