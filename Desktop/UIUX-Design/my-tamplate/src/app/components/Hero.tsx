import Image from "next/image";
export default function Hero() {
  return (
    <div className="relative w-full h-screen flex items-center justify-end bg-white">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/heroImage.png"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      {/* Hero Text */}
      <div className="relative bg-[#FFF3E3] p-8 rounded-lg shadow-lg max-w-lg text-center md:text-left md:max-w-2xl lg:max-w-4xl">
        <h6 className="text-sm text-gray-600 uppercase tracking-wider mb-2">
          New Arrival
        </h6>
        <h3 className="text-3xl font-bold leading-snug mb-4">
          Discover Our <br /> New Collection
        </h3>
        <p className="text-gray-700 text-base leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          dolore...
        </p>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-all duration-200">
          BUY NOW
        </button>
      </div>
    </div>

  );
}