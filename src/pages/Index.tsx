import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [cartItems, setCartItems] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Увлажняющий крем Glow",
      price: 2990,
      originalPrice: 3990,
      image: "/img/53286725-4e64-48b5-a34f-4784e46c8c9e.jpg",
      category: "Уход за лицом",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Помада Luxury Matte",
      price: 1590,
      originalPrice: 2190,
      image: "/img/e0bfc832-415c-4626-8872-582751dcd0bb.jpg",
      category: "Макияж",
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 3,
      name: "Сыворотка с витамином C",
      price: 4990,
      originalPrice: 5990,
      image: "/img/53286725-4e64-48b5-a34f-4784e46c8c9e.jpg",
      category: "Уход за лицом",
      rating: 4.7,
      reviews: 256,
    },
    {
      id: 4,
      name: "Палетка теней Sunset",
      price: 3490,
      originalPrice: 4490,
      image: "/img/e0bfc832-415c-4626-8872-582751dcd0bb.jpg",
      category: "Макияж",
      rating: 4.6,
      reviews: 78,
    },
  ];

  const addToCart = (productId: number) => {
    setCartItems((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-holly-peach/10 via-white to-holly-mint/10">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-holly-coral/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-holly-coral to-holly-purple bg-clip-text text-transparent">
                Holly Shop
              </h1>
              <nav className="hidden md:flex space-x-6">
                <a
                  href="#"
                  className="text-gray-600 hover:text-holly-coral transition-colors"
                >
                  Главная
                </a>
                <a
                  href="#catalog"
                  className="text-gray-600 hover:text-holly-coral transition-colors"
                >
                  Каталог
                </a>
                <a
                  href="#delivery"
                  className="text-gray-600 hover:text-holly-coral transition-colors"
                >
                  Доставка
                </a>
                <a
                  href="#contacts"
                  className="text-gray-600 hover:text-holly-coral transition-colors"
                >
                  Контакты
                </a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Input
                  placeholder="Поиск товаров..."
                  className="w-64 pl-10 border-holly-coral/30 focus:border-holly-coral"
                />
                <Icon
                  name="Search"
                  className="absolute left-3 top-3 h-4 w-4 text-gray-400"
                />
              </div>

              <Button
                variant="outline"
                size="sm"
                className="relative border-holly-coral/30 hover:bg-holly-coral/10"
                onClick={() => {}}
              >
                <Icon name="ShoppingCart" className="h-4 w-4" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-holly-coral text-white text-xs px-1 min-w-[20px] h-5 flex items-center justify-center">
                    {cartItems}
                  </Badge>
                )}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Icon name="Menu" className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-holly-coral/20">
              <div className="relative mb-4">
                <Input
                  placeholder="Поиск товаров..."
                  className="w-full pl-10 border-holly-coral/30 focus:border-holly-coral"
                />
                <Icon
                  name="Search"
                  className="absolute left-3 top-3 h-4 w-4 text-gray-400"
                />
              </div>
              <nav className="flex flex-col space-y-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-holly-coral transition-colors"
                >
                  Главная
                </a>
                <a
                  href="#catalog"
                  className="text-gray-600 hover:text-holly-coral transition-colors"
                >
                  Каталог
                </a>
                <a
                  href="#delivery"
                  className="text-gray-600 hover:text-holly-coral transition-colors"
                >
                  Доставка
                </a>
                <a
                  href="#contacts"
                  className="text-gray-600 hover:text-holly-coral transition-colors"
                >
                  Контакты
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-holly-coral/5 to-holly-mint/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Красота в каждой
                <span className="bg-gradient-to-r from-holly-coral to-holly-purple bg-clip-text text-transparent">
                  {" "}
                  детали
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Откройте для себя мир премиальной косметики и ухода. Только
                лучшие бренды для вашей естественной красоты.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-holly-coral to-holly-purple hover:from-holly-coral/80 hover:to-holly-purple/80 text-white px-8"
                >
                  Каталог товаров
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-holly-coral text-holly-coral hover:bg-holly-coral/10"
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-holly-mint/20 to-holly-blue/20 rounded-full blur-3xl"></div>
              <img
                src="/img/20c9d785-2570-44a4-8e9b-0714e0e93095.jpg"
                alt="Красивая девушка с косметикой"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Популярные категории
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Уход за лицом", icon: "Sparkles", color: "holly-coral" },
              { name: "Макияж", icon: "Palette", color: "holly-purple" },
              { name: "Уход за телом", icon: "Heart", color: "holly-mint" },
              { name: "Парфюмерия", icon: "Flower", color: "holly-blue" },
            ].map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r from-${category.color}/20 to-${category.color}/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon
                      name={category.icon as any}
                      className={`h-8 w-8 text-${category.color}`}
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900">
                    {category.name}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Хиты продаж
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Самые популярные товары, которые выбирают наши клиенты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-0 bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-holly-coral/90 text-white">
                    -
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100,
                    )}
                    %
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
                      <span className="text-xs text-gray-600">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
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
                    onClick={() => addToCart(product.id)}
                  >
                    <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />В
                    корзину
                  </Button>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    {product.reviews} отзывов
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section
        id="delivery"
        className="py-16 bg-gradient-to-r from-holly-mint/10 to-holly-blue/10"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Быстрая доставка по всей России
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-holly-mint/20 flex items-center justify-center">
                    <Icon name="Truck" className="h-6 w-6 text-holly-mint" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Бесплатная доставка
                    </h4>
                    <p className="text-gray-600">При заказе от 3000 рублей</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-holly-blue/20 flex items-center justify-center">
                    <Icon name="Clock" className="h-6 w-6 text-holly-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Быстрая доставка
                    </h4>
                    <p className="text-gray-600">1-3 дня по Москве и МО</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-holly-purple/20 flex items-center justify-center">
                    <Icon
                      name="ShieldCheck"
                      className="h-6 w-6 text-holly-purple"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Гарантия качества
                    </h4>
                    <p className="text-gray-600">Возврат в течение 14 дней</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-holly-coral/20 to-holly-mint/20 rounded-full blur-3xl"></div>
              <img
                src="/img/53286725-4e64-48b5-a34f-4784e46c8c9e.jpg"
                alt="Доставка косметики"
                className="relative rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Подпишитесь на новости
            </h3>
            <p className="text-gray-600 mb-8">
              Будьте первыми, кто узнает о новинках и специальных предложениях
            </p>
            <div className="flex space-x-4 max-w-md mx-auto">
              <Input
                placeholder="Ваш email"
                className="flex-1 border-holly-coral/30 focus:border-holly-coral"
              />
              <Button className="bg-gradient-to-r from-holly-coral to-holly-purple hover:from-holly-coral/80 hover:to-holly-purple/80 text-white">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-holly-coral to-holly-purple bg-clip-text text-transparent">
                Holly Shop
              </h4>
              <p className="text-gray-400 mb-4">
                Премиальная косметика и уход для вашей естественной красоты
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-holly-coral hover:text-holly-coral/80"
                >
                  <Icon name="Instagram" className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-holly-coral hover:text-holly-coral/80"
                >
                  <Icon name="Facebook" className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-holly-coral hover:text-holly-coral/80"
                >
                  <Icon name="Twitter" className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-holly-mint">Каталог</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Уход за лицом
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Макияж
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Уход за телом
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Парфюмерия
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-holly-blue">Информация</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Возврат
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-holly-purple">Контакты</h5>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Icon name="Phone" className="h-4 w-4 mr-2" />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" className="h-4 w-4 mr-2" />
                  hello@hollyshop.ru
                </p>
                <p className="flex items-center">
                  <Icon name="MapPin" className="h-4 w-4 mr-2" />
                  Москва, ул. Красоты, 15
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="text-center text-gray-400">
            <p>&copy; 2024 Holly Shop. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
