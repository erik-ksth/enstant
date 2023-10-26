import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

function Testimonials() {
  let testimonials = [
    {
      testimonial:
        "I'm a huge fan of this app, I've found it to be incredibly intuitive overall. Would definitely recommend this if you're looking for an app to make planning that bit easier.",
      author: "John Doe",
      authorImg: "https://source.unsplash.com/v2aKnjMbP_k/500x500",
      authorMetadata: "Cisco",
    },
    {
      testimonial:
        "This app has been pivotal for helping our team collaborate on tasks and new plans, I’d definitely recommend this if you’d like an intuitive planner app.",
      author: "Emma Stone",
      authorMetadata: "IBM",
      authorImg: "https://source.unsplash.com/rDEOVtE7vOs/500x500",
    },
    {
      testimonial:
        "I'm a huge fan of this app, I've found it to be incredibly intuitive overall. Would definitely recommend this if you're looking for an app to make planning that bit easier.",
      author: "Ben Parker",
      authorImg: "https://source.unsplash.com/v2aKnjMbP_k/500x500",
      authorMetadata: "INTEL",
    },
    {
      testimonial:
        "This app has been pivotal for helping our team collaborate on tasks and new plans, I’d definitely recommend this if you’d like an intuitive planner app.",
      author: "Mary Janes",
      authorMetadata: "3com",
      authorImg: "https://source.unsplash.com/rDEOVtE7vOs/500x500",
    },
    {
      testimonial:
        "I absolutely love the features provided, and that I can create notes to each task also. It really helped streamline my workflow, I would definitely recommend it!",
      author: "Christine Stark",
      authorImg: "https://source.unsplash.com/pUhxoSapPFA/500x500",
      authorMetadata: "Stanford",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 24 });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <section>
        <div class="max-w-screen-2xl py-24 w-4/5 mx-auto">
          <h2 className="pb-16 font-bold text-5xl text-gray-800 text-center">
            What Clients <span>Say</span>?
          </h2>

          <div className="embla overflow-hidden flex" ref={emblaRef}>
            <div className="embla__container flex flex-row ">
              {testimonials.map((testimonialMetadata, index) => (
                <div
                  className="embla__slide flex-[0_0_33%] md:flex-[0_0_32%] mr-4 min-w-0
                        bg-white rounded-lg"
                >
                  <div
                    class="w-full flex flex-col h-full px-9 py-6 
                  rounded-2xl justify-between"
                  >
                    <p class="pt-2 text-slate-600 leading-7">
                      {testimonialMetadata.testimonial}
                    </p>
                    <div class="flex flex-row pt-4 mt-2 items-center place-content-center ">
                      <div class="flex flex-col ml-4 items-center">
                        <p class="font-semibold text-primaryBlue uppercase ">
                          {testimonialMetadata.author}
                        </p>
                        <p class="text-gray-600">
                          {testimonialMetadata.authorMetadata}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div class="flex justify-center mt-8">
            <div>
              <button
                type="button"
                class="mr-4 text-primaryBlue border border-primaryBlue hover:bg-primaryBlue hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center 
             "
                onClick={scrollPrev}
              >
                <ChevronLeft />
                <span class="sr-only">Left arrow</span>
              </button>

              <button
                type="button"
                class="text-white bg-primaryBlue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center 
              inline-flex items-center"
                onClick={scrollNext}
              >
                <ChevronRight />
                <span class="sr-only">Right arrow</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
