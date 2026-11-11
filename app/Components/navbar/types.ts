import type { NavIconName } from "./icons";

export type NavDropdownItem = {
  readonly label: string;
  readonly description: string;
  readonly href: string;
  readonly icon: NavIconName;
};

export type NavHelpLink = {
  readonly label: string;
  readonly href: string;
  readonly icon: NavIconName;
};

export type NavDropdown = {
  readonly eyebrow: string;
  readonly seeAll: { readonly label: string; readonly href: string };
  readonly image: {
    readonly src: string;
    readonly alt: string;
    readonly title: readonly string[];
    readonly cta: { readonly label: string; readonly href: string };
  };
  readonly items: readonly NavDropdownItem[];
};

export type NavMainItem = {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly dropdown?: NavDropdown;
};
