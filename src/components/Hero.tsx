import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-minecraft-dark via-minecraft-darker to-minecraft-dark py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 gap-1 h-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="bg-minecraft-green/20 rounded-sm"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Server Status Banner */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-minecraft-green/20 to-minecraft-gold/20 border border-minecraft-green/30 rounded-full px-6 py-3 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-minecraft-green rounded-full animate-pulse-green"></div>
              <span className="text-minecraft-green font-bold">ОНЛАЙН</span>
            </div>
            <div className="w-px h-4 bg-minecraft-green/30"></div>
            <span className="text-white font-medium">1,247 игроков</span>
            <div className="w-px h-4 bg-minecraft-green/30"></div>
            <span className="text-minecraft-gold font-medium">
              mc.craftstore.ru
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Премиум магазин для
            <span className="text-transparent bg-gradient-to-r from-minecraft-green to-minecraft-gold bg-clip-text block">
              Minecraft
            </span>
          </h1>

          <p className="text-xl text-minecraft-light-gray mb-10 max-w-3xl mx-auto leading-relaxed">
            Покупайте привилегии, ранги, предметы и ресурсы для незабываемого
            игрового опыта. Мгновенная выдача после оплаты!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-minecraft-green to-minecraft-green/80 hover:from-minecraft-green/80 hover:to-minecraft-green text-minecraft-dark font-bold px-10 py-4 text-lg border-2 border-minecraft-green/30 shadow-lg transform hover:scale-105 transition-all"
            >
              <Icon name="ShoppingBag" size={22} className="mr-3" />
              Открыть каталог
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-minecraft-gold text-minecraft-gold hover:bg-minecraft-gold hover:text-minecraft-dark font-bold px-10 py-4 text-lg shadow-lg transform hover:scale-105 transition-all"
            >
              <Icon name="Gamepad2" size={22} className="mr-3" />
              Подключиться к серверу
            </Button>
          </div>

          {/* Server Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-minecraft-darker/80 to-minecraft-dark/80 border border-minecraft-green/30 rounded-xl p-6 backdrop-blur-sm hover:border-minecraft-green/50 transition-all">
              <Icon
                name="Users"
                size={36}
                className="text-minecraft-gold mb-3 mx-auto"
              />
              <h3 className="text-minecraft-gold font-bold text-2xl mb-1">
                1,247
              </h3>
              <p className="text-minecraft-gray text-sm font-medium">
                Игроков онлайн
              </p>
            </div>
            <div className="bg-gradient-to-br from-minecraft-darker/80 to-minecraft-dark/80 border border-minecraft-blue/30 rounded-xl p-6 backdrop-blur-sm hover:border-minecraft-blue/50 transition-all">
              <Icon
                name="Clock"
                size={36}
                className="text-minecraft-blue mb-3 mx-auto"
              />
              <h3 className="text-minecraft-blue font-bold text-2xl mb-1">
                99.9%
              </h3>
              <p className="text-minecraft-gray text-sm font-medium">
                Время работы
              </p>
            </div>
            <div className="bg-gradient-to-br from-minecraft-darker/80 to-minecraft-dark/80 border border-minecraft-green/30 rounded-xl p-6 backdrop-blur-sm hover:border-minecraft-green/50 transition-all">
              <Icon
                name="Shield"
                size={36}
                className="text-minecraft-green mb-3 mx-auto"
              />
              <h3 className="text-minecraft-green font-bold text-2xl mb-1">
                100%
              </h3>
              <p className="text-minecraft-gray text-sm font-medium">
                Защита от гриферов
              </p>
            </div>
            <div className="bg-gradient-to-br from-minecraft-darker/80 to-minecraft-dark/80 border border-minecraft-red/30 rounded-xl p-6 backdrop-blur-sm hover:border-minecraft-red/50 transition-all">
              <Icon
                name="Zap"
                size={36}
                className="text-minecraft-red mb-3 mx-auto"
              />
              <h3 className="text-minecraft-red font-bold text-2xl mb-1">
                24/7
              </h3>
              <p className="text-minecraft-gray text-sm font-medium">
                Поддержка
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
