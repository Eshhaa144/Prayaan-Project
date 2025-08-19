import React from 'react';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  Plane, 
  Hotel, 
  Camera, 
  Shield,
  ArrowRight
} from 'lucide-react';

const Home = () => {
  const destinations = [
    {
      id: 1,
      name: 'Santorini, Greece',
      image: 'https://images.pexels.com/photos/161815/santorini-travel-holiday-vacation-161815.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹1,25,000',
      rating: 4.9,
      days: 7
    },
    {
      id: 2,
      name: 'Bali, Indonesia',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹85,000',
      rating: 4.8,
      days: 6
    },
    {
      id: 3,
      name: 'Maldives',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹2,50,000',
      rating: 4.9,
      days: 5
    },
    {
      id: 4,
      name: 'Paris, France',
      image: 'https://images.pexels.com/photos/161853/eiffel-tower-paris-france-tower-161853.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '₹1,75,000',
      rating: 4.7,
      days: 8
    }
  ];

  const services = [
    {
      icon: Plane,
      title: 'Flight Booking',
      description: 'Best deals on domestic and international flights with 24/7 support'
    },
    {
      icon: Hotel,
      title: 'Hotel Reservations',
      description: 'Luxury to budget accommodations worldwide with instant confirmation'
    },
    {
      icon: Camera,
      title: 'Guided Tours',
      description: 'Expert local guides and curated experiences for unforgettable memories'
    },
    {
      icon: Shield,
      title: 'Travel Insurance',
      description: 'Comprehensive coverage for worry-free travels and peace of mind'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Your Journey
              <span className="bg-gradient-to-r from-blue-700 via-teal-600 to-orange-500 bg-clip-text text-transparent block">
                Begins Here
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Discover extraordinary destinations, create unforgettable memories, and embark on the adventure of a lifetime with Prayaan - your trusted travel companion.
            </p>

            {/* Search Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                  <MapPin className="text-blue-700" size={20} />
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                    <input type="text" placeholder="Where to?" className="w-full bg-transparent outline-none text-gray-900" />
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                  <Calendar className="text-blue-700" size={20} />
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
                    <input type="date" className="w-full bg-transparent outline-none text-gray-900" />
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                  <Calendar className="text-blue-700" size={20} />
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Return</label>
                    <input type="date" className="w-full bg-transparent outline-none text-gray-900" />
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                  <Users className="text-blue-700" size={20} />
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Travelers</label>
                    <select className="w-full bg-transparent outline-none text-gray-900">
                      <option>1 Traveler</option>
                      <option>2 Travelers</option>
                      <option>3 Travelers</option>
                      <option>4+ Travelers</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-700 to-teal-600 hover:from-blue-800 hover:to-teal-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-[1.02]">
                <Search size={20} />
                <span>Search Adventures</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our handpicked collection of breathtaking destinations that promise unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination) => (
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
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{destination.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-700">{destination.price}</span>
                    <span className="text-gray-600 text-sm">{destination.days} days</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group">
                    <span>Book Now</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Prayaan?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive travel solutions to make your journey seamless and memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-blue-100 to-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-blue-700" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gradient-to-r from-blue-700 via-teal-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12">
            Subscribe to get exclusive deals, travel tips, and destination inspiration delivered to your inbox
          </p>
          
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-l-xl outline-none text-gray-900"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-r-xl transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;