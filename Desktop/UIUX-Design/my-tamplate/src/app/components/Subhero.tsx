import React from 'react';
import Image from 'next/image';
function Subhero() {
  return (
    <div>
      <div className="container mx-auto py-10 px-4">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Browse The Range</h1>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </header>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <Image
              src="/Dining.png"
              alt="Dining"
              width={381}
              height={480}
              
            />
            <h3 className="text-lg font-medium text-gray-800 text-center">Dining</h3>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <Image
              src="/Living.png"
              alt="Living"
              width={381}
              height={480}
              
            />
            <h3 className="text-lg font-medium text-gray-800 text-center">Living</h3>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <Image
              src="/Bedroom.png"
              alt="Bedroom"
              width={381}
              height={480}
              
            />
            <h3 className="text-lg font-medium text-gray-800 text-center">Bedroom</h3>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Our Products</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
      <Image
              src="/img-1.png"
              alt="image-1"
              width={285}
              height={446}
              
            />
            <Image
              src="/img-2.png"
              alt="image-2"
              width={285}
              height={446}
              
            /> 
            <Image
              src="/img-3.png"
              alt="image-3"
              width={285}
              height={446}
              
            /> 
            <Image
              src="/img-4.png"
              alt="image-4"
              width={285}
              height={446}
              
            /> 
            <Image
              src="/img-5.png"
              alt="image-5"
              width={285}
              height={446}
              
            /> 
            <Image
              src="/img6.png"
              alt="image-6"
              width={285}
              height={446}
              
            /> 
            <Image
              src="/img7.png"
              alt="image-7"
              width={285}
              height={446}
              
            /> 
            <Image
              src="/img-8.png"
              alt="image-8"
              width={285}
              height={446}
              
            />  
      </div>
       <button className="text-yellow-600 outline py-4 w-[245px] h-[48px] my-[32px] mx-96  flex justify-center items-center transition-all duration-200">
      Show More
        </button>
      </div>
    </div>
  );
}

export default Subhero;
