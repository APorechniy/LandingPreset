import "./global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "I-Tort | Авторские торты на заказ",
  description: "Эксклюзивные торты из натуральных ингредиентов с индивидуальным дизайном",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}