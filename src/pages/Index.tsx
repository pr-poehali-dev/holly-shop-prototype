import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CategorySection from "@/components/sections/CategorySection";
import ProductCatalogSection from "@/components/sections/ProductCatalogSection";
import DeliverySection from "@/components/sections/DeliverySection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { products, categories } from "@/data/products";

const Index = () => {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = (productId: number) => {
    setCartItems((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-holly-peach/10 via-white to-holly-mint/10">
      <Header cartItems={cartItems} />
      <HeroSection />
      <CategorySection categories={categories} />
      <ProductCatalogSection products={products} onAddToCart={addToCart} />
      <DeliverySection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
