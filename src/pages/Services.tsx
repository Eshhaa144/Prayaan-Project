import React from 'react';
import { 
  Plane, 
  Hotel, 
  Camera, 
  Shield, 
  Car, 
  Compass, 
  CreditCard, 
  Headphones,
  CheckCircle,
  Star,
  Users,
  Clock
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Plane,
      title: 'Flight Booking',
      description: 'Best deals on domestic and international flights with 24/7 support',
      features: ['Best Price Guarantee', '24/7 Customer Support', 'Flexible Booking Options', 'Multiple Airlines'],
      price: 'From ₹5,000',
      popular: true
    },
    {
      icon: Hotel,
      title: 'Hotel Reservations',
      description: 'Luxury to budget accommodations worldwide with instant confirmation',
      features: ['Instant Confirmation', 'Free Cancellation', '50,000+ Properties', 'Best Rate Guarantee'],
      price: 'From ₹2,500/night',
      popular: false
    },
    {
      icon: Camera,
      title: 'Guided Tours',
      description: 'Expert local guides and curated experiences for unforgettable memories',
      features: ['Local Expert Guides', 'Small Group Tours', 'Skip-the-Line Access', 'Cultural Immersion'],
      price: 'From ₹3,000/day',
      popular: true
    },
    {
      icon: Shield,
      title: 'Travel Insurance',
      description: 'Comprehensive coverage for worry-free travels and peace of mind',
      features: ['Medical Coverage', 'Trip Cancellation', 'Lost Baggage Protection', '24/7 Emergency Assistance'],
      price: 'From ₹500',
      popular: false
    }
  ];

  const additionalServices = [
    {
      icon: Car,
      title: 'Car Rentals',
      description: 'Rent cars worldwide with competitive rates and flexible terms'
    },
    {
      icon: Compass,
      title: 'Custom Itineraries',
      description: 'Personalized travel plans tailored to your preferences and budget'
    },
    {
      icon: CreditCard,
      title: 'Travel Finance',
      description: 'Easy EMI options and travel loans to make your dreams affordable'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your travel needs and emergencies'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      service: 'Complete Europe Package',
      rating: 5,
      comment: 'Prayaan made our European honeymoon absolutely perfect. Every detail was handled professionally.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Rajesh Kumar',
      service: 'Family Bali Tour',
      rating: 5,
      comment: 'Excellent service from booking to return. The guided tours were informative and fun for kids.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Anita Desai',
      service: 'Solo Greece Adventure',
      rating: 5,
      comment: 'As a solo female traveler, I felt completely safe and supported throughout my journey.',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Happy Travelers' },
    { number: '100+', label: 'Destinations' },
    { number: '15+', label: 'Years Experience' },
    { number: '4.9', label: 'Average Rating' }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-700 via-teal-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive travel solutions designed to make your journey seamless, memorable, and worry-free
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for the perfect trip, all in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="relative group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {service.popular && (
                  <div className="absolute -top-4 left-8 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-r from-blue-100 to-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-blue-700" size={28} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="text-green-500" size={16} />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-700">{service.price}</span>
                      <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extra services to enhance your travel experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1">
                <div className="bg-gradient-to-r from-blue-100 to-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-blue-700" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to plan your perfect trip
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Choose Destination', description: 'Browse our curated destinations and select your perfect getaway' },
              { step: '02', title: 'Customize Package', description: 'Tailor your trip with preferred hotels, activities, and experiences' },
              { step: '03', title: 'Book & Pay', description: 'Secure booking with flexible payment options and instant confirmation' },
              { step: '04', title: 'Travel & Enjoy', description: 'Embark on your journey with 24/7 support throughout your trip' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-700 to-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from travelers who trusted us with their journeys
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.service}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={20} />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-700 via-teal-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Let our travel experts help you plan the perfect trip tailored to your dreams and budget
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
              View Packages
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;