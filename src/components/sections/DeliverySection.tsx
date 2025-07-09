import Icon from "@/components/ui/icon";

const DeliverySection = () => {
  return (
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
  );
};

export default DeliverySection;
