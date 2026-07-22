import React from 'react'
import {
	RiReceiptLine,
	RiTruckLine,
	RiLineChartLine,
	RiBarChartBoxAiLine,
	RiChat1Line,
	RiEqualizerLine,
	RiSmartphoneLine,
	RiArchiveLine,
	RiShakeHandsLine,
} from '@remixicon/react'

const OurPackage = () => {
	const features = [
		{
			icon: <RiReceiptLine className='size-10'/>,
			text: 'Online invoicing system',
		},
		{
			icon: <RiTruckLine className='size-10'/>,
			text: 'Online logistics system integrated with a leading company to deliver your items',
		},
		{
			icon: <RiLineChartLine className='size-10'/>,
			text: 'Online Finance system',
		},
		{
			icon: <RiBarChartBoxAiLine className='size-10'/>,
			text: 'Online Dashboard that gives you a glimpse about your business performance',
		},
		{
			icon: <RiChat1Line className='size-10'/>,
			text: 'Feedback system that will serve you in getting to know your customer needs',
		},
		{
			icon: <RiEqualizerLine className='size-10'/>,
			text: 'Easy product management system to add your items that matches your shop category',
		},
		{
			icon: <RiSmartphoneLine className='size-10'/>,
			text: 'Trendy mobile app on all platforms to make ordering and tracking easy for your customer',
		},
		{
			icon: <RiArchiveLine className='size-10'/>,
			text: 'Managing your inventory and items',
		},
		{
			icon: <RiShakeHandsLine className='size-10'/>,
			text: 'Hassle free approach so you can focus on your business with Up-dates and upgrades based on the latest technology trends',
		},
	]

	return (
		<section id='our-package' className='w-full max-w-6xl mx-auto px-24 py-16 mt-[35rem] md:mt-40 '>
			{/* Section Header */}
			<div className='text-center max-w-3xl mx-auto space-y-4 mb-16'>
				<h2 className='text-3xl sm:text-4xl font-semibold text-gray-900 tracking-wide'>Our Package</h2>
				<p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
					Registering in Dukkan Online will give you the ability to get many enriching features
					which will help you in getting started with your business and grow gradually. As you grow
					we will grow so it will be as a mutual business relationship and we will make sure to
					fulfil all your needs as much as possible.
				</p>
			</div>

			{/* Features Grid */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 items-center'>
				{features.map((feature, index) => (
					<div key={index} className='flex items-center space-x-5 hover:text-red-600'>
						<div
							className={`text-4xl shrink-0 `}>
							{feature.icon}
						</div>
						<p
							className={`text-sm `}>
							{feature.text}
						</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default OurPackage
