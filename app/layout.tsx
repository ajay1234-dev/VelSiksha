import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "VelSiksha Tuition Centre | Learn. Grow. Excel.",
    template: "%s | VelSiksha Tuition Centre",
  },
  description:
    "Providing structured academic support for students from Classes 6 to 12 with focus on concept clarity and consistent improvement at affordable fees in Chennai.",
  metadataBase: new URL("https://ajay1234-dev.github.io/VelSiksha"),
  keywords: [
    "tuition centre",
    "tuition classes",
    "Chennai tuition",
    "Classes 6-12",
    "mathematics tutor",
    "science tuition",
    "best tuition Chennai",
    "VelSiksha",
    "Madhumitha R",
    "individual attention",
    "affordable fees",
  ],
  authors: [{ name: "Madhumitha R" }],
  creator: "VelSiksha Tuition Centre",
  publisher: "VelSiksha Tuition Centre",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ajay1234-dev.github.io/VelSiksha",
    title: "VelSiksha Tuition Centre | Learn. Grow. Excel.",
    description:
      "Quality education for Classes 6-12 with individual attention and affordable fees.",
    siteName: "VelSiksha Tuition Centre",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 400,
        height: 400,
        alt: "VelSiksha Tuition Centre Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VelSiksha Tuition Centre",
    description:
      "Quality education for Classes 6-12 with individual attention.",
    images: ["/images/logo.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
