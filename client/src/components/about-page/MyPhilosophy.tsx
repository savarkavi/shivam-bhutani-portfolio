import { AboutPageData } from "@/sanity/customTypes";

const MyPhilosophy = ({ data }: { data: AboutPageData }) => {
  return (
    <div className="mt-46 flex flex-col-reverse items-center gap-24 lg:flex-col">
      <div className="flex flex-col items-center gap-16 px-4 lg:px-0">
        <h2 className="border-b border-gray-400 pb-6 text-lg uppercase">
          My Philosophy
        </h2>
        <p className="max-w-[600px] text-center text-2xl">
          {data.myPhilosophySection?.myPhilosophyContent ||
            "Doing a portrait session is not just about making photographs which visually looks pretty but its more about trying to capture that one moment where the person reveals himself to you and allows you to see him as he really is which could be for a very brief moment."}
        </p>
      </div>
      <div>
        <div
          key={data.myPhilosophySection?.aboutVideos?.[1].asset?._id}
          className="relative block h-[800px] w-[600px] lg:hidden"
        >
          <video loop muted autoPlay className="h-full w-full object-cover">
            <source
              src={data.myPhilosophySection?.aboutVideos?.[1].asset?.url}
            />
          </video>
        </div>
      </div>
      <div className="flex w-full justify-center gap-12 lg:justify-between">
        {data.myPhilosophySection?.aboutVideos?.map((item) => (
          <div
            key={item.asset?._id}
            className="relative hidden h-[800px] w-[600px] lg:block"
          >
            <video loop muted autoPlay className="h-full w-full object-cover">
              <source src={item.asset?.url} />
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPhilosophy;
