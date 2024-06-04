import "./globals.css";

export const metadata = {
  title: "Nextjs Tailwind",
  description: "This is a tutorial project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
