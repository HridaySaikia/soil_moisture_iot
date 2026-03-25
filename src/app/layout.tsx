import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
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

      <body>
        <ClerkProvider
          appearance={{
            baseTheme: dark,
            variables: {
              colorPrimary: "#22c55e",
            },
            elements: {
              /* MAIN MODAL CARD */
              card: {
                backgroundColor: "#0b1220", // solid dark (IMPORTANT)
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 25px 80px rgba(0,0,0,0.65)",
              },
              
              dividerText: {
                color: "#94a3b8",
              },

              /* HEADER TEXT (THIS FIXES YOUR MAIN ISSUE) */
              headerTitle: {
                color: "#f8fafc",
                fontWeight: "600",
              },

              headerSubtitle: {
                color: "#94a3b8",
              },

              /* INPUT FIELDS */
              formFieldInput: {
                backgroundColor: "#020617",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#f8fafc",

                /* THIS IS THE KEY LINE */
                "::placeholder": {
                  color: "#94a3b8", // brighter but still soft
                  opacity: 1,
                },
              },

              formFieldLabel: {
                color: "#94a3b8",
              },

              /* GOOGLE BUTTON */
              socialButtonsBlockButton: {
                backgroundColor: "#020617",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#e5e7eb",
              },

              /* PRIMARY BUTTON */
              formButtonPrimary: {
                backgroundColor: "#22c55e",
                color: "#022c22",
                fontWeight: "600",
              },

              /* FOOTER FIX (VERY IMPORTANT) */
              footer: {
                backgroundColor: "#0b1220",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              },

              footerActionText: {
                color: "#94a3b8",
              },

              /* MODAL BACKDROP */
              modalBackdrop: {
                backgroundColor: "rgba(0,0,0,0.8)",
                backdropFilter: "blur(8px)",
              },

              // footer: {
              //   backgroundColor: "#0b1220",
              //   borderTop: "1px solid rgba(255,255,255,0.06)",
              // },

              // footerAction: {
              //   backgroundColor: "#0b1220",
              // },

              // identityPreview: {
              //   backgroundColor: "#0b1220",
              // },

              // footerActionText: {
              //   color: "#94a3b8",
              // },
            },
          }}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}