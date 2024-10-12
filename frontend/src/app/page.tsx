    import Header from "./ui/header"
    import HeroCarousel from "./ui/hero-carousel"
    import PriceSliderSearch from "./ui/price-slider-search"
    const page = () => {
        return (

            <div>
                <Header />
                <main className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-32 py-8">

                <PriceSliderSearch />
                    <section className="py-4 md:py-8 flex justify-center">
                        <HeroCarousel />
                    </section>

                   
                </main>

            </div>

        )
    }

    export default page