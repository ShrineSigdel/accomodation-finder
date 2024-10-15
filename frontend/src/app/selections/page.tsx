'use client'
import { useEffect, useState } from 'react';
import { Listing } from '../types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useToast } from '@/hooks/use-toast';

const SelectionsPage = () => {
    const [selections, setSelections] = useState<Listing[]>([]);
    const [loading, setLoading] = useState(true)
    const { toast } = useToast()

    //Handles the removal of a selection by its ID.
    const handleRemoveSelection = async (_id: string) => {
        try {
            const response = await fetch(`http://localhost:5000/api/selections/${_id}`, {
                method: 'DELETE',
            })
            if (response.ok) {
                setSelections(prevListing => prevListing.filter(listing => listing._id !== _id))
                toast({
                    variant: "destructive",
                    title: "Removed from Selections",
                    description: "This listing has been removed from selection"
                })
            }
            else {
                console.error("Failed to remove selection")
            }
        }
        catch (error) {
            console.error("Error removing selection:", error);
        }
    }

    // Fetch selections from the API when the component mounts
    useEffect(() => {
        const fetchSelections = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/selections');
                const data = await res.json();
                setSelections(data)
            } catch (error) {
                console.error('Error fetching selections:', error);
            } finally {
                setLoading(false)
            }
        };
        fetchSelections();
    }, []);




    if (loading) {
        return (<div className="text-center text-blue-600 text-large">
            Loading...
        </div>)
    }
    return (
        <div className="min-h-screen bg-white py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-semibold text-center mb-8 text-blue-500">Your Selections</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        selections.length === 0 ? (<div className='text-center text-lg text-blue-500'>No selections has been found. </div>) : (selections.map((listing) => (
                            <Card
                                key={listing._id}
                                className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
                            >
                                <CardHeader className="p-0">
                                    <Image
                                        src={listing.img_src}
                                        alt={listing.title}
                                        width={300}
                                        height={200}
                                        layout="responsive"
                                        className="rounded-t-lg"
                                    />
                                </CardHeader>
                                <CardContent className="p-4 flex-grow">
                                    <CardTitle className="text-xl font-semibold text-black mb-2">{listing.title}</CardTitle>
                                    <p className="text-blue-600 mb-4">NPR {listing.price.toLocaleString()} / month</p>
                                    <p className="text-gray-700 line-clamp-3">{listing.description}</p>
                                </CardContent>
                                <CardFooter className="bg-gray-50 rounded-b-lg p-4 mt-auto">
                                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-between items-center w-full">
                                        <div className="w-full sm:w-1/2">
                                            <Link href={listing.link} passHref>
                                                <Button className="w-full bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                                                    View Details
                                                </Button>
                                            </Link>
                                        </div>
                                        <div className="w-full sm:w-1/2">
                                            <Button
                                                className="w-full"
                                                variant="destructive"
                                                onClick={() => handleRemoveSelection(listing._id)}
                                            >
                                                Remove
                                            </Button>
                                        </div>
                                    </div>
                                </CardFooter>
                            </Card>
                        )))
                    }
                </div>
            </div>
        </div>
    )
};

export default SelectionsPage;
