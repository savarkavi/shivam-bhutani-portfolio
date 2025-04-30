import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 py-12 text-2xl">
      <div className="relative h-[300px] w-[250px]">
        <Image
          src="/shivam-portrait.webp"
          alt="shivam portrait image"
          fill
          className="object-cover"
        />
      </div>
      <p>The page you are looking for was not found :(</p>
      <Link href="/" className="text-blue-600">
        Return Home
      </Link>
    </div>
  );
}
