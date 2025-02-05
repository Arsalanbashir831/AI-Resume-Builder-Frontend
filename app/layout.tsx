import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { ImageProvider } from "@/context/ResumeImageContext";
import { SubscriptionProvider } from "@/context/CreditsContext";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "GetSetCV",
	description: "Ready, Set Hired!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

				<AuthProvider>
					<SubscriptionProvider>
						<ImageProvider>
							{children}
						</ImageProvider>
					</SubscriptionProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
