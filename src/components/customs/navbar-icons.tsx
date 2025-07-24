import { useState } from "react";
import { Moon, Search, ShoppingBasket, Sun } from "lucide-react";

export default function NavbarIcons() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isShoppingCartFull, setIsShoppingCartFull] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  return (
    <div className="flex items-center gap-4 icon-style navbar-icons-area">
      <span>
        <Search size={20} onClick={() => setIsSearchModalOpen(true)} />
      </span>
      <span onClick={() => setIsDarkMode((prev) => !prev)}>
        {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
      </span>
      <span className="shopping-cart">
        <ShoppingBasket size={20} />
        {isShoppingCartFull && (
          <span className="absolute bottom-6 -right-1 bg-orange-600 w-3 aspect-square rounded-full" />
        )}
      </span>
    </div>
  );
}
