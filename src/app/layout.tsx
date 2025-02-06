import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-between">
          <div><LeftBar/></div>
          <div>{children}</div>
          <div><RightBar/></div>
        </div>
      </body>
    </html>
  );
}
