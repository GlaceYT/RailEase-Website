import React, { useState } from "react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  companyLogo: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun. The truth is the universe is a constantly changing, moving, some would say “living” thing because you just never know what you are going to see on any given night of stargazing.",
    name: "Leslie Alexander",
    role: "UI Designer",
    companyLogo: "https://cdn.magicui.design/companies/Google.svg",
  },
  {
    id: 2,
    quote:
      "There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun. The truth is the universe is a constantly changing, moving, some would say “living” thing because you just never know what you are going to see on any given night of stargazing.",
    name: "Leslie Alexander",
    role: "UI Designer",
    companyLogo: "https://cdn.magicui.design/companies/Microsoft.svg",
  },
  {
    id: 3,
    quote:
      "There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun. The truth is the universe is a constantly changing, moving, some would say “living” thing because you just never know what you are going to see on any given night of stargazing.",
    name: "Leslie Alexander",
    role: "UI Designer",
    companyLogo: "https://cdn.magicui.design/companies/Amazon.svg",
  },
  {
    id: 4,
    quote:
      "There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun. The truth is the universe is a constantly changing, moving, some would say “living” thing because you just never know what you are going to see on any given night of stargazing.",
    name: "Leslie Alexander",
    role: "UI Designer",
    companyLogo: "https://cdn.magicui.design/companies/Netflix.svg",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonial-highlight" className="py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 pb-6 mx-auto">
          <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
            What our developers are saying
          </h3>
        </div>

        <div className="relative" role="region" aria-roledescription="carousel">
          <div className="max-w-2xl mx-auto relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    role="group"
                    aria-roledescription="slide"
                    className="min-w-full flex-shrink-0 flex justify-center items-center px-4 w-full"
                  >
                    <div className="p-2 pb-5 text-center m-auto max-w-lg">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="text-4xl text-themeDarkGray my-4 mx-auto"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M18.62 18h-5.24l2-4H13V6h8v7.24L18.62 18zm-2-2h.76L19 12.76V8h-4v4h3.62l-2 4zm-8 2H3.38l2-4H3V6h8v7.24L8.62 18zm-2-2h.76L9 12.76V8H5v4h3.62l-2 4z"></path>
                      </svg>

                      <h4 className="text-lg font-semibold max-w-lg mx-auto px-4 md:px-10">
                        {testimonial.quote}
                      </h4>

                      <div className="mt-8">
                        <img
                          alt={`${testimonial.name} company`}
                          loading="lazy"
                          className="mx-auto w-auto h-[40px] grayscale opacity-30"
                          src={testimonial.companyLogo}
                        />
                      </div>

                      <h4 className="text-lg font-semibold my-2">
                        {testimonial.name}
                      </h4>
                      <span className="text-sm text-themeDarkGray">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="text-lg font-bold text-primary bg-white shadow rounded-full px-4 py-2"
              >
                &larr;
              </button>
              <button
                onClick={nextTestimonial}
                className="text-lg font-bold text-primary bg-white shadow rounded-full px-4 py-2"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
