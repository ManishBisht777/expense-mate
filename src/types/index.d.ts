import { Icons } from "@/components/icons";

interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

interface MarketingConfig {
  mainNav: NavItem[];
}
