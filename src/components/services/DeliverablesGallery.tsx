"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { DeliverableVisual } from "../../../sanity/lib/types";
import { resolveImageUrl } from "../../../sanity/lib/image";

interface DeliverablesGalleryProps {
  title?: string;
  subtitle?: string;
  deliverables: DeliverableVisual[];
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function DeliverablesGallery({
  title,
  subtitle,
  deliverables,
}: DeliverablesGalleryProps) {
  if (!deliverables || deliverables.length === 0) return null;

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12">
      <div className="max-w-[82.5rem] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-2.5 mb-4 justify-center">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-[10px] sm:text-[11px] font-light tracking-[0.12em] text-muted uppercase">
              Livrables
            </span>
          </div>
          {title && (
            <h2 className="font-heading font-normal text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-primary">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-base text-secondary leading-relaxed mt-4 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {deliverables.map((item, i) => {
            const imgUrl = resolveImageUrl(item.image, 800);
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group bg-card border border-black/[0.06] overflow-hidden hover:border-black/[0.12] hover:shadow-lg transition-all duration-500"
              >
                {/* Image zone */}
                <div className="aspect-[4/3] relative overflow-hidden bg-grey">
                  {imgUrl && (
                    <Image
                      src={imgUrl}
                      alt={item.title}
                      fill
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  {/* Badge numéro */}
                  <div className="absolute bottom-4 left-4 w-10 h-10 bg-accent flex items-center justify-center">
                    <span className="text-sm font-semibold text-black">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Text zone */}
                <div className="p-6">
                  <h3 className="text-base font-medium text-primary mb-1.5">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
