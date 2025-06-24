import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-minecraft-darker border-t border-minecraft-green/20 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-minecraft-green to-minecraft-gold rounded-lg flex items-center justify-center border-2 border-minecraft-green/30">
                <span className="text-minecraft-dark font-bold text-2xl">
                  ⛏️
                </span>
              </div>
              <div>
                <span className="text-2xl font-bold text-minecraft-green block">
                  CraftStore
                </span>
                <span className="text-sm text-minecraft-gray">
                  Premium Minecraft Shop
                </span>
              </div>
            </div>
            <p className="text-minecraft-gray mb-6 max-w-md leading-relaxed">
              Лучший магазин для покупки привилегий, предметов и улучшений для
              вашего приключения в Minecraft. Играйте с комфортом уже сегодня!
            </p>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-white font-bold">Следите за нами:</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-minecraft-dark border border-minecraft-green/30 p-3 rounded-lg hover:border-minecraft-green/50 hover:bg-minecraft-green/10 transition-all group"
                >
                  <Icon
                    name="MessageCircle"
                    size={20}
                    className="text-minecraft-light-gray group-hover:text-minecraft-green"
                  />
                </a>
                <a
                  href="#"
                  className="bg-minecraft-dark border border-minecraft-blue/30 p-3 rounded-lg hover:border-minecraft-blue/50 hover:bg-minecraft-blue/10 transition-all group"
                >
                  <Icon
                    name="Youtube"
                    size={20}
                    className="text-minecraft-light-gray group-hover:text-minecraft-blue"
                  />
                </a>
                <a
                  href="#"
                  className="bg-minecraft-dark border border-minecraft-gold/30 p-3 rounded-lg hover:border-minecraft-gold/50 hover:bg-minecraft-gold/10 transition-all group"
                >
                  <Icon
                    name="Instagram"
                    size={20}
                    className="text-minecraft-light-gray group-hover:text-minecraft-gold"
                  />
                </a>
                <a
                  href="#"
                  className="bg-minecraft-dark border border-minecraft-red/30 p-3 rounded-lg hover:border-minecraft-red/50 hover:bg-minecraft-red/10 transition-all group"
                >
                  <Icon
                    name="Mail"
                    size={20}
                    className="text-minecraft-light-gray group-hover:text-minecraft-red"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">
              Быстрые ссылки
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-minecraft-gray hover:text-minecraft-green transition-colors flex items-center"
                >
                  <Icon name="ChevronRight" size={16} className="mr-2" />
                  Каталог товаров
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-minecraft-gray hover:text-minecraft-green transition-colors flex items-center"
                >
                  <Icon name="ChevronRight" size={16} className="mr-2" />
                  Привилегии и ранги
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-minecraft-gray hover:text-minecraft-green transition-colors flex items-center"
                >
                  <Icon name="ChevronRight" size={16} className="mr-2" />
                  Сервера
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-minecraft-gray hover:text-minecraft-green transition-colors flex items-center"
                >
                  <Icon name="ChevronRight" size={16} className="mr-2" />
                  Правила сервера
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-minecraft-gray hover:text-minecraft-green transition-colors flex items-center"
                >
                  <Icon name="ChevronRight" size={16} className="mr-2" />
                  Поддержка 24/7
                </a>
              </li>
            </ul>
          </div>

          {/* Server Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">
              Подключение к серверу
            </h3>
            <div className="space-y-4">
              <div className="bg-minecraft-dark border border-minecraft-green/30 rounded-lg p-4 hover:border-minecraft-green/50 transition-all">
                <p className="text-xs text-minecraft-gray mb-2 flex items-center">
                  <Icon name="Server" size={14} className="mr-2" />
                  IP адрес сервера:
                </p>
                <p className="text-minecraft-green font-mono text-lg font-bold">
                  mc.craftstore.ru
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-2 w-full border-minecraft-green/30 text-minecraft-green hover:bg-minecraft-green/10"
                >
                  <Icon name="Copy" size={14} className="mr-2" />
                  Скопировать IP
                </Button>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-minecraft-gray">Версия:</span>
                  <span className="text-minecraft-green font-medium">
                    1.20.x
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-minecraft-gray">Режим:</span>
                  <span className="text-minecraft-green font-medium">
                    Выживание
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-minecraft-gray">Онлайн:</span>
                  <span className="text-minecraft-gold font-medium">
                    1,247/2,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-minecraft-green/20 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-white font-bold mb-4">Способы оплаты:</h4>
            <div className="flex justify-center items-center space-x-6 flex-wrap gap-4">
              <div className="bg-minecraft-dark border border-minecraft-green/30 rounded-lg p-3 hover:border-minecraft-green/50 transition-all">
                <Icon
                  name="CreditCard"
                  size={24}
                  className="text-minecraft-green"
                />
              </div>
              <div className="bg-minecraft-dark border border-minecraft-green/30 rounded-lg p-3 hover:border-minecraft-green/50 transition-all">
                <Icon
                  name="Smartphone"
                  size={24}
                  className="text-minecraft-green"
                />
              </div>
              <div className="bg-minecraft-dark border border-minecraft-green/30 rounded-lg p-3 hover:border-minecraft-green/50 transition-all">
                <Icon
                  name="Wallet"
                  size={24}
                  className="text-minecraft-green"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-minecraft-green/20 pt-8 text-center">
          <p className="text-minecraft-gray text-sm mb-2">
            © 2024 CraftStore. Все права защищены. Не является официальным
            продуктом Mojang Studios.
          </p>
          <p className="text-minecraft-gray text-xs">
            Безопасные платежи • Мгновенная выдача • Поддержка 24/7
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
