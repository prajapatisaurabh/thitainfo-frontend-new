import { CategoryProvide } from "@/context/CategoryContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CategoryProvide>{children}</CategoryProvide>
    </>
  );
}
