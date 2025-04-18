const MyPhilosophy = () => {
  return (
    <div className="mt-46 flex flex-col items-center gap-16">
      <h2 className="border-b border-gray-400 pb-6 text-lg uppercase">
        My Philosophy
      </h2>
      <p className="max-w-[600px] text-center text-2xl">
        Doing a portrait session is not just about making photographs which
        visually looks pretty but its more about trying to capture that one
        moment where the person reveals himself to you and allows you to see him
        as he really is which could be for a very brief moment.
      </p>
      <div className="flex w-full justify-between">
        <div className="relative h-[800px] w-[600px]">
          <video loop muted autoPlay className="h-full w-full object-cover">
            <source src="https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyTyvw4Pk9l6T1PRGzX30aq5Hgj4Jt7cwQYbmMC" />
          </video>
        </div>
        <div className="relative h-[800px] w-[600px]">
          <video loop muted autoPlay className="h-full w-full object-cover">
            <source src="https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyTsirZUG8NkjOcVWI46lyxM3FaHvTUKJRhpD8L" />
          </video>
        </div>
        <div className="relative h-[800px] w-[600px]">
          <video loop muted autoPlay className="h-full w-full object-cover">
            <source src="https://5ct1dh56fd.ufs.sh/f/MPc6a3KK4UyT820cnVP9T6oNfXxMkbwrpaUqSRtP2mGIzDu5" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default MyPhilosophy;
