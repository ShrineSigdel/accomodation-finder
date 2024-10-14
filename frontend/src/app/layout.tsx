import '@/app/globals.css'
import Header from '@/app/ui/header'
import Footer from '@/app/ui/footer'


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-32 py-8">
                    {children}

                    <Footer />
                </main>

            </body>
        </html >
    )
}