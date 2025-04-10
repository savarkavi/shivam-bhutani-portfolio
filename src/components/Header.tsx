import { navigationItems } from "@/lib/constants";
import Link from "next/link";
import LinkWrapper from "./LinkWrapper";
import { boska } from "@/fonts/fonts";

const Header = () => {
  return (
    <div className="header w-full h-fit px-4 py-4 lg:px-8 flex justify-between items-center sticky top-0">
      <div className="hidden xl:flex flex-col text-xl font-semibold">
        <span className={`${boska.className} text-9xl font-bold uppercase`}>
          Shivam Bhutani
        </span>
      </div>
      <div className="text-xl font-semibold uppercase">
        <div className="flex items-center gap-6 font-bold">
          {navigationItems.map((item) => (
            <LinkWrapper key={item.id} color="bg-black">
              <Link href={item.href}>{item.name}</Link>
            </LinkWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
