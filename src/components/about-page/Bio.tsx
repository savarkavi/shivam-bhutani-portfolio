import Image from "next/image";

const Bio = () => {
  return (
    <div className="mt-32 flex gap-24">
      <div className="relative h-[800px] w-full max-w-[60%] rounded-md">
        <Image
          src="/shivam-potrait.webp"
          alt="shivam-potrait"
          fill
          className="h-auto rounded-md object-cover"
        />
      </div>
      <div className="flex flex-col gap-16">
        <h2 className="border-b border-gray-400 pb-6 text-lg uppercase">Bio</h2>
        <p
          className="max-w-[450px] text-justify text-4xl font-semibold"
          style={{ wordSpacing: "5px" }}
        >
          I am a portrait, fashion and street photographer based in India,
          Delhi. I picked up a camera while I was going through a negative phase
          in my life. For me photography is about capturing beauty in ordinary
          moments. I want to communicate stories, ideas, truth about life
          through my pictures. I absolutely love what I am doing and can not
          think of anything other than making pictures.
        </p>
      </div>
    </div>
  );
};

export default Bio;
