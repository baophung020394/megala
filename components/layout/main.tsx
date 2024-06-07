import { LayoutProps } from "@/models";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default function MainLayout({ children }: LayoutProps) {
  return (
    <>
      {/* <Header /> */}
      {children}
      <Footer />
    </>
  );
}
