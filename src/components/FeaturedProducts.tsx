import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const products = [
  {
    id: 1,
    name: "VIP Привилегия",
    price: 499,
    oldPrice: 699,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    description: "Получите доступ к эксклюзивным возможностям",
    features: [
      "Приватные регионы 50x50",
      "Уникальные команды",
      "VIP поддержка",
      "Цветной ник",
    ],
    badge: "Популярно",
    badgeColor: "bg-minecraft-gold",
  },
  {
    id: 2,
    name: "PREMIUM Ранг",
    price: 899,
    oldPrice: 1299,
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    description: "Максимальные привилегии для истинных игроков",
    features: [
      "Все VIP возможности",
      "Креативный режим",
      "Полеты в выживании",
      "Собственный дом",
    ],
    badge: "Лучший выбор",
    badgeColor: "bg-minecraft-green",
  },
  {
    id: 3,
    name: "Стартовый набор Pro",
    price: 199,
    oldPrice: 299,
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
    description: "Идеальное начало для новых игроков",
    features: [
      "Алмазные инструменты",
      "Стак золотых яблок",
      "Строительные блоки",
      "Зелья силы",
    ],
    badge: "Выгодно",
    badgeColor: "bg-minecraft-blue",
  },
  {
    id: 4,
    name: "Мега Ресурсы",
    price: 349,
    oldPrice: 499,
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    description: "Огромное количество редких ресурсов",
    features: [
      "64 алмазных блока",
      "Незеритовая броня",
      "Эликсиры опыта",
      "Редкие зачарования",
    ],
    badge: "Новинка",
    badgeColor: "bg-minecraft-red",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-minecraft-darker/30 to-minecraft-dark/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-minecraft-green/10 border border-minecraft-green/30 rounded-full px-4 py-2 mb-6">
            <span className="text-minecraft-green font-bold text-sm">
              🏆 ЛУЧШИЕ ПРЕДЛОЖЕНИЯ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Популярные товары
          </h2>
          <p className="text-xl text-minecraft-light-gray max-w-3xl mx-auto">
            Самые востребованные предметы среди 50,000+ игроков нашего сервера
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gradient-to-b from-minecraft-darker to-minecraft-dark border border-minecraft-green/20 rounded-xl overflow-hidden hover:border-minecraft-green/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-minecraft-darker via-transparent to-transparent"></div>

                {/* Badge */}
                <div
                  className={`absolute top-3 left-3 ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold`}
                >
                  {product.badge}
                </div>

                {/* Price Tag */}
                <div className="absolute top-3 right-3 bg-minecraft-darker/90 border border-minecraft-green/30 rounded-lg p-2">
                  <div className="text-right">
                    {product.oldPrice && (
                      <div className="text-xs text-minecraft-gray line-through">
                        {product.oldPrice}₽
                      </div>
                    )}
                    <div className="text-minecraft-green font-bold text-lg">
                      {product.price}₽
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-minecraft-green transition-colors">
                  {product.name}
                </h3>
                <p className="text-minecraft-gray mb-4 text-sm leading-relaxed">
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
                        className="text-minecraft-green mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-minecraft-green to-minecraft-green/80 hover:from-minecraft-green/80 hover:to-minecraft-green text-minecraft-dark font-bold py-3 shadow-lg transform hover:scale-105 transition-all">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Купить за {product.price}₽
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-minecraft-green/30 text-minecraft-green hover:bg-minecraft-green/10"
                  >
                    Подробнее
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-minecraft-green text-minecraft-green hover:bg-minecraft-green hover:text-minecraft-dark font-bold px-8 py-4 shadow-lg transform hover:scale-105 transition-all"
          >
            Посмотреть все товары
            <Icon name="ArrowRight" size={22} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
