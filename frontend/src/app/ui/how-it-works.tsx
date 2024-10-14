import { Search, Filter, Home, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const steps = [
  {
    icon: Search,
    title: 'Search Properties',
    description: 'Browse through our extensive collection of rental listings from all your popular rental websites in one place.'
  },
  {
    icon: Filter,
    title: 'Apply Filters',
    description: 'Refine your search using our advanced filtering options to set your preferred price range to find the perfect match'
  },
  {
    icon: Home,
    title: 'View Details',
    description: 'Explore detailed property information, click on view details to see complete detail of the rent.'
  },
  {
    icon: Calendar,
    title: 'Track & Schedule',
    description: 'Track prices of multiple properties of your choice, and make the final decision '
  }
]

export default function HowItWorks() {
  return (
    <section className="py-16 bg-sky-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white border-sky-200 shadow-lg shadow-sky-100/50 hover:shadow-sky-200/50 transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-md">
                  <step.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-semibold text-center text-sky-800">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sky-700">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}