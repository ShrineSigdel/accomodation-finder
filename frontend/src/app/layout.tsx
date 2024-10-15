import '@/app/globals.css'
import Header from '@/app/ui/header'
import Footer from '@/app/ui/footer'
import { Lato } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'

const lato = Lato({
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900']
})


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={lato.style.fontFamily}>
                <Header />
                <main className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-32 py-8">
                    {children}
                    <Toaster/>
                    <Footer />
                </main>

            </body>
        </html >
    )
}