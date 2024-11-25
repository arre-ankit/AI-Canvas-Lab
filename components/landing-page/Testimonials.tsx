import { Star } from 'lucide-react'

const testimonials = [
  {
    rating: 5,
    text: "I've been using this for a while now and it's been a game changer. The AI is super fast and the results are always accurate. I've recommended it to all my friends and they love it too!",
    author: "Mounssif B."
  },
  {
    rating: 5,
    text: "Testing OpenSource models is really easy and I can try lot ideas without any hassle.",
    author: "Uduakobong U."
  },
  {
    rating: 5,
    text: "It's a gamechanger,workflows works like magic.",
    author: "Julien B."
  }
]

export function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] bg-clip-text text-transparent">
          What Our Users Are Saying
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-[#292b32] dark:bg-[#05070c] border border-gray-200 dark:border-white/10"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-400 mb-4">&quot;{testimonial.text}&quot;</p>
              <p className="text-white font-medium">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}