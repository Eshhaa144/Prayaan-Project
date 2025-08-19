import React, { useState } from 'react';
import { Star, MapPin, Calendar, Users, Filter, Search } from 'lucide-react';

const Destinations = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const destinations = [
    {
      id: 1,
      name: 'Santorini, Greece',
      category: 'europe',
      image: 'https://images.pexels.com/photos/161815/santorini-travel-holiday-vacation-161815.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹1,25,000',
      originalPrice: '₹1,50,000',
      rating: 4.9,
      reviews: 245,
      days: 7,
      description: 'Experience the magic of white-washed buildings and stunning sunsets',
      highlights: ['Sunset at Oia', 'Wine Tasting', 'Volcanic Beaches', 'Traditional Villages']
    },
    {
      id: 2,
      name: 'Bali, Indonesia',
      category: 'asia',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹85,000',
      originalPrice: '₹1,00,000',
      rating: 4.8,
      reviews: 189,
      days: 6,
      description: 'Tropical paradise with ancient temples and pristine beaches',
      highlights: ['Temple Tours', 'Rice Terraces', 'Beach Relaxation', 'Cultural Shows']
    },
    {
      id: 3,
      name: 'Maldives',
      category: 'asia',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹2,50,000',
      originalPrice: '₹3,00,000',
      rating: 4.9,
      reviews: 312,
      days: 5,
      description: 'Luxury overwater villas in crystal clear lagoons',
      highlights: ['Overwater Villas', 'Snorkeling', 'Spa Treatments', 'Private Dining']
    },
    {
      id: 4,
      name: 'Paris, France',
      category: 'europe',
      image: 'https://images.pexels.com/photos/161853/eiffel-tower-paris-france-tower-161853.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹1,75,000',
      originalPrice: '₹2,00,000',
      rating: 4.7,
      reviews: 428,
      days: 8,
      description: 'The city of love with iconic landmarks and world-class cuisine',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine River Cruise', 'French Cuisine']
    },
    {
      id: 5,
      name: 'Dubai, UAE',
      category: 'middle-east',
      image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹95,000',
      originalPrice: '₹1,20,000',
      rating: 4.6,
      reviews: 156,
      days: 5,
      description: 'Modern metropolis with luxury shopping and desert adventures',
      highlights: ['Burj Khalifa', 'Desert Safari', 'Gold Souk', 'Luxury Shopping']
    },
    {
      id: 6,
      name: 'Tokyo, Japan',
      category: 'asia',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹1,45,000',
      originalPrice: '₹1,70,000',
      rating: 4.8,
      reviews: 267,
      days: 7,
      description: 'Blend of traditional culture and cutting-edge technology',
      highlights: ['Cherry Blossoms', 'Sushi Experience', 'Temple Visits', 'Modern Districts']
    },
    {
      id: 7,
      name: 'New York, USA',
      category: 'america',
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹2,25,000',
      originalPrice: '₹2,75,000',
      rating: 4.5,
      reviews: 389,
      days: 6,
      description: 'The city that never sleeps with iconic skylines and Broadway shows',
      highlights: ['Statue of Liberty', 'Broadway Shows', 'Central Park', 'Times Square']
    },
    {
      id: 8,
      name: 'Cape Town, South Africa',
      category: 'africa',
      image: 'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹1,35,000',
      originalPrice: '₹1,60,000',
      rating: 4.7,
      reviews: 198,
      days: 8,
      description: 'Stunning landscapes with wine regions and wildlife safaris',
      highlights: ['Table Mountain', 'Wine Tours', 'Penguin Colony', 'Safari Adventures']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Destinations', count: destinations.length },
    { id: 'asia', name: 'Asia', count: destinations.filter(d => d.category === 'asia').length },
    { id: 'europe', name: 'Europe', count: destinations.filter(d => d.category === 'europe').length },
    { id: 'america', name: 'America', count: destinations.filter(d => d.category === 'america').length },
    { id: 'africa', name: 'Africa', count: destinations.filter(d => d.category === 'africa').length },
    { id: 'middle-east', name: 'Middle East', count: destinations.filter(d => d.category === 'middle-east').length }
  ];

  const filteredDestinations = destinations.filter(destination => {
    const matchesCategory = selectedCategory === 'all' || destination.category === selectedCategory;
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-700 via-teal-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Explore Destinations
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Discover amazing places around the world and create memories that will last a lifetime
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl outline-none text-gray-900 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-600" size={20} />
              <span className="text-gray-900 font-semibold">Filter by Region:</span>
            </div>
            <span className="text-gray-600">{filteredDestinations.length} destinations found</span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDestinations.map((destination) => (
              <div key={destination.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <Star className="text-yellow-500 fill-current" size={16} />
                      <span className="text-sm font-semibold text-gray-900">{destination.rating}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {destination.days} Days
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="text-gray-400" size={16} />
                    <h3 className="text-xl font-semibold text-gray-900">{destination.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{destination.description}</p>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="text-yellow-500 fill-current" size={16} />
                      <span className="text-sm text-gray-600">{destination.rating} ({destination.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.slice(0, 2).map((highlight, index) => (
                        <span key={index} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                      {destination.highlights.length > 2 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          +{destination.highlights.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-blue-700">{destination.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{destination.originalPrice}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02]">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredDestinations.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <MapPin size={64} className="mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No destinations found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Destinations;