import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
const TilesComponent: React.FC<{
  className?: string;
  rows?: number;
  cols?: number;
}> = ({ className, rows: r, cols: c }) => {
  const rows = new Array(r || 100).fill(1);
  const cols = new Array(c || 10).fill(1);

  return (
    <div
      className={cn(
        "relative z-0 flex w-full h-full justify-center",
        className
      )}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className={`md:w-12 sm:h-12 w-9 h-9 border-l dark:border-neutral-900 border-neutral-200 relative`}
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.02,
                backgroundColor: "var(--tile)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              key={`col` + j}
              className="md:w-12 sm:h-12 w-9 h-9 border-r border-t dark:border-neutral-900 border-neutral-200 relative"
              style={{ willChange: "transform, background-color" }}
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Tiles = React.memo(TilesComponent);
