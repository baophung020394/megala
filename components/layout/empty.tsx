import { LayoutProps } from "@/models";
import * as React from "react";
import Link from "next/link";

export default function EmptyLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
