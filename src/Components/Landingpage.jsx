import React from 'react'

const Landingpage = () => {
  return (
    <div className='relative w-full h-[150vh]'>
        <div className='picture w-full h-full'>
            <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)" alt="" />
        </div>
        <div className='absolute top-0 text max-w-screen-2xl h-full mx-auto px-5 sm:px-10 text-white'>
            <div className='para mt-72'>
            <p className='text-md'>Global digital design studio partnering with </p>
            <p className='text-md'>brands and businesses that create exceptional </p>
            <p className='text-md'>experiences where people</p>
            <p className='text-md'> live, work, and unwind.</p>
            </div>
            <div className='headings mt-5'>
                <h1 className='text-6xl tracking-tighter leading-none'>Digital</h1>
                <h1 className='text-6xl tracking-tighter leading-none'>Design</h1>
                <h1 className='text-6xl tracking-tighter leading-none'>Experience</h1>
            </div>
            <div className='para2 mt-20 text-white'>
                <p> 
                We help experience-driven companies thrive by making their audience
            feel the refined intricacies of their brand and product in the
            digital space. Unforgettable journeys start with a click.
                </p>
               <a className='border-b-[.3px] border-zinc-100 pb-1 mt-10 inline-block' href="#">The Studio</a>
            </div>
        </div>
    </div>
  )
}

export default Landingpage