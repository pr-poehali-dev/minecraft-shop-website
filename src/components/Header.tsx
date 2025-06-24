import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-minecraft-darker border-b border-minecraft-green/20 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-minecraft-green to-minecraft-gold rounded-sm flex items-center justify-center border-2 border-minecraft-green/30">
              <span className="text-minecraft-dark font-bold text-xl">⛏️</span>
            </div>
            <div>
              <span className="text-xl font-bold text-minecraft-green block">
                CraftStore
              </span>
              <span className="text-xs text-minecraft-gray">
                Premium MC Shop
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Поиск товаров, рангов, привилегий..."
                className="w-full bg-minecraft-dark border border-minecraft-green/30 rounded-lg px-4 py-2 pl-10 text-white placeholder-minecraft-gray focus:border-minecraft-green focus:outline-none"
              />
              <Icon
                name="Search"
                size={18}
                className="absolute left-3 top-2.5 text-minecraft-gray"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-minecraft-light-gray hover:text-minecraft-green transition-colors font-medium"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-minecraft-light-gray hover:text-minecraft-green transition-colors font-medium"
            >
              Привилегии
            </a>
            <a
              href="#"
              className="text-minecraft-light-gray hover:text-minecraft-green transition-colors font-medium"
            >
              Предметы
            </a>
            <a
              href="#"
              className="text-minecraft-light-gray hover:text-minecraft-green transition-colors font-medium"
            >
              Донат
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-minecraft-light-gray hover:text-minecraft-green hover:bg-minecraft-green/10 relative"
            >
              <Icon name="ShoppingCart" size={20} />
              <span className="ml-2 hidden sm:inline font-medium">Корзина</span>
              <span className="absolute -top-1 -right-1 bg-minecraft-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>
            <Button
              size="sm"
              className="bg-minecraft-green hover:bg-minecraft-green/80 text-minecraft-dark font-bold"
            >
              <Icon name="User" size={18} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
