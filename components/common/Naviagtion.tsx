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

import { kecamatan, mainMenu } from "@/constant/menu";
import { cn } from "@/lib/utils";

export function MainNavigation() {
  const [openKecamatan, setOpenKecamatan] = useState(false);

  const sortedKecamatan = [...kecamatan].sort((a, b) =>
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
                      "text-sm font-semibold tracking-wider",
                      "transition-colors hover:bg-muted hover:text-primary"
                    )}
                  >
                    {menu.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        openKecamatan && "rotate-180"
                      )}
                    />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="center" className="min-w-56">
                    {sortedKecamatan.map((item) => (
                      <DropdownMenuSub key={item.key}>
                        <DropdownMenuSubTrigger className="flex justify-between">
                          {item.label}
                        </DropdownMenuSubTrigger>

                        <DropdownMenuSubContent className="min-w-56">
                          {item.children
                            .slice()
                            .sort((a, b) =>
                              a.label.localeCompare(b.label, "id")
                            )
                            .map((nagari) => (
                              <DropdownMenuItem key={nagari.key} asChild>
                                <Link
                                  href={{
                                    pathname: `/nagari/${nagari.label}`,
                                    query: { kecamatan: item.label },
                                  }}
                                  className="w-full"
                                >
                                  {nagari.label}
                                </Link>
                              </DropdownMenuItem>
                            ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={menu.label}>
                <Link
                  href={menu.url}
                  className={cn(
                    "rounded-full px-4 py-2",
                    "text-sm font-semibold tracking-wider",
                    "transition-colors hover:bg-muted hover:text-primary"
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
