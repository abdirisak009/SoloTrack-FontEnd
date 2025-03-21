// src/SuccessStories.js
import React from 'react';

const successStories = [
  {
    name: 'Sarah',
    achievement: 'Lost 32 pounds in 6 months',
    testimonial:
      '“NutriTracker changed my relationship with food. The meal tracking made me aware of my portions, and the personalized recommendations helped me make better choices. I’ve never felt healthier!”',
    imageUrl: 'src/assets/images/SOMgirl.png', 
  },
  {
    name: 'Mohamed.',
    achievement: 'Lost 45 pounds in 8 months',
    testimonial:
      '“As someone who travels frequently for work, eating healthy was always a challenge. The app’s restaurant suggestions and meal planning features made it so much easier to stay on track, even on the road.”',
    imageUrl: 'src/assets/images/man-image1.jpg', 
  },
];

const SuccessStories = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Success Stories</h2>
        <p className="text-center mb-8">Real people, real results with NutriTracker</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={story.imageUrl}
                  alt={story.name}
                  className="rounded-full w-16 h-16 mr-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{story.name}</h3>
              </div>
              <p className="text-gray-600 mb-2">{story.achievement}</p>
              <p className="text-gray-800">{story.testimonial}</p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
