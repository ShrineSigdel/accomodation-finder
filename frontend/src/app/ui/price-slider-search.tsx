"use client"

import * as React from "react"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"

export default function PriceSliderSearch() {
    const [price, setPrice] = React.useState([1000])
    const [isSearching, setIsSearching] = React.useState(false)
    const router = useRouter()

    const formatPrice = (value: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(value)
    }

    const handleSearch = async () => {
        setIsSearching(true)
        // Simulating an API call
        router.push(`/listings?filter=${price[0]}`);
        setIsSearching(false)
        // Here you would typically make an API call or update your app's state
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle className="text-center text-blue-600">Select Your Budget</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <Slider
                        defaultValue={[1000]}
                        max={100000}
                        min={1000}
                        step={1000}
                        onValueChange={setPrice}
                        className="w-full"
                    />
                    <div className="text-center text-2xl font-bold text-blue-600">
                        {formatPrice(price[0])}
                    </div>
                    <Button
                        onClick={handleSearch}
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        disabled={isSearching}
                    >
                        {isSearching ? (
                            "Searching..."
                        ) : (
                            <>
                                <Search className="w-4 h-4 mr-2" />
                                Search at this price
                            </>
                        )}
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}