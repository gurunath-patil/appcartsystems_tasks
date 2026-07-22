import React from 'react'
import heroBanner from '../assets/svg_1.svg'
const Hero = () => {
	return (
		<section
			id='hero'
			className='w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
			{/* Left Column (Content) */}
			<div className='lg:col-span-5 space-y-6'>
				<h1 className='text-4xl sm:text-5xl font-black text-gray-900 leading-tight'>
					First professional <br className='hidden sm:inline' />
					Home business platform
				</h1>

				<p className='text-gray-500 text-base sm:text-lg max-w-md leading-relaxed'>
					Dukkan Online will help you grow and reach your customers easily.
				</p>

				{/* App Download Buttons */}
				<div className='flex flex-wrap gap-4 pt-4'>
					{/* App Store Button */}
					<a
						href='#'
						className='flex items-center space-x-3 border-2 border-gray-400 rounded-xl px-4 py-2.5 hover:border-black transition-colors'>
						<div className='text-left'>
							<div className='text-[10px] uppercase text-gray-600 font-medium leading-none'>
								Download on the
							</div>
							<div className='text-sm font-bold text-gray-900 leading-tight'>App Store</div>
						</div>
					</a>

					{/* Google Play Button */}
					<a
						href='#'
						className='flex items-center space-x-3 border-2 border-gray-400 rounded-xl px-4 py-2.5 hover:border-black transition-colors'>
							<div className='text-left'>
								<div className='text-[10px] uppercase text-gray-600 font-medium leading-none'>
									ANDROID APP ON
								</div>
								<div className='text-sm font-bold text-gray-900 leading-tight'>Google Play</div>
							</div>
					</a>
				</div>
			</div>

			{/* Right Column (Illustration Placeholder Component) */}
			<div className='lg:col-span-7 flex justify-center items-end relative'>
				<img
					src={heroBanner}
					alt='App Screenshot'
					className='w-full h-full object-cover rounded-[2rem]'
				/>
			</div>
		</section>
	)
}

export default Hero
