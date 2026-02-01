"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";

export function AnimatedCounter({
  end,
  prefix = '',
  suffix = '',
  duration = 2,
  className = ''
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <span ref={ref} className={className}>
      {isInView ? (
        <CountUp
          end={end}
          duration={duration}
          prefix={prefix}
          suffix={suffix}
          separator=" "
        />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  );
}
