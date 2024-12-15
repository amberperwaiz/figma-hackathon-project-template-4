'use lient'
import Hero from "@/components/Hero";
import LatestProducts from "@/components/LatestProducts";
import Offers from "@/components/Offers";
import Unique from "@/components/Unique";
import TrendingProducts from "@/components/TrendingProducts";
import Discount from "@/components/Discount";
import TopCategories from "@/components/TopCategories";
import Newslater from "@/components/Newslater";
import BlogSection from "@/components/Blogsection";

function Homepage(){
  return(
    <div>
      <Hero />
      <LatestProducts />
      <Offers />
      <Unique />
      <TrendingProducts />
      <Discount />
      <TopCategories />
      <Newslater />
      <BlogSection />
    </div>
  )
}

export default Homepage;
