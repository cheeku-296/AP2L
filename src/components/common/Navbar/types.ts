export interface NavigationItem {
  title: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface NavigationSection {
  title: string;
  href?: string;
  children?: NavigationItem[];
}