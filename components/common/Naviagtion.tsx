// components/MainNavigation.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

import { kecamatan, mainMenu, nagari } from "@/constant/menu";
import { cn } from "@/lib/utils";

export function MainNavigation() {
  const [openKecamatan, setOpenKecamatan] = useState(false);
  const [openNagari, setOpenNagari] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const sortedKecamatan = [...kecamatan].sort((a, b) =>
    a.label.localeCompare(b.label, "id")
  );
  const sortedNagari = [...nagari].sort((a, b) =>
    a.label.localeCompare(b.label, "id")
  );

  return (
    <div className="w-full flex justify-center">
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-1 rounded-full border bg-background px-2 py-1 shadow-sm">
          {mainMenu.map((menu) =>
            menu.label === "Kecamatan" ? (
              <NavigationMenuItem key={menu.label}>
                <DropdownMenu
                  open={openKecamatan}
                  onOpenChange={setOpenKecamatan}
                >
                  <DropdownMenuTrigger
                    className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-2",
                      "text-sm font-semibold tracking-wider transition-colors",
                      pathname.startsWith("/kecamatan")
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted hover:text-primary"
                    )}
                  >
                    Kecamatan
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        openKecamatan && "rotate-180"
                      )}
                    />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="center" className="min-w-56">
                    {sortedKecamatan.map((item) => {
                      const href = `/kecamatan/${item.label}`;

                      return (
                        <DropdownMenuItem key={item.key} asChild>
                          <Link
                            href={href}
                            className={cn(
                              "w-full px-4 py-2 text-sm transition-colors",
                              pathname === href
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-muted hover:text-primary"
                            )}
                          >
                            {item.label}
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>
            ) : menu.label === "Nagari" ? (
              <NavigationMenuItem key={menu.label}>
                <DropdownMenu open={openNagari} onOpenChange={setOpenNagari}>
                  <DropdownMenuTrigger
                    className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-2",
                      "text-sm font-semibold tracking-wider transition-colors",
                      pathname.startsWith("/nagari")
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted hover:text-primary"
                    )}
                  >
                    Nagari
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        openNagari && "rotate-180"
                      )}
                    />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="center"
                    className="min-w-56 max-h-80 overflow-y-auto"
                  >
                    {sortedNagari.map((item) => {
                      const href = `/nagari/${item.label}`;

                      return (
                        <DropdownMenuItem key={item.key} asChild>
                          <Link
                            href={href}
                            className={cn(
                              "w-full px-4 py-2 text-sm transition-colors",
                              pathname === href
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-muted hover:text-primary"
                            )}
                          >
                            {item.label}
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={menu.label}>
                <Link
                  href={menu.url}
                  className={cn(
                    "rounded-full px-4 py-2",
                    "text-sm font-semibold tracking-wider transition-colors",
                    isActive(menu.url)
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted hover:text-primary"
                  )}
                >
                  {menu.label}
                </Link>
              </NavigationMenuItem>
            )
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
