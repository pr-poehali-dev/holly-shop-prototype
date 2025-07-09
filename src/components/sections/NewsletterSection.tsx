import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  return (
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
  );
};

export default NewsletterSection;
