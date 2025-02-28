import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>No Pain <span className='text-blue-400'>No Gain</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>I fully recognize that I may achieve an absurd level of muscular greatness and willingly accept all consequences of becoming a walking powerhouse—an unstoppable mass of pure strength, struggling to fit into normal spaces, and forever cursed with an insatiable desire for even bigger gains.</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}
