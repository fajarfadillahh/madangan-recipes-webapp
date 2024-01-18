import Image from "next/image";
import Link from "next/link";

export default function Card({ path, img, text }) {
  return (
    <Link
      href={`${path}`}
      className="group relative h-[180px] overflow-hidden rounded-xl shadow-lg hover:cursor-pointer"
    >
      <Image
        src={img}
        alt="img"
        width={1000}
        height={1000}
        priority={true}
        className="absolute left-0 top-0 h-full w-full object-cover object-center transition-all group-hover:scale-110"
      />

      <div className="relative flex h-full items-center justify-center bg-gray-900/50 p-4 transition-all group-hover:bg-green-500/50">
        <p className="line-clamp-2 text-center text-lg font-extrabold capitalize leading-[115%] text-white">
          {text}
        </p>
      </div>
    </Link>
  );
}
