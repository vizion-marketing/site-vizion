"use client";

import dynamic from "next/dynamic";

const CallWidget = dynamic(
  () => import("@/components/CallWidget").then((m) => ({ default: m.CallWidget })),
  { ssr: false }
);

export function LazyCallWidget() {
  return <CallWidget />;
}
