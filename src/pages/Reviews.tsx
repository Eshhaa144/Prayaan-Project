import React, { useState } from 'react';
import { Star, ThumbsUp, Filter, Search, MapPin, Calendar } from 'lucide-react';

const Reviews = () => {
  const [selectedRating, setSelectedRating] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai',
      destination: 'Maldives Honeymoon Package',
      rating: 5,
      date: '2024-01-15',
      comment: 'Prayaan made our honeymoon absolutely magical! The overwater villa was stunning, and every detail was perfectly planned. The staff was incredibly helpful throughout our journey. We felt like royalty from start to finish. The sunset dinner cruise was the highlight of our trip. Highly recommend for couples!',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      helpful: 24,
      verified: true,
      photos: ['https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=300']
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Delhi',
      destination: 'Bali Family Adventure',
      rating: 5,
      date: '2024-01-10',
      comment: 'Fantastic family trip to Bali! The kids loved the cultural shows and temple visits. Our guide was knowledgeable and patient with the children. The hotel had amazing facilities for families. The rice terrace tour was breathtaking. Great value for money and excellent service throughout.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      helpful: 18,
      verified: true,
      photos: ['https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=300']
    },
    {
      id: 3,
      name: 'Anita Desai',
      location: 'Bangalore',
      destination: 'Solo Greece Explorer',
      rating: 5,
      date: '2024-01-05',
      comment: 'As a solo female traveler, I was initially nervous, but Prayaan made me feel completely safe and supported. The Santorini sunset was unforgettable, and the local guide shared amazing stories about Greek mythology. The accommodations were perfect for solo travelers. Will definitely book again!',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150',
      helpful: 31,
      verified: true,
      photos: ['https://images.pexels.com/photos/161815/santorini-travel-holiday-vacation-161815.jpeg?auto=compress&cs=tinysrgb&w=300']
    },
    {
      id: 4,
      name: 'Vikram Singh',
      location: 'Jaipur',
      destination: 'Dubai Luxury Experience',
      rating: 4,
      date: '2023-12-28',
      comment: 'Dubai trip was well organized with great hotel and activities. The desert safari was thrilling and the Burj Khalifa visit was spectacular. Only minor issue was the delayed pickup for one of the tours, but the team quickly resolved it. Overall, a memorable experience with professional service.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      helpful: 15,
      verified: true,
      photos: ['https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=300']
    },
    {
      id: 5,
      name: 'Meera Patel',
      location: 'Ahmedabad',
      destination: 'Paris Romance Package',
      rating: 5,
      date: '2023-12-20',
      comment: 'Paris was everything we dreamed of and more! The Seine river cruise at sunset was romantic, and the Eiffel Tower dinner was unforgettable. Our guide spoke excellent Hindi and made us feel at home. The Louvre tour was well-paced and informative. Merci Prayaan for the perfect anniversary trip!',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      helpful: 27,
      verified: true,
      photos: ['https://images.pexels.com/photos/161853/eiffel-tower-paris-france-tower-161853.jpeg?auto=compress&cs=tinysrgb&w=300']
    },
    {
      id: 6,
      name: 'Arjun Reddy',
      location: 'Hyderabad',
      destination: 'Tokyo Cultural Journey',
      rating: 4,
      date: '2023-12-15',
      comment: 'Tokyo was an incredible cultural experience! The cherry blossom season was perfect timing. The sushi-making class was fun and educational. The traditional ryokan stay was authentic and peaceful. The only downside was the language barrier at some locations, but our guide was always there to help.',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
      helpful: 12,
      verified: true,
      photos: ['https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=300']
    },
    {
      id: 7,
      name: 'Kavya Nair',
      location: 'Kochi',
      destination: 'New York City Break',
      rating: 5,
      date: '2023-12-10',
      comment: 'NYC was absolutely amazing! Broadway shows were world-class, and the Statue of Liberty tour was moving. Central Park in autumn was beautiful. The hotel location was perfect for exploring Manhattan. Times Square at night was electrifying. Prayaan handled all the logistics perfectly!',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150',
      helpful: 22,
      verified: true,
      photos: ['https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=300']
    },
    {
      id: 8,
      name: 'Rohit Gupta',
      location: 'Pune',
      destination: 'Cape Town Adventure',
      rating: 4,
      date: '2023-12-05',
      comment: 'Cape Town exceeded expectations! Table Mountain cable car ride was breathtaking. The wine tour in Stellenbosch was delightful with excellent tastings. Penguin colony visit was adorable. The safari day trip was well-organized. Weather was perfect for all outdoor activities. Great destination choice!',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150',
      helpful: 19,
      verified: true,
      photos: ['https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=300']
    }
  ];

  const ratingFilters = [
    { id: 'all', name: 'All Reviews', count: reviews.length },
    { id: '5', name: '5 Stars', count: reviews.filter(r => r.rating === 5).length },
    { id: '4', name: '4 Stars', count: reviews.filter(r => r.rating === 4).length },
    { id: '3', name: '3 Stars', count: reviews.filter(r => r.rating === 3).length },
    { id: '2', name: '2 Stars', count: reviews.filter(r => r.rating === 2).length },
    { id: '1', name: '1 Star', count: reviews.filter(r => r.rating === 1).length }
  ];

  const filteredReviews = reviews.filter(review => {
    const matchesRating = selectedRating === 'all' || review.rating.toString() === selectedRating;
    const matchesSearch = review.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         review.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.comment.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRating && matchesSearch;
  });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(r => r.rating === rating).length,
    percentage: (reviews.filter(r => r.rating === rating).length / totalReviews) * 100
  }));

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-700 via-teal-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Customer Reviews
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Read authentic experiences from travelers who trusted us with their dream vacations
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search reviews..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl outline-none text-gray-900 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Rating Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Overall Rating */}
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-700 mb-2">{averageRating.toFixed(1)}</div>
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`${i < Math.floor(averageRating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                    size={24} 
                  />
                ))}
              </div>
              <div className="text-gray-600">Based on {totalReviews} reviews</div>
            </div>

            {/* Rating Distribution */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rating Distribution</h3>
              {ratingDistribution.map((item) => (
                <div key={item.rating} className="flex items-center mb-3">
                  <div className="flex items-center w-20">
                    <span className="text-sm text-gray-600 mr-2">{item.rating}</span>
                    <Star className="text-yellow-500 fill-current" size={16} />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-700 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 w-12">{item.count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-600" size={20} />
              <span className="text-gray-900 font-semibold">Filter by Rating:</span>
            </div>
            <span className="text-gray-600">{filteredReviews.length} reviews found</span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {ratingFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedRating(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedRating === filter.id
                    ? 'bg-blue-700 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                }`}
              >
                {filter.name} ({filter.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {filteredReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-8">
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={review.image} 
                        alt={review.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-xl font-semibold text-gray-900">{review.name}</h3>
                          {review.verified && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                              Verified
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <div className="flex items-center space-x-1">
                            <MapPin size={14} />
                            <span>{review.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{new Date(review.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                            size={20} 
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-600">{review.destination}</div>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                  </div>

                  {/* Review Photos */}
                  {review.photos && review.photos.length > 0 && (
                    <div className="mb-6">
                      <div className="flex space-x-4 overflow-x-auto">
                        {review.photos.map((photo, index) => (
                          <img 
                            key={index}
                            src={photo} 
                            alt={`Review photo ${index + 1}`}
                            className="w-32 h-24 object-cover rounded-lg flex-shrink-0"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Review Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-700 transition-colors">
                      <ThumbsUp size={18} />
                      <span className="text-sm">Helpful ({review.helpful})</span>
                    </button>
                    <div className="text-sm text-gray-500">
                      Reviewed on {new Date(review.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredReviews.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Star size={64} className="mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No reviews found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-700 via-teal-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Your Own Story?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied travelers and start planning your dream vacation today
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
            Start Planning Your Trip
          </button>
        </div>
      </section>
    </div>
  );
};

export default Reviews;