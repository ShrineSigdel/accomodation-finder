import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-white text-blue-600 py-6" id='footer'>
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <p className="text-center">
                        © {new Date().getFullYear()} Kathmandu Rentals. All rights reserved.
                    </p>
                    <p className="text-center font-semibold">
                        Developed by Shrine Sigdel
                    </p>
                    <div className="flex space-x-4">
                        <Link
                            href="https://github.com/ShrineSigdel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-800 transition-colors duration-200"
                        >
                            <Github className="w-6 h-6" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/shrine-sigdel-1a6884268/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-800 transition-colors duration-200"
                        >
                            <Linkedin className="w-6 h-6" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}