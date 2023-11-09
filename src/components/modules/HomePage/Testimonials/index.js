import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import testimonialData from './testimonialData';

function Testimonials() {

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
          <h2 className="pb-16 font-bold text-gray-800 text-center">
            What Clients <span>Say</span>?
          </h2>

          <div className="embla overflow-hidden flex" ref={emblaRef}>
            <div className="embla__container flex flex-row ">
              {testimonialData.map((testimonialMetadata, index) => (
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
