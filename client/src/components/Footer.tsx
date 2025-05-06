import { navigationItems } from "@/lib/constants";
import Link from "next/link";
import LinkWrapper from "./LinkWrapper";
import { client } from "@/sanity/client";
import type { Footer } from "@/sanity/types";

const FOOTER_QUERY = `*[_type == "footer"][0]`;

const Footer = async () => {
  const data: Footer = await client.fetch(FOOTER_QUERY);

  return (
    <div className="bottom-0 left-0 flex h-[450px] w-full flex-col justify-between bg-stone-950 px-4 pt-16 pb-10 text-white xl:px-16 xl:pt-18">
      <div className="flex flex-col justify-between gap-10 lg:flex-row">
        <h2 className={`text-2xl uppercase`}>Shivam Bhutani</h2>
        <div className="flex justify-between text-lg lg:gap-40">
          <div className="flex flex-col gap-2">
            <span className="text-gray-400">Navigation</span>
            {navigationItems.map((item) => (
              <LinkWrapper key={item.id} color="bg-white">
                <Link href={item.href}>{item.name}</Link>
              </LinkWrapper>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-400">Follow on</span>
            {data.footerLinks?.map((item) => (
              <LinkWrapper key={item._key} color="bg-white">
                <Link href={item.footerLinkUrl || "#"}>
                  {item.footerLinkName}
                </Link>
              </LinkWrapper>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between gap-10 text-sm sm:text-base">
        <p>{data.copyrightText}</p>
        <p>
          Website by{" "}
          <Link href="mailto:sushant20.sharma00@gmail.com">Sushant</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
