"use client";

import { Activity, Flag, Grip, Menu, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import SearchBar from "./SearchBar";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <NavigationMenuItem>
    <NavigationMenuLink
      className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
      href={href}
    >
      {children}
    </NavigationMenuLink>
  </NavigationMenuItem>
);

const Navbar: React.FC = () => {
  const handleSearch = (searchTerm: string) => {
    console.log("Searching for:", searchTerm);
    // Implement your search logic here
  };

  return (
    <div className="w-full fixed top-0 inset-x-0 z-50 bg-white dark:bg-gray-900 ">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-3 space-y-4 md:space-y-0">
          <div className="flex justify-between items-center w-full md:w-auto">
            <a href="/" className="flex items-center space-x-2">
              <span className="font-medium text-black dark:text-white">
                SolMarket
              </span>
            </a>
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div className="w-full md:w-auto md:flex-1 md:px-8">
            <SearchBar onSearch={handleSearch} />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-8">
                <NavLink href="/#features">
                  <div className="flex flex-col item-center space-y-1 justify-between ">
                    <span className="flex justify-center">
                      <Grip />
                    </span>
                    <span>Market</span>
                  </div>
                </NavLink>
                <NavLink href="/#pricing">
                  <span className="flex justify-center">
                    <Flag /> 
                  </span>
                  <span>Market</span>
                </NavLink>
                <NavLink href="/#contact">
                  <span className="flex justify-center">
                    <Activity />
                  </span>
                  <span>Market</span>
                </NavLink>
                <NavLink href="/#contact">
                  <span className="flex justify-center">
                    <Trophy />
                  </span>
                  <span>Market</span>
                </NavLink>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center mr-3 space-x-4">
            <Button variant="ghost" asChild>
              <a href="/login">Login</a>
            </Button>

            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
