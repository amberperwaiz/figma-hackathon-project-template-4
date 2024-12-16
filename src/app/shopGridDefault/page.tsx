"use client";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineEye,
} from "react-icons/ai";
import { Button } from "@/components/ui/button";

// Product data (you can replace this with your actual product data)
const productImages = [
  "/Grid-Shop/Ecommerce accesories (1).png",
  "/Grid-Shop/Ecommerce accesories (2).png",
  "/Grid-Shop/Ecommerce accesories (3).png",
  "/Grid-Shop/Ecommerce accesories (4).png",
  "/Grid-Shop/Ecommerce accesories (5).png",
  "/Grid-Shop/Ecommerce accesories (6).png",
  "/Grid-Shop/Ecommerce accesories (7).png",
  "/Grid-Shop/Ecommerce accesories (8).png",
  "/Grid-Shop/Ecommerce accesories (9).png",
  "/Grid-Shop/Ecommerce accesories (10).png",
  "/Grid-Shop/Ecommerce accesories (11).png",
  "/Grid-Shop/Ecommerce accesories (13).png",
];

function ShopGridDefault() {
  // State for sorting and filtering
  const [sortBy, setSortBy] = useState<string>("bestMatch");
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);

  // Handler for sort change
  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  // Handler for items per page
  const handleItemsPerPageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setItemsPerPage(Number(e.target.value));
  };

  // Product Card Component
  const ProductCard = ({ imageSrc }: { imageSrc: string }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden">
          <Image
            src={imageSrc}
            alt="Product"
            width={600}
            height={600}
            className="object-contain w-full h-auto"
          />

          {/* Hover Overlay */}
          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center space-x-4 transition-all duration-300">
              <Button className="bg-white p-2 rounded-full hover:bg-[#FB2E86] hover:text-white transition-colors">
                <AiOutlineShoppingCart />
              </Button>
              <Button className="bg-white p-2 rounded-full hover:bg-[#FB2E86] hover:text-white transition-colors">
                <AiOutlineHeart />
              </Button>
              <Button className="bg-white p-2 rounded-full hover:bg-[#FB2E86] hover:text-white transition-colors">
                <AiOutlineEye />
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="font-sans text-[#151875]">
      {/* Header Section */}
      <div className="py-10 px-4 md:px-12">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Shop Grid Default
        </h1>
        <div className="flex items-center gap-2 text-sm">
          <Link href={"/"} className="hover:text-[#FB2E86] transition">
            Home
          </Link>
          <p className="text-gray-400">/</p>
          <p className="text-[#FB2E86]">Shop Grid Default</p>
        </div>
      </div>

      {/* Filter and Sorting Section */}
      <div className="py-4 flex flex-col lg:flex-row justify-between px-4 md:px-8">
        <div className="mb-4 lg:mb-0">
          <h1 className="text-xl md:text-2xl font-semibold font-[Josefin Sans] mb-2">
            Ecommerce Accessories & Fashion Items
          </h1>
          <p className="text-xs md:text-sm text-gray-500">
            About 9,620 results (0.62 seconds)
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Per Page */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="perPage"
              className="text-xs md:text-sm font-medium text-gray-700"
            >
              Per Page:
            </label>
            <input
              type="number"
              id="perPage"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              min="1"
              max="24"
              className="w-16 p-1 border rounded text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
            />
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="sortBy"
              className="text-xs md:text-sm font-medium text-gray-700"
            >
              Sort By:
            </label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={handleSortChange}
              className="p-1 border rounded text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
            >
              <option value="bestMatch">Best Match</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Shop Grid */}
      <div className="w-full py-10 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {productImages.slice(0, itemsPerPage).map((imgSrc, index) => (
            <ProductCard key={index} imageSrc={imgSrc} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopGridDefault