import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  cartItems: number;
}

const Header = ({ cartItems }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
  );
};

export default Header;
