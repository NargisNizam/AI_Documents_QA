"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Shop(){
  return (
    <div>
      <Header/>

      {/* First Section */}
      <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: 'url(/banner.png)' }}>
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">Shop</h1>
          <nav className="mt-4 text-sm text-gray-600">
            <ol className="inline-flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-700">Shop</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Grid Section */}
      <section className="bg-white py-10">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {[
        { src: '/img.01.png', title: 'Syltherine', description: 'Stylish cafe chair',price: 'Rp 2.500.000'},
        { src: '/img.02.png', title: 'Leviosa', Description: 'Stylish cafe chair', price: 'Rp 2.500.000'},
        { src: '/img.03.png', title: 'Lolito', Description:'Luxury big sofa', price: 'Rp 7,000.000' },
        { src: '/img-04.png', title: 'Respira',Description:'Outdoor bar table and stool', price: 'Rp 7.000.000' },
        { src: '/img.01.png', title: 'Syltherine',Description: 'Stylish cafe chair', price: 'Rp 2.500.000'},
        { src: '/img.02.png', title: 'Leviosa', Description: 'Stylish cafe chair', price: 'Rp 2.500.000' },
        { src: '/img.03.png', title: 'Lolito', Description:'Luxury big sofa', price: 'Rp 7.000.000' },
        { src: '/img-04.png', title: 'Respira',Description:'Outdoor bar table and stool', price: 'Rp 7.000.000'},
        { src: '/img.01.png', title: 'Syltherine', Description: 'Stylish cafe chair', price: 'Rp 2.500.000'},
        { src: '/img.02.png', title: 'Leviosa', Description: 'Stylish cafe chair', price: 'Rp 2.500.000' },
        { src: '/img.03.png', title: 'Lolito', Description:'Luxury big sofa', price: 'Rp 7.000.000' },
        { src: '/img-04.png', title: 'Respira',Description:'Outdoor bar table and stool', price: 'Rp 7.000.000' },
        { src: '/img.01.png', title: 'Syltherine', Description: 'Stylish cafe chair', price: 'Rp 2.500.000' },
        { src: '/img.02.png', title: 'Leviosa', Description: 'Stylish cafe chair', price: 'Rp 2.500.000' },
        { src: '/img.03.png', title: 'Lolito', Description:'Luxury big sofa', price: 'Rp 7.000.000' },
        { src: '/img-04.png', title: 'Respira',Description:'Outdoor bar table and stool', price: 'Rp 7.000.000' },
        
      ].map((product, index) => (
        <div key={index} className="text-center border rounded-md p-4">
          <Image
            src={product.src}
            alt={product.title}
            width={150}
            height={150}
            className="object-cover mx-auto max-w-full h-auto"
          />
          <h3 className="text-sm font-semibold mt-2">{product.title}</h3>
          <p className="text-lg font-bold">{product.price}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Pagination */}
      <section className="py-10">
        <div className="flex justify-center gap-2">
          {['1', '2', '3', 'Next'].map((page, index) => (
            <Link key={index} href={`/shop?page=${page.toLowerCase()}`}>

              <div className="w-10 h-10 flex items-center justify-center border rounded-md hover:bg-yellow-600 hover:text-[#eed1ab]">
               {page}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          {[
            { src:'/trophy 1.png', title: 'High Quality', description: 'crafted from top materials' },
            { src:'/guarantee.png', title: 'Warranty Protection', description: 'Over 2 years' },
            { src:'/shipping.png', title: 'Free Shipping', description: 'Order over 150 $' },
            { src:'/customer-support.png', title: '24 / 7 Support', description: 'Dedicated support' },
          ].map((info, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold text-black">{info.title}</h2>
              <p className="text-sm text-gray-700">{info.description}</p>
            </div>
          ))}
        </div>
      </section>
     <Footer/>
      
    </div>
  );
};

export default Shop;