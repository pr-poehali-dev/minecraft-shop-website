import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-minecraft-dark to-minecraft-darker py-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Server Status */}
          <div className="inline-flex items-center space-x-2 bg-minecraft-green/20 rounded-full px-4 py-2 mb-6">
            <div className="w-3 h-3 bg-minecraft-green rounded-full animate-pulse-green"></div>
            <span className="text-minecraft-green font-medium">
              Сервер онлайн • 1,247 игроков
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Лучший магазин для{" "}
            <span className="text-minecraft-green">Minecraft</span>
          </h1>

          <p className="text-xl text-minecraft-light-gray mb-8 max-w-2xl mx-auto">
            Покупайте привилегии, блоки, оружие и многое другое для вашего
            приключения в мире кубиков
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-minecraft-green hover:bg-minecraft-green/80 text-minecraft-dark font-bold px-8 py-4 text-lg"
            >
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Открыть каталог
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-minecraft-green text-minecraft-green hover:bg-minecraft-green hover:text-minecraft-dark font-bold px-8 py-4 text-lg"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Подключиться к серверу
            </Button>
          </div>

          {/* Server Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-minecraft-darker/50 border border-minecraft-green/20 rounded-lg p-6">
              <Icon
                name="Users"
                size={32}
                className="text-minecraft-gold mb-2 mx-auto"
              />
              <h3 className="text-minecraft-gold font-bold text-lg mb-1">
                1,247
              </h3>
              <p className="text-minecraft-gray text-sm">Игроков онлайн</p>
            </div>
            <div className="bg-minecraft-darker/50 border border-minecraft-green/20 rounded-lg p-6">
              <Icon
                name="Server"
                size={32}
                className="text-minecraft-blue mb-2 mx-auto"
              />
              <h3 className="text-minecraft-blue font-bold text-lg mb-1">
                24/7
              </h3>
              <p className="text-minecraft-gray text-sm">Стабильная работа</p>
            </div>
            <div className="bg-minecraft-darker/50 border border-minecraft-green/20 rounded-lg p-6">
              <Icon
                name="Shield"
                size={32}
                className="text-minecraft-green mb-2 mx-auto"
              />
              <h3 className="text-minecraft-green font-bold text-lg mb-1">
                100%
              </h3>
              <p className="text-minecraft-gray text-sm">Защита от гриферов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
