import { lavishlyYours } from "@/fonts/fonts";

const Header = () => {
  return (
    <div className="w-full h-14 p-8 flex justify-between items-center z-[99] sticky top-0 bg-[#ecebeb]">
      <div className="flex flex-col font-serif text-lg">
        <h2 className="text-gray-600 font-semibold">Location:</h2>
        <p className="font-semibold">India, Delhi (10:00pm)</p>
      </div>
      <h1
        className={`${lavishlyYours.className} text-4xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        Shivam Bhutani
      </h1>
      <h2 className="font-serif text-lg">Menu</h2>
    </div>
  );
};

export default Header;
