import Image from 'next/image'
import React from 'react'

const Sponsor = () => {
    return (
        <section
            id="create-a-store-banner"
            aria-labelledby="create-a-store-banner-heading"
            className="grid place-items-center rounded-lg border bg-card px-6 py-8 lg:py-16 text-center shadow-sm my-10 lg:my-20 mx-4"
        >
            <h2 className="text-4xl font-extrabold">
                Tech Stack Used
            </h2>
            <div>
                <div className="w-full ">

                    <div className="pt-8 rounded-xl bg-white">

                        <div className="flex justify-center flex-wrap lg:flex-nowrap items-center gap-10 w-full">
                            <div className="w-1/3 sm:w-1/6 flex flex-col group gap-2 justify-center xl:pb-10 pb-16 items-center inset-0 transform  hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl mt-auto">
                                <Image
                                    src='/images/nextjs.png'
                                    alt='image'
                                    height={80}
                                    width={80}
                                    className='focus:outline-none'
                                />
                                {/* make a text appear on hover */}
                                <p
                                    className='text-white text-2xl font-bold group-hover:text-black  transition duration-300'
                                >
                                    Next JS
                                </p>
                            </div>
                            <div className="w-1/3 sm:w-1/6 flex flex-col group gap-2 justify-center xl:pb-10 pb-16 items-center inset-0 transform  hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl mt-auto">
                                <Image
                                    src='/images/typescript.png'
                                    alt='image'
                                    height={80}
                                    width={80}
                                    className='focus:outline-none'
                                />
                                <p
                                    className='text-white text-2xl font-bold group-hover:text-black  transition duration-300'
                                >
                                    Typescript
                                </p>
                            </div>
                            <div className="w-1/3 sm:w-1/6 flex flex-col group gap-2 justify-center xl:pb-10 pb-16 items-center inset-0 transform  hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl mt-auto">
                                <Image
                                    src='/images/tailwind.png'
                                    alt='image'
                                    height={100}
                                    width={100}
                                    className='focus:outline-none'
                                />
                                <p
                                    className='text-white text-2xl font-bold group-hover:text-black  transition duration-300'
                                >
                                    Tailwind
                                </p>
                            </div>
                            <div className="w-1/3 sm:w-1/6 flex flex-col group gap-2 justify-center xl:pb-10 pb-16 items-center inset-0 transform  hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl mt-auto">
                                <Image
                                    src='/images/shadcn.png'
                                    alt='image'
                                    height={80}
                                    width={80}
                                    className='focus:outline-none'
                                />
                                <p
                                    className='text-white text-2xl font-bold group-hover:text-black  transition duration-300'
                                >
                                    Shadcn/ui
                                </p>
                            </div>
                            <div className="w-1/3 sm:w-1/6 flex flex-col group gap-2 justify-center xl:pb-10 pb-16 items-center inset-0 transform  hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl mt-auto">
                                <Image
                                    src='/images/zustand.png'
                                    alt='image'
                                    height={200}
                                    width={200}
                                    className='focus:outline-none'
                                />
                                <p
                                    className='text-white text-2xl font-bold group-hover:text-black  transition duration-300'
                                >
                                    Zustand
                                </p>
                            </div>
                            <div className="w-1/3 sm:w-1/6 flex flex-col group gap-2 justify-center xl:pb-10 pb-16 items-center inset-0 transform  hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl mt-auto">
                                <Image
                                    src='/images/stripe.png'
                                    alt='image'
                                    height={200}
                                    width={200}
                                    className='focus:outline-none'
                                />
                                <p
                                    className='text-white text-2xl font-bold group-hover:text-black  transition duration-300'
                                >
                                    Stripe
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Sponsor