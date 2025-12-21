"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { mainMenu } from "@/constant/menu";
import Link from "next/link";
import { Tiles } from "@/components/common/Tails";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="relative min-h-screen flex justify-center items-center overflow-hidden">
      <Tiles className="absolute inset-0" />

      <div className="flex flex-col gap-6 z-10">
        {mainMenu.map((item) => (
          <CardMenu key={item.label} url={item.url} title={item.label} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.12, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 select-none"
      >
        <div className="flex items-center gap-4">
  
          <img
            src="/logo_bps.png"
            alt="Logo BPS"
            width={64}
            height={64}
            className="opacity-80"
          />
          <span className="text-xl lg:text-5xl font-extrabold tracking-widest bg-linear-to-r from-[#005BAC] via-[#00A859] to-[#F7941D] bg-clip-text text-transparent">
            BPS PASAMAN BARAT
          </span>
        </div>
      </motion.div>
    </div>
  );
}

function CardMenu({ title, url }: { title: string; url: string }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-xl " />
      <Card className="relative z-10 w-90 rounded-xl bg-background">
        <Link href={url}>
          <CardContent className="flex items-center gap-4 px-6 py-4">
            <ChevronRight className="w-8 h-8 shrink-0" />
            <h1 className="text-lg font-medium">{title}</h1>
          </CardContent>
        </Link>
      </Card>
    </div>
  );
}
