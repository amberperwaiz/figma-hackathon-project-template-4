import React from 'react'
import LatestProducts from '../../components/LatestProducts'
import FeaturedProducts from '../../components/FeatureProduct'
import TopCategories from '../../components/TopCategories'
import Unique from '../../components/Unique'
import TrendingProducts from '../../components/TrendingProducts'
import Offer from '../../components/Offers'
import ProductsHero from '@/components/productsHero'

const Products = () => {
  return (
    <div>
     <ProductsHero />
    <FeaturedProducts />
      <LatestProducts />
      <Offer />
      <TopCategories />
      <Unique />
      <TrendingProducts />
    </div>
  )
}

export default Products;