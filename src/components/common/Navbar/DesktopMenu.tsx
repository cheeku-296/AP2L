"use client";

import Dropdown from "./Dropdown";
import NavItem from "./NavItem";
import { navigation } from "./navigation";

export default function DesktopMenu() {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navigation.map((item) => {
        // Dropdown Menu
        if (item.children && item.children.length > 0) {
          return (
            <Dropdown
              key={item.title}
              title={item.title}
              items={item.children}
            />
          );
        }

        // Normal Navigation Link
        return (
          <NavItem
            key={item.title}
            title={item.title}
            href={item.href!}
          />
        );
      })}
    </nav>
  );
}