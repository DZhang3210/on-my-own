
import { getServerSession } from "next-auth";
import "./globals.css";
import { authOptions } from "@/lib/authOptions";
import Header from "@/components/Header";

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body>
        <Header session = {session}/>
        {children}
      </body>
    </html>
  );
}
