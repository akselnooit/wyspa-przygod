import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";
export const metadata:Metadata={title:{default:"Wyspa Przygód",template:"%s | Wyspa Przygód"},description:"Rodzinna kronika przygód, miejsc i bohaterów."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pl"><body><Header/><main>{children}</main><Footer/></body></html>}
