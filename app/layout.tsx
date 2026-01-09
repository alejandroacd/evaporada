import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Configurar Roboto Condensed
const robotoCondensed = Roboto_Condensed({
  weight: '400', // Solo regular (400)
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-condensed',
});

export const metadata = {
  title: "Evaporada",
  description: "Photography by Evaly Cardenas",  
  experimentalViewTransitions: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="view-transition">
      <body
        className={`${robotoCondensed.variable} antialiased flex flex-col min-h-screen`}
        style={{ fontFamily: 'var(--font-roboto-condensed)' }} // Forzar Roboto Condensed
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">
            <section className="lg:px-24 lg:py-12 p-6">
              {children}
            </section>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}