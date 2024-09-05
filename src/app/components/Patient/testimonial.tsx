'use client'
import { useEffect } from 'react'
import KeenSlider from 'keen-slider'
import 'keen-slider/keen-slider.min.css' // Importe os estilos do KeenSlider
import Image from 'next/image'

type ReviewsProps = {
  id: number
  name: string
  image: string
  text: string
  stars: number
}

export default function Testimonial() {
  const reviews: ReviewsProps[] = [
    {
      id: 1,
      name: 'João Pedro',
      image: 'https://i.pravatar.cc/300?img=1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      stars: 5,
    },
    {
      id: 2,
      name: 'Maria Clara',
      image: 'https://i.pravatar.cc/300?img=2',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      stars: 4,
    },
    {
      id: 3,
      name: 'Ana Clara',
      image: 'https://i.pravatar.cc/300?img=3',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.',
      stars: 3,
    },
  ]

  useEffect(() => {
    const slider = new KeenSlider('#keen-slider', {
      loop: true,
      slides: {
        origin: 'center',
        perView: 1, // Ajuste o número de slides visíveis por vez
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 640px)': {
          slides: {
            origin: 'center',
            perView: 2,
            spacing: 16,
          },
        },
        '(min-width: 768px)': {
          slides: {
            origin: 'center',
            perView: 2.5,
            spacing: 16,
          },
        },
        '(min-width: 1024px)': {
          slides: {
            origin: 'center',
            perView: 3,
            spacing: 16,
          },
        },
      },
    })

    const keenSliderPrevious = document.getElementById('keen-slider-previous')
    const keenSliderNext = document.getElementById('keen-slider-next')

    keenSliderPrevious?.addEventListener('click', () => slider.prev())
    keenSliderNext?.addEventListener('click', () => slider.next())

    return () => {
      // Limpeza ao desmontar o componente
      keenSliderPrevious?.removeEventListener('click', () => slider.prev())
      keenSliderNext?.removeEventListener('click', () => slider.next())
    }
  }, [])

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              id="keen-slider-previous"
              className="rounded-full border border-blue-600 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              id="keen-slider-next"
              className="rounded-full border border-blue-600 p-3 text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              <svg
                className="w-5 h-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
          <div id="keen-slider" className="keen-slider">
            {reviews.map((review) => (
              <div className="keen-slider__slide" key={review.id}>
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < review.stars ? 'fill-current' : 'text-gray-300'}`}
                          fill={i < review.stars ? 'currentColor' : 'none'}
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <div className="mt-4 ">
                      <Image
                        src={review.image}
                        alt=""
                        className="h-12 w-12 rounded-full"
                        width={48}
                        height={48}
                      />
                      <p className="text-2xl font-bold text-blue-600 sm:text-3xl">
                        {review.name}
                      </p>

                      <p className="mt-4 leading-relaxed text-gray-700">
                        {review.text}
                      </p>
                    </div>
                  </div>

                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; {review.name}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
