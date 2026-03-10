"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Testimonial } from "../../../sanity/lib/types";
import { resolveImageUrl } from "../../../sanity/lib/image";

interface TestimonialCinematicProps {
  testimonial: Testimonial;
}

export function TestimonialCinematic({
  testimonial,
}: TestimonialCinematicProps) {
  if (!testimonial || !testimonial.quote) return null;

  const photoUrl = testimonial.photo
    ? resolveImageUrl(testimonial.photo, 120)
    : null;

  const initials = testimonial.author
    ? testimonial.author
        .split(" ")
        .map((w) => w[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "";

  return (
    <section className="bg-white py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12">
      <div className="max-w-[48rem] mx-auto text-center">
        {/* Guillemet décoratif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-8xl sm:text-9xl text-accent/20 font-serif leading-none select-none"
          aria-hidden="true"
        >
          &ldquo;
        </motion.div>

        {/* Citation */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl font-light text-primary leading-[1.7] italic -mt-8 sm:-mt-12"
        >
          {testimonial.quote}
        </motion.blockquote>

        {/* Trait séparateur */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="w-12 h-px bg-accent mx-auto my-8 origin-center"
        />

        {/* Auteur */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center gap-4 justify-center"
        >
          {photoUrl ? (
            <Image
              src={photoUrl}
              alt={testimonial.author}
              width={56}
              height={56}
              className="w-14 h-14 rounded-full object-cover"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center">
              <span className="text-base font-medium text-primary">
                {initials}
              </span>
            </div>
          )}
          <div className="text-left">
            <p className="text-base font-medium text-primary">
              {testimonial.author}
            </p>
            {(testimonial.role || testimonial.company) && (
              <p className="text-sm text-secondary">
                {[testimonial.role, testimonial.company]
                  .filter(Boolean)
                  .join(" — ")}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
