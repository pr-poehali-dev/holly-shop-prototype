import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Category } from "@/types/product";

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection = ({ categories }: CategorySectionProps) => {
  return (
    <section className="py-16 bg-white/50">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
          K-Beauty категории
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
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
                <h4 className="font-semibold text-gray-900">{category.name}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
