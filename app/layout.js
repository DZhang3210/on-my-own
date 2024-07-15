
import { getServerSession } from "next-auth";
import "./globals.css";
import { authOptions } from "@/lib/authOptions";
import Header from "@/components/Header";
import { FooterComponent } from "@/components/Index/FooterComponent";

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body>
        <Header session = {session}/>
        {children}
        <FooterComponent/>
      </body>
    </html>
  );
}
