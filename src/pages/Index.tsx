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
      name: "Snail Repair Intensive Ampoule",
      price: 2490,
      originalPrice: 3190,
      image: "/img/488b0d2f-de30-4521-882a-4b58f55fd33d.jpg",
      category: "K-Beauty Сыворотки",
      rating: 4.9,
      reviews: 324,
      brand: "COSRX",
    },
    {
      id: 2,
      name: "Glass Skin Cushion Foundation",
      price: 1890,
      originalPrice: 2490,
      image: "/img/0bd25582-aaed-4dee-9da7-af9211dbc3ab.jpg",
      category: "K-Beauty Макияж",
      rating: 4.8,
      reviews: 189,
      brand: "Laneige",
    },
    {
      id: 3,
      name: "Ginseng Essence Water",
      price: 3990,
      originalPrice: 4990,
      image: "/img/488b0d2f-de30-4521-882a-4b58f55fd33d.jpg",
      category: "K-Beauty Уход",
      rating: 4.7,
      reviews: 456,
      brand: "Beauty of Joseon",
    },
    {
      id: 4,
      name: "Hydrogel Eye Patches",
      price: 1490,
      originalPrice: 1990,
      image: "/img/83e07966-6258-43f0-8281-7cb4682156a2.jpg",
      category: "K-Beauty Маски",
      rating: 4.6,
      reviews: 278,
      brand: "Petitfée",
    },
    {
      id: 5,
      name: "Lip Tint Velvet",
      price: 890,
      originalPrice: 1290,
      image: "/img/0bd25582-aaed-4dee-9da7-af9211dbc3ab.jpg",
      category: "K-Beauty Макияж",
      rating: 4.9,
      reviews: 156,
      brand: "Etude House",
    },
    {
      id: 6,
      name: "Centella Calming Gel",
      price: 2190,
      originalPrice: 2890,
      image: "/img/488b0d2f-de30-4521-882a-4b58f55fd33d.jpg",
      category: "K-Beauty Уход",
      rating: 4.8,
      reviews: 389,
      brand: "Purito",
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
                Kcos
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
                  placeholder="Поиск K-Beauty..."
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
                  placeholder="Поиск K-Beauty..."
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
                K-Beauty
                <span className="bg-gradient-to-r from-holly-coral to-holly-purple bg-clip-text text-transparent">
                  революция
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Откройте секреты корейской красоты! Инновационные формулы,
                натуральные ингредиенты и многоступенчатый уход для идеальной
                кожи.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-holly-coral to-holly-purple hover:from-holly-coral/80 hover:to-holly-purple/80 text-white px-8"
                >
                  K-Beauty каталог
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
                src="/img/83e07966-6258-43f0-8281-7cb4682156a2.jpg"
                alt="Корейская косметика и уход"
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
            K-Beauty категории
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "K-Beauty Сыворотки",
                icon: "Sparkles",
                color: "holly-coral",
              },
              {
                name: "K-Beauty Макияж",
                icon: "Palette",
                color: "holly-purple",
              },
              { name: "K-Beauty Маски", icon: "Heart", color: "holly-mint" },
              { name: "K-Beauty Уход", icon: "Flower", color: "holly-blue" },
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
              Топ K-Beauty товаров
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Лучшие корейские бренды и инновационные формулы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <p className="text-sm text-holly-purple font-medium">
                    {product.brand}
                  </p>
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
                Доставка K-Beauty по всей России
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
                    <p className="text-gray-600">При заказе от 2500 рублей</p>
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
                src="/img/488b0d2f-de30-4521-882a-4b58f55fd33d.jpg"
                alt="Доставка K-Beauty"
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
              Подпишитесь на K-Beauty новости
            </h3>
            <p className="text-gray-600 mb-8">
              Будьте первыми, кто узнает о новых корейских брендах и специальных
              предложениях
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
                Kcos
              </h4>
              <p className="text-gray-400 mb-4">
                Корейская косметика и инновационные решения для идеальной кожи
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
              <h5 className="font-semibold mb-4 text-holly-mint">K-Beauty</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Сыворотки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Макияж
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Маски
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Уход
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
                  +7 (495) 456-78-90
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" className="h-4 w-4 mr-2" />
                  hello@kcos.ru
                </p>
                <p className="flex items-center">
                  <Icon name="MapPin" className="h-4 w-4 mr-2" />
                  Москва, ул. K-Beauty, 21
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="text-center text-gray-400">
            <p>&copy; 2024 Kcos - Korean cosmetics. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
