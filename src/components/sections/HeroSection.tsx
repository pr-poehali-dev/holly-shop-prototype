import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
