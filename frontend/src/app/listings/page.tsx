'use client'
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Listing {
    id: number;
    title: string;
    description: string;
    price: number;
    img_src: string;
    link: string;
}

const ListingsPage: React.FC = () => {
    const searchParams = useSearchParams();
    const priceLimit = searchParams.get('filter');
    const [listings, setListings] = useState<Listing[]>([]);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        // Fetch listings from backend
        const fetchListings = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/listings?filter=${priceLimit}`);
                const data = await response.json();
                const filteredListings = data.filter((listing: Listing) => {
                    return priceLimit ? listing.price <= parseInt(priceLimit) : true;
                });
                setListings(filteredListings);
            } catch (error) {
                console.error("Error fetching listings:", error);
            } finally {
                setLoading(false); // Set loading to false after data is fetched
            }
        };

        fetchListings();
    }, []);

    console.log(`pricelimit: ${priceLimit}`);
    if (loading) {
        return (<div className="text-center text-blue-600 text-large">
            Loading...
        </div>)
    }

    return (
        <div className="min-h-screen bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {listings.map((listing) => (
                        <Card key={listing.id} className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                            <CardHeader className="p-0">
                                <Image
                                    src={listing.img_src}
                                    alt={listing.title}
                                    width={300}
                                    height={200}
                                    className="rounded-t-lg"
                                />
                            </CardHeader>
                            <CardContent className="p-4">
                                <CardTitle className="text-xl font-semibold text-black mb-2">{listing.title}</CardTitle>
                                <p className="text-blue-600 mb-4">NPR {listing.price.toLocaleString()} / month</p>
                                <p className="text-gray-700 line-clamp-3">{listing.description}</p>
                            </CardContent>
                            <CardFooter className="bg-gray-50 rounded-b-lg p-4">
                                <Link href={listing.link}>
                                    <Button className="w-full bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">View Details</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {listings.length === 0 && (
                    <div className="text-center text-slate-500 font-semibold  ">
                        <p className='mt-8' >No listings found. Please try a different search term.</p>
                        <Link href='/' >
                           <div  className = "text-blue-500 text-lg"> Return Back to homepage
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
};

export default ListingsPage;
