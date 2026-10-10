export type NavItem = {
  label: string;
  href?: string;
  icon: string;
  children?: { label: string; href: string }[];
};

export const mainNav: NavItem[] = [
  { label: "Dashboard", href: "/", icon: "layout-dashboard" },
  { label: "Low Stock Alerts", href: "/low-stock", icon: "triangle-alert" },
  { label: "Restock Request", href: "/restock", icon: "package-plus" },
  {
    label: "Transactions",
    icon: "arrow-left-right",
    children: [
      { label: "Stock In", href: "/transactions/stock-in" },
      { label: "Stock Out", href: "/transactions/stock-out" },
      { label: "Transfer", href: "/transactions/transfer" },
      { label: "Stock Adjustment", href: "/transactions/adjustment" },
      { label: "Stock Opname", href: "/transactions/opname" },
    ],
  },
  { label: "Inventory Reports", href: "/reports", icon: "file-bar-chart" },
];

export const managementNav: NavItem[] = [
  {
    label: "Item Management",
    icon: "boxes",
    children: [
      { label: "Product Item", href: "/products" },
      { label: "Product Categories", href: "/categories" },
    ],
  },
  {
    label: "Warehouse",
    icon: "warehouse",
    children: [
      { label: "Overview", href: "/warehouses" },
      { label: "Zone Management", href: "/zones" },
      { label: "Rack Management", href: "/racks" },
      { label: "Bin Location", href: "/bins" },
    ],
  },
];

export const settingsNav: NavItem[] = [
  { label: "Settings", href: "/settings", icon: "settings" },
];
