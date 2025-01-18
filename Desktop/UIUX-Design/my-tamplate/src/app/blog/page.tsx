import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Blog = () => {
  return (
    <div>
      <Header/>
      



<div className="relative w-full bg-cover bg-center" style={{ backgroundImage: 'url(/banner.png)' }}>

      <div className="absolute inset-0 bg-white bg-opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <div className="w-10 h-10  flex justify-center items-center rounded-full">
              <span className="text-white font-bold text-lg"></span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Blog</h1>
          <nav className="mt-4 text-sm text-gray-600">
            <ol className="list-reset inline-flex items-center space-x-2">
              <li>
                <a href="/" className="text-gray-500 hover:text-gray-700">Home</a>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-700">Blog</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>











      {/* 2nd Section: Blog Content with Two Columns (65:35 Ratio) */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* First Column (65% width) */}
            <div className="md:col-span-3 space-y-6">
              {/* First Post */}
              <div>
                <Image
                  src="/blog-1.png"
                  alt="Going On"
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
                <h1 className="text-3xl font-bold mt-4">Going all-in with millenial design</h1>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam, id euismod eros
                  pellentesque. Cras volutpat turpis ac nisl iaculis, non faucibus erat volutpat. Aliquam erat volutpat.
                </p>
                <Link href="/" className="text-red-500 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>

              {/* Second Post */}
              <div className="mt-12">
                <Image
                  src="/blog-2.png"
                  alt="Going On Again"
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
                <h1 className="text-3xl font-bold mt-4">Exploring New ways of decorating</h1>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam, id euismod eros
                  pellentesque. Cras volutpat turpis ac nisl iaculis, non faucibus erat volutpat. Aliquam erat volutpat.
                </p>
                <Link href="/" className="text-red-500 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>

              {/* Third Post */}
              <div className="mt-12">
                <Image
                  src="/blog-3.png"
                  alt="Third Post"
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
                <h1 className="text-3xl font-bold mt-4">Hand made pieces that took time to make</h1>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam, id euismod eros
                  pellentesque. Cras volutpat turpis ac nisl iaculis, non faucibus erat volutpat. Aliquam erat volutpat.
                </p>
                <Link href="/" className="text-red-500 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>
            </div>

            {/* Second Column (35% width) for Recent Posts */}
            <div className="md:col-span-2 space-y-6">
              <h1 className="text-2xl font-bold mb-4">Recent Posts</h1>

              {/* Recent Post 1 */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/blog-4.png"
                  alt="Recent Post 1"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div>
                  <h2 className="text-black font-bold">Going all-in one with millenial design</h2>
                  <p className="text-gray-600 text-sm">
                    03 Aug 2022
                  </p>
                </div>
              </div>

              {/* Recent Post 2 */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/blog-5.png"
                  alt="Recent Post 2"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div>
                  <h2 className="text-black font-bold">Exploring new ways of decorating</h2>
                  <p className="text-gray-600 text-sm">
                    03 Aug 2022
                  </p>
                </div>
              </div>

              {/* Recent Post 3 */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/blog-6.png"
                  alt="Recent Post 3"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div>
                  <h2 className="text-black font-bold">Hand made pieces that took time to make</h2>
                  <p className="text-gray-600 text-sm">
                  03 Aug 2022
                  </p>
                </div>
              </div>

              {/* Recent Post 4 */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/blog-7.png"
                  alt="Recent Post 4"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div>
                  <h2 className="text-black font-bold">Modern home in Milan</h2>
                  <p className="text-gray-600 text-sm">
                  03 Aug 2022
                  </p>
                </div>
              </div>

              {/* Recent Post 5 */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/blog-8.png"
                  alt="Recent Post 5"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div>
                  <h2 className="text-black font-bold">Colorful office redesign 5</h2>
                  <p className="text-gray-600 text-sm">
                  03 Aug 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3rd Section: CONCEPT Posts */}
      <section className="bg-gray-100 text-black py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* First Column */}
            <div >
              <h2 className="text-black font-bold text-3xl text-center">High Quality</h2>
              <p className="text-lg text-gray-700">crafted from top materials</p>
            </div>

            {/* Second Column */}
            <div >
              <h2 className="text-black font-bold text-3xl text-center">Warranty Protection</h2>
              <p className="text-lg text-gray-700 text-">Over 2 years</p>
            </div>

            {/* Third Column */}
            <div >
              <h2 className="text-black font-bold text-3xl text-center">Free Shipping</h2>
              <p className="text-lg text-gray-700">Order over 150 $</p>
            </div>
            <div >
              <h2 className="text-black font-bold text-3xl text-center">24 / 7 Support</h2>
              <p className="text-lg text-gray-700">Dedicated support</p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Blog;