import "./globals.css";

export const metadata = {
    title: "Tiaia",
    description: "Bolsas e acessórios para uma rotina mais prática."
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <body>{children}</body>
        </html>
    );
}
