// Diagonal Divider Component - Placed at bottom of sections (inside)
export function SectionDiagonalBottom({
  fillColor = '#F2F2F2',
  direction = 'left'
}: {
  fillColor?: string;
  direction?: 'left' | 'right'
}) {
  return (
    <div className="absolute bottom-0 left-0 w-full h-8 sm:h-12 md:h-16 pointer-events-none z-20 translate-y-[1px]">
      <svg
        className="w-full h-full block"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
      >
        <polygon
          points={direction === 'left' ? "0,40 1440,0 1440,40" : "0,0 1440,40 0,40"}
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

// Diagonal Divider Component - Placed at top of dark sections (clips the previous section color)
export function SectionDiagonalTop({
  fillColor = '#F2F2F2',
  direction = 'left'
}: {
  fillColor?: string;
  direction?: 'left' | 'right'
}) {
  return (
    <div className="absolute top-0 left-0 w-full h-8 sm:h-12 md:h-16 pointer-events-none z-10 -translate-y-[1px]">
      <svg
        className="w-full h-full block"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
      >
        <polygon
          points={direction === 'left' ? "0,0 1440,0 0,40" : "1440,0 1440,40 0,0"}
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
