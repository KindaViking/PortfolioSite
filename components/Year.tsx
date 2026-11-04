"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// The year is read in the browser only, so the prebuilt static pages never bake in an old year.
export default function Year() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null,
  );
  return <span>{year}</span>;
}
