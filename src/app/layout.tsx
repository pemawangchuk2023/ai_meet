import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const firaCode = Fira_Code({
	variable: "--font-fira-code",
	subsets: ["latin"],
	weight: ["400", "500"],
});

export const metadata: Metadata = {
	title: "SaaS AI Agent Platform",
	description: "This is a SaaS AI Agent Platform built with Next.js.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} ${firaCode.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
