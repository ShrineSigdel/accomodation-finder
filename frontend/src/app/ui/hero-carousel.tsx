"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

// Define the structure for carousel items
interface CarouselItemData {
    imageSrc: string
    text: string
    buttonText: string
    buttonLink: string
}

// Sample carousel items
const carouselItems: CarouselItemData[] = [
    {
        imageSrc: "/placeholder.svg?height=600&width=1200",
        text: "Discover the beauty of nature",
        buttonText: "Explore Now",
        buttonLink: "/nature",
    },
    {
        imageSrc: "/placeholder.svg?height=600&width=1200",
        text: "Experience urban adventures",
        buttonText: "Plan Your Trip",
        buttonLink: "/urban",
    },
    {
        imageSrc: "/placeholder.svg?height=600&width=1200",
        text: "Relax in luxurious comfort",
        buttonText: "Book Now",
        buttonLink: "/luxury",
    },
]

export default function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = React.useState(0)

    // Autoplay: Move to the next slide every 5 seconds
    React.useEffect(() => {
        const interval = setInterval(() => {
            goToNextSlide()
        }, 3000) // 5000ms = 5 seconds

        return () => clearInterval(interval) // Clear the interval on unmount
    }, [currentIndex])

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
        )
    }

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
        )
    }

    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full max-w-screen-2xl mx-auto"
        >
            <CarouselContent>
                {carouselItems.map((item, index) => (
                    <CarouselItem key={index} className={index === currentIndex ? "block" : "hidden"}>
                        <div className="relative">
                            <Card>
                                <CardContent className="p-0">
                                    <Image
                                        src={item.imageSrc}
                                        alt={`Slide ${index + 1}`}
                                        width={1200}
                                        height={400}
                                        className="w-full h-[300px] sm:h-[400px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-6">
                                        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
                                            {item.text}
                                        </h2>
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="text-white border-white hover:bg-white hover:text-black transition-colors duration-300"
                                        >
                                            {item.buttonText}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="left-4" onClick={goToPreviousSlide} />
            <CarouselNext className="right-4" onClick={goToNextSlide} />
        </Carousel>
    )
}
