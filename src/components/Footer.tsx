import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-minecraft-darker border-t border-minecraft-green/20 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-minecraft-green rounded-sm flex items-center justify-center">
                <span className="text-minecraft-dark font-bold text-lg">
                  ⛏️
                </span>
              </div>
              <span className="text-xl font-bold text-minecraft-green">
                CraftStore
              </span>
            </div>
            <p className="text-minecraft-gray mb-4 max-w-md">
              Лучший магазин для покупки привилегий, предметов и улучшений для
              вашего приключения в Minecraft. Играйте с комфортом!
            </p>
            <div className="flex space-x-4">
              <Icon
                name="MessageCircle"
                size={20}
                className="text-minecraft-light-gray hover:text-minecraft-green cursor-pointer"
              />
              <Icon
                name="Mail"
                size={20}
                className="text-minecraft-light-gray hover:text-minecraft-green cursor-pointer"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-minecraft-gray hover:text-minecraft-green transition-colors"
                >
                  Каталог
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-minecraft-gray hover:text-minecraft-green transition-colors"
                >
                  Привилегии
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-minecraft-gray hover:text-minecraft-green transition-colors"
                >
                  Сервера
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-minecraft-gray hover:text-minecraft-green transition-colors"
                >
                  Поддержка
                </a>
              </li>
            </ul>
          </div>

          {/* Server Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Подключение</h3>
            <div className="space-y-2">
              <div className="bg-minecraft-dark border border-minecraft-green/20 rounded p-3">
                <p className="text-xs text-minecraft-gray mb-1">
                  IP адрес сервера:
                </p>
                <p className="text-minecraft-green font-mono">
                  mc.craftstore.ru
                </p>
              </div>
              <div className="text-sm text-minecraft-gray">Версия: 1.20.x</div>
            </div>
          </div>
        </div>

        <div className="border-t border-minecraft-green/20 mt-8 pt-8 text-center">
          <p className="text-minecraft-gray text-sm">
            © 2024 CraftStore. Все права защищены. Не является официальным
            продуктом Mojang Studios.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
