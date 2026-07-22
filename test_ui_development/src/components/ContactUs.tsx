import React from 'react'
import svgImg from '../assets/svg3.svg'
const Contact = () => {
	return (
		<section id='contact' className='relative w-full mx-auto overflow-hidden'>
			<div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
				{/* Left Illustration Container */}
				<div className='lg:col-span-7 flex justify-center items-center'>
					<img
						src={svgImg}
						alt='Contact Us Illustration'
						className='h-[25rem] w-full object-cover'
					/>
				</div>

				{/* Right Curved Contact Details Box */}
				<div className='lg:col-span-5 relative flex justify-center lg:justify-end'>
					{/* Light Gray / White Curved Background Blob */}
					<div className='absolute -right-24 top-5 w-full max-w-md bg-gray-100/80 rounded-[3rem] lg:rounded-full p-8 lg:py-24 lg:px-16 flex flex-col justify-center space-y-7 shadow-sm'>
						<h2 className='text-3xl font-extrabold text-gray-900 tracking-tight mb-2'>
							Contact Us
						</h2>

						{/* Email Item */}
						<div className='flex items-center space-x-4'>
							<div className='text-red-600 text-lg shrink-0'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='size-6'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
									/>
								</svg>
							</div>
							<p className='text-sm sm:text-base text-gray-800'>
								<span className='font-bold'>Email:</span>
								<a
									href='mailto:info@dukkanonline.ae'
									className='hover:text-red-600 transition-colors ml-1'>
									info@dukkanonline.ae
								</a>
							</p>
						</div>

						{/* Phone Item */}
						<div className='flex items-center space-x-4'>
							<div className='text-red-600 text-lg shrink-0'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='size-6'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
									/>
								</svg>
							</div>
							<p className='text-sm sm:text-base text-gray-800'>
								<span className='font-bold'>Phone:</span>
								<a href='tel:+917732456789' className='hover:text-red-600 transition-colors ml-1'>
									+91 7732456789
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
