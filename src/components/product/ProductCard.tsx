import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: number) => void;
  animationDelay?: number;
}

const ProductCard = ({
  product,
  onAddToCart,
  animationDelay = 0,
}: ProductCardProps) => {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100,
  );

  return (
    <Card
      className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-0 bg-white/80 backdrop-blur-sm"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-3 left-3 bg-holly-coral/90 text-white">
          -{discount}%
        </Badge>
        <Button
          size="sm"
          className="absolute top-3 right-3 bg-white/90 text-holly-coral hover:bg-white"
          onClick={() => {}}
        >
          <Icon name="Heart" className="h-4 w-4" />
        </Button>
      </div>

      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
          <div className="flex items-center space-x-1">
            <Icon
              name="Star"
              className="h-3 w-3 fill-holly-peach text-holly-peach"
            />
            <span className="text-xs text-gray-600">{product.rating}</span>
          </div>
        </div>
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <p className="text-sm text-holly-purple font-medium">{product.brand}</p>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-holly-coral">
              {product.price.toLocaleString()} ₽
            </span>
            <span className="text-sm text-gray-500 line-through">
              {product.originalPrice.toLocaleString()} ₽
            </span>
          </div>
        </div>

        <Button
          className="w-full bg-gradient-to-r from-holly-coral to-holly-purple hover:from-holly-coral/80 hover:to-holly-purple/80 text-white"
          onClick={() => onAddToCart(product.id)}
        >
          <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />В корзину
        </Button>

        <p className="text-xs text-gray-500 mt-2 text-center">
          {product.reviews} отзывов
        </p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
