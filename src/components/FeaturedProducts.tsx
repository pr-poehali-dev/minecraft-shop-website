import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const products = [
  {
    id: 1,
    name: "VIP Статус",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    description: "Эксклюзивные привилегии и возможности",
    features: ["Приватные регионы", "Уникальные команды", "VIP поддержка"],
  },
  {
    id: 2,
    name: "Алмазная броня",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    description: "Полный комплект алмазной брони",
    features: ["Максимальная защита", "Зачарования", "Неразрушимость"],
  },
  {
    id: 3,
    name: "Стартовый набор",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
    description: "Всё необходимое для быстрого старта",
    features: ["Базовые инструменты", "Еда и ресурсы", "Строительные блоки"],
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 px-4 bg-minecraft-darker/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Популярные товары
          </h2>
          <p className="text-minecraft-light-gray text-lg max-w-2xl mx-auto">
            Самые востребованные предметы среди игроков нашего сервера
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-minecraft-darker border border-minecraft-green/20 rounded-lg overflow-hidden hover:border-minecraft-green/40 transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-minecraft-darker/50 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-minecraft-green text-minecraft-dark px-2 py-1 rounded text-sm font-bold">
                  {product.price}₽
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-minecraft-gray mb-4">
                  {product.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-minecraft-light-gray"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-minecraft-green mr-2"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-minecraft-green hover:bg-minecraft-green/80 text-minecraft-dark font-bold">
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Купить за {product.price}₽
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-minecraft-green text-minecraft-green hover:bg-minecraft-green hover:text-minecraft-dark"
          >
            Посмотреть все товары
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
