import type { Metadata } from "next";
import { Orbitron, Rubik_Moonrocks } from "next/font/google";
import "./globals.css";
import NavbarPro from "@/components/NavbarPro";
import FooterPro from "@/components/FooterPro";
import BackToTopButton from "@/components/BackToTopButton";
import ErrorBoundary from "@/components/ErrorBoundary";
import LoadingSpinner from "@/components/LoadingSpinner";
import PageTransitionLoader from "@/components/PageTransitionLoader";
import StarryNightBackground from "@/components/StarryNightBackground";
import { AppProvider } from "@/context/AppContext";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Cursor from "@/components/Cursor";

const orbitronFont = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: '--font-orbitron',
});

const rubikMoonrocksFont = Rubik_Moonrocks({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-rubik-moonrocks',
});

export const metadata = {
  title: "Tollverine | Automated Tolling",
  description: "Turning Vision Into Voltage.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitronFont.variable} ${rubikMoonrocksFont.variable}`}>
      <body>
        <ErrorBoundary>
          <AppProvider>
            <ThemeProvider>
              <AuthProvider>
                <Cursor />
                <PageTransitionLoader />
                <LoadingSpinner />
                {/* The new background now wraps the entire page content */}
                <StarryNightBackground>
                  <NavbarPro />
                  <main>{children}</main>
                  <FooterPro />
                  <BackToTopButton />
                </StarryNightBackground>
              </AuthProvider>
            </ThemeProvider>
          </AppProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}