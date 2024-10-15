'use client'
import HeroCarousel from "./ui/hero-carousel"
import HowItWorks from "./ui/how-it-works"
import PriceSliderSearch from "./ui/price-slider-search"

const page = () => {
    return (

        <div>
            <PriceSliderSearch />
            <section className="py-4 md:py-8 flex justify-center">
                <HeroCarousel />
            </section>

            <HowItWorks />

        </div>
    )
}

export default page