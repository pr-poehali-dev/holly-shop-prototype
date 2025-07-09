import ProductCard from "@/components/product/ProductCard";
import { Product } from "@/types/product";

interface ProductCatalogSectionProps {
  products: Product[];
  onAddToCart: (productId: number) => void;
}

const ProductCatalogSection = ({
  products,
  onAddToCart,
}: ProductCatalogSectionProps) => {
  return (
    <section id="catalog" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Топ K-Beauty товаров
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Лучшие корейские бренды и инновационные формулы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              animationDelay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalogSection;
