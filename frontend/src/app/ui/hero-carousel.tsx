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

// Define the structure for carousel items
interface CarouselItemData {
    imageSrc: string
    text: string
}

// Sample carousel items
const carouselItems: CarouselItemData[] = [
    {
        imageSrc: "/images/houseimg1 (1).png",
        text: "Discover the rent of your choice",
    },
    {
        imageSrc: "/images/houseimg2 (1).jpg",
        text: "Choose from a wide range of options",
    },
    {
        imageSrc: "/images/houseimg3 (1).jpg",
        text: "From your favorite websites",
    },
    {
        imageSrc: "/images/houseimg4 (1).png",
        text: "Track their prices",
    },
    {
        imageSrc: "/images/houseimg5 (1).png",
        text: "Relax in luxurious comfort",
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
                                        width={1170}
                                        height={400}
                                        className="w-full h-[300px] sm:h-[400px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-6">
                                        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
                                            {item.text}
                                        </h2>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

        </Carousel>
    )
}
