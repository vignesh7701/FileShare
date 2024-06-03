

export const metadata = {
  title: "Fileshare App",
  description: "Share files with your friends and family",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
