import { LayoutProps } from "@/models";
import * as React from "react";
import Link from "next/link";

export default function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Admin Layout</h1>
      <div>Sidebar</div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <div>{children}</div>
    </div>
  );
}
