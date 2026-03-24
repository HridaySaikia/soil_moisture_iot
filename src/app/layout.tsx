import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  try {
                    var saved = localStorage.getItem('dashboard-theme');
                    var theme = saved || 'dark';
                    if (theme === 'dark') {
                      document.documentElement.setAttribute('data-theme', 'dark');
                    } else {
                      document.documentElement.removeAttribute('data-theme');
                    }
                  } catch (e) {}
                })();
              `,
            }}
          />
        </head>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}

