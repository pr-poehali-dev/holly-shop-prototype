import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
  );
};

export default Footer;
