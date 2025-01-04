import { Toaster } from "@/components/ui/toaster";
import Footer from "./_components/footer/footer";
import Header from "./_components/header/header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Toaster />
    </>
  );
}
