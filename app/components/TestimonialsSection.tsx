import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Lost 30 lbs',
      content:
        "En Forme completely changed my life. The trainers are incredibly supportive and the community is amazing. I've never felt stronger!",
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Marathon Runner',
      content:
        'The personalized training program helped me achieve my goal of running a marathon. The nutrition guidance was game-changing.',
      rating: 5,
    },
    {
      name: 'Emma Williams',
      role: 'Busy Professional',
      content:
        'As someone with a hectic schedule, the flexible class times and online support make it easy to stay consistent with my fitness goals.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#1a3a52]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-white mb-4">Success Stories</h2>
          <p className="text-xl text-[#c9a961] max-w-2xl mx-auto">
            Real results from real people
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star key={idx} className="text-[#c9a961] fill-[#c9a961]" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <div className="text-[#1a3a52]">{testimonial.name}</div>
                <div className="text-[#c9a961] text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
