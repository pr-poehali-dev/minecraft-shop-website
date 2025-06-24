import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-minecraft-darker border-b border-minecraft-green/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-minecraft-green rounded-sm flex items-center justify-center">
              <span className="text-minecraft-dark font-bold text-lg">⛏️</span>
            </div>
            <span className="text-xl font-bold text-minecraft-green">
              CraftStore
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-minecraft-light-gray hover:text-minecraft-green transition-colors"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-minecraft-light-gray hover:text-minecraft-green transition-colors"
            >
              Каталог
            </a>
            <a
              href="#"
              className="text-minecraft-light-gray hover:text-minecraft-green transition-colors"
            >
              Серверы
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-minecraft-light-gray hover:text-minecraft-green hover:bg-minecraft-green/10"
            >
              <Icon name="ShoppingCart" size={20} />
              <span className="ml-2 hidden sm:inline">Корзина</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-minecraft-light-gray hover:text-minecraft-green hover:bg-minecraft-green/10"
            >
              <Icon name="User" size={20} />
              <span className="ml-2 hidden sm:inline">Профиль</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
