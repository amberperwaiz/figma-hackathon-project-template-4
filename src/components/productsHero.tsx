'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { ReactElement }  from 'react';

function ProductsHero(): ReactElement {
  const router = useRouter();

  return (
    <div className="relative w-full bg-[#F3F3F3] py-12 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        {/* Text Content */}
        <div className="w-full max-w-3xl">
          {/* Pink Text */}
          <p className="text-[#FB2E86] text-lg md:text-xl font-normal mb-2">
            Best Furniture For Your Castle...
          </p>
          
          {/* Bold Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
            New Furniture Collection Trends in 2020
          </h1>
          
          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 mb-6 mx-auto">
            Discover our latest collection of elegant and modern furniture designed to transform your living spaces with style and comfort.
          </p>
          
          {/* Shop Now Button */}
          <Link href="/shoplist" className="inline-block">
            <button className="px-8 py-3 bg-[#FB2E86] text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductsHero;