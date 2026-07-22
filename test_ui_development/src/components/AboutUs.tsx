import React from 'react'
import { RiSmartphoneLine, RiCustomerServiceLine, RiTruckLine } from '@remixicon/react'
const AboutUs = () => {
	return (
		<section
			id='about-us'
			className='relative bg-red-600 text-white pt-16 pb-32 md:pb-40 px-6 lg:px-12'>
			{/* Main Content Container */}
			<div className='max-w-4xl mx-auto text-center space-y-6 mb-10'>
				<h2 className='text-3xl sm:text-4xl font-semibold tracking-tight'>About Us</h2>

				<p className='text-sm sm:text-base leading-relaxed text-red-50 font-normal'>
					Dukkan online is a unique concept in the region that serves all type of small/medium
					businesses from home, Our idea is to digitize the home businesses and to make it easier
					for all home business owners to manage their day to day activities digitally. This will
					allow them to reach a wider customer base with the support of all related matters for
					instance invoicing, logistics, customer feedback follow-up and so forth.
				</p>

				<p className='text-sm sm:text-base leading-relaxed text-red-50 font-normal'>
					Our platform is uniquely designed and developed based on the market requirement and we
					keep updating it to match all requirements continuously as we always listen to our shop
					owners and to our users/customers.
				</p>
			</div>

			{/* Cards Container (Overlapping Section) */}
			<div className='max-w-4xl mx-auto absolute left-0 right-0 top-35 px-6 lg:px-10'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-x-4'>
					{/* Card 1 */}
					<div className='bg-white text-gray-800 p-8 shadow-xl flex flex-col items-center text-center space-y-4'>
						<div className='text-black text-5xl mb-2'>
							<RiSmartphoneLine className="size-10"/>
						</div>
						<h3 className='text-xl font-bold text-gray-900 tracking-wide'>Easy navigation</h3>
						<p className='text-xs sm:text-sm text-gray-600 leading-relaxed'>
							Set up your own online shop "Dukkan" and display your items in a very professional way
							with our easy step by step platform.
						</p>
					</div>

					{/* Card 2 */}
					<div className='bg-white text-gray-800 p-8 shadow-xl flex flex-col items-center text-center space-y-4'>
						<div className='text-black text-5xl mb-2'>
							<RiCustomerServiceLine className="size-10"/>
						</div>
						<h3 className='text-xl font-bold text-gray-900 tracking-wide'>
							Full Technical Support
						</h3>
						<p className='text-xs sm:text-sm text-gray-600 leading-relaxed'>
							Don't worry about the technical stuff any more, we have your back and we will take
							care of all related technical issues.
						</p>
					</div>

					{/* Card 3 */}
					<div className='bg-white text-gray-800 p-8 shadow-xl flex flex-col items-center text-center space-y-4'>
						<div className='text-black text-5xl mb-2'>
							<RiTruckLine className="size-10"/>
						</div>
						<h3 className='text-xl font-bold text-gray-900 tracking-wide'>All logistics support</h3>
						<p className='text-xs sm:text-sm text-gray-600 leading-relaxed'>
							All business related matters are provided like Payment Gateway and Products Delivery,
							and a dashboard with a finance system that will help you manage your money.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutUs
