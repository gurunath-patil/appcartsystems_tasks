import { RiCalendarCheckFill, RiStore2Line, RiStoreLine } from '@remixicon/react'
import React, { useState, type ChangeEvent } from 'react'
import sectionBg from '../assets/svg2.svg'
const Subscription = () => {
	const [selectedPlan, setSelectedPlan] = useState('yearly')
	const [fileName, setFileName] = useState('Choose file...')
	const [formData, setFormData] = useState({
		fullName: '',
		contact: '',
		street: '',
		emirates: '',
		poBox: '',
		shopName: '',
		tradeLicenseNo: '',
		category: '',
		file: null,
	})

	function handleContactInputChange(value: string) {
		// Only allow digits (prevents typing letters or symbols)
		const digitsOnly = value.replace(/\D/g, '')

		// Check if user is trying to type MORE than 10 digits
		if (digitsOnly.length > 10) {
			alert('Contact number should not exceed 10 digits')
			return // Stops state update only when exceeding 10
		}

		setFormData((prev) => ({ ...prev, contact: digitsOnly }))
	}
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		if (name === 'contact') {
			handleContactInputChange(value)
			return
		}
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleFileChange = (e: any) => {
		if (!e.target.files) return
		const file = e.target.files[0]
		if (file) {
			setFileName(file.name)
			setFormData((prev) => ({ ...prev, file }))
		}
	}

	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
		const isFormValid = Object.values(formData).every((value) => {
			if (typeof value === 'string') {
				return value.trim() !== '' // Prevents just pressing spacebar
			}
			return value !== null // Handles the file field
		})

		if (!isFormValid) {
			alert('Please fill in all the required fields.')
			return
		}
		console.log('Submitted Data:', { ...formData, selectedPlan })
	}

	return (
		<section
			id='subscription'
			className='relative min-h-screen py-12 lg:py-20 px-6 lg:px-12 flex items-center justify-center overflow-hidden'>
			{/* Dark Nature Background with Overlay */}
			<div className='absolute inset-0 z-0'>
				<img
					src={sectionBg}
					alt='Background'
					className='w-8/12 h-full object-cover object-center filter brightness-50 contrast-125'
				/>
				<div className='absolute inset-0 bg-black/40'></div>
			</div>

			{/* Main Container */}
			<div className='relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
				{/* Left Content Column */}
				<div className='lg:col-span-5 text-white space-y-6 pt-4'>
					<h2 className='text-3xl sm:text-4xl font-extrabold tracking-wide'>Subscription</h2>

					<p className='text-xs sm:text-sm leading-relaxed text-gray-200'>
						Our subscription is very easy and has no hidden charges, you will only have to pay on a
						monthly basis or as a bundle for the whole year based on your preferences. Check out our
						package below:
					</p>

					{/* Feature List */}
					<ul className='space-y-3.5 text-xs sm:text-sm font-medium text-gray-100'>
						<li className='flex items-start'>
							<span className='mr-2'>•</span> One Dedicated store with your own category
						</li>
						<li className='flex items-start'>
							<span className='mr-2'>•</span> Shop owner control page to give you full control to
							your store
						</li>
						<li className='flex items-start'>
							<span className='mr-2'>•</span> Items will be listed on our page and everywhere
							related to items
						</li>
						<li className='flex items-start'>
							<span className='mr-2'>•</span> Dashboard for your sales and products
						</li>
						<li className='flex items-start'>
							<span className='mr-2'>•</span> Customer lists with their contacts
						</li>
						<li className='flex items-start'>
							<span className='mr-2'>•</span> Finance page with invoicing for your customer
						</li>
						<li className='flex items-start'>
							<span className='mr-2'>•</span> Logistics page to manage your deliveries
						</li>
					</ul>

					<p className='text-xs sm:text-sm leading-relaxed text-gray-300 pt-2'>
						On the top of that your customer will be getting one stop shop for all items throughout
						a mobile application free of charge and we will support you and your business all the
						way to make sure you reach more customer base and to give you the ability to be always
						online with a state of the art technical support for all related matters 24/7
					</p>
				</div>

				{/* Right Form & Plan Selector Card */}
				<div className='lg:col-span-7 bg-white shadow-2xl p-6 sm:p-8'>
					{/* Subscription Plan Selector Cards */}
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
						{/* Monthly Plan */}
						<div
							onClick={() => setSelectedPlan('monthly')}
							className={`cursor-pointer border-2 rounded-lg p-4 flex items-center space-x-4 transition-all ${
								selectedPlan === 'monthly'
									? 'border-red-600 bg-red-600 text-white shadow-md relative'
									: 'border-gray-200 hover:border-red-500'
							}`}>
							{selectedPlan === 'monthly' && (
								<div className='absolute top-2 right-2 bg-white text-red-600 rounded text-[10px] w-4 h-4 flex items-center justify-center'>
									<RiCalendarCheckFill />
								</div>
							)}
							<div
								className={`text-3xl ${selectedPlan === 'monthly' ? 'text-white' : 'text-gray-700'}`}>
								<RiStoreLine />
							</div>
							<div>
								<div
									className={`text-lg font-extrabold ${selectedPlan === 'monthly' ? 'text-white' : 'text-gray-900'}`}>
									199 AED only
								</div>
								<div
									className={`text-xs ${selectedPlan === 'monthly' ? 'text-red-100' : 'text-gray-500'}`}>
									Monthly subscription
								</div>
							</div>
						</div>

						{/* Yearly Plan */}
						<div
							onClick={() => setSelectedPlan('yearly')}
							className={`cursor-pointer border-2 rounded-lg p-4 flex items-center space-x-4 transition-all ${
								selectedPlan === 'yearly'
									? 'border-red-600 bg-red-600 text-white shadow-md relative'
									: 'border-gray-200 hover:border-red-500'
							}`}>
							{selectedPlan === 'yearly' && (
								<div className='absolute top-2 right-2 bg-white text-red-600 rounded text-[10px] w-4 h-4 flex items-center justify-center'>
									<RiCalendarCheckFill />
								</div>
							)}
							<div
								className={`text-3xl ${selectedPlan === 'yearly' ? 'text-white' : 'text-gray-700'}`}>
								<RiStore2Line />
							</div>
							<div>
								<div
									className={`text-lg font-extrabold ${selectedPlan === 'yearly' ? 'text-white' : 'text-gray-900'}`}>
									1910 AED <span className='text-xs font-normal'>only</span>{' '}
									<span className='text-[11px] font-semibold italic'>& save 20%</span>
								</div>
								<div
									className={`text-xs ${selectedPlan === 'yearly' ? 'text-red-100' : 'text-gray-500'}`}>
									Yearly subscription
								</div>
							</div>
						</div>
					</div>

					{/* Interactive Form */}
					<form onSubmit={handleSubmit} className='space-y-4'>
						{/* Row 1: Full Name & Contact Details */}
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
							<div>
								<label className='block text-xs font-semibold text-gray-700 mb-1'>
									Full Name *
								</label>
								<input
									type='text'
									name='fullName'
									required
									placeholder='Enter here'
									value={formData.fullName}
									onChange={handleInputChange}
									className='w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-red-500 focus:bg-white transition-all'
								/>
							</div>
							<div>
								<label className='block text-xs font-semibold text-gray-700 mb-1'>
									Contact Details *
								</label>
								<input
									type='number'
									name='contact'
									required
									pattern='[0-9+ ]{8,15}'
									placeholder='Enter your mobile number'
									value={formData.contact}
									onChange={handleInputChange}
									className='w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-red-500 focus:bg-white transition-all'
								/>
							</div>
						</div>

						{/* Row 2: Address Split Inputs */}
						<div>
							<label className='block text-xs font-semibold text-gray-700 mb-1'>Address *</label>
							<div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
								<input
									type='text'
									name='street'
									required
									placeholder='Street'
									value={formData.street}
									onChange={handleInputChange}
									className='w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-red-500 focus:bg-white transition-all'
								/>
								<input
									type='text'
									name='emirates'
									required
									placeholder='Emirates'
									value={formData.emirates}
									onChange={handleInputChange}
									className='w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-red-500 focus:bg-white transition-all'
								/>
								<input
									type='text'
									name='poBox'
									required
									placeholder='P.O. Box'
									value={formData.poBox}
									onChange={handleInputChange}
									className='w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-red-500 focus:bg-white transition-all'
								/>
							</div>
						</div>

						{/* Row 3: Shop Name & Trade License Number */}
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
							<div>
								<label className='block text-xs font-semibold text-gray-700 mb-1'>
									Shop Name *
								</label>
								<input
									type='text'
									name='shopName'
									required
									placeholder='Enter here'
									value={formData.shopName}
									onChange={handleInputChange}
									className='w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-red-500 focus:bg-white transition-all'
								/>
							</div>
							<div>
								<label className='block text-xs font-semibold text-gray-700 mb-1'>
									Trade License Number *
								</label>
								<input
									type='text'
									name='tradeLicenseNo'
									required
									placeholder='Enter here'
									value={formData.tradeLicenseNo}
									onChange={handleInputChange}
									className='w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-red-500 focus:bg-white transition-all'
								/>
							</div>
						</div>

						{/* Row 4: Select Category & Upload License */}
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
							<div>
								<label className='block text-xs font-semibold text-gray-700 mb-1'>
									Select your shop category *
								</label>
								<select
									name='category'
									required
									value={formData.category}
									onChange={handleInputChange}
									className='w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-xs text-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 focus:bg-white transition-all'>
									<option value='' disabled>
										Enter here
									</option>
									<option value='fashion'>Fashion & Apparel</option>
									<option value='electronics'>Electronics</option>
									<option value='home'>Home & Kitchen</option>
									<option value='food'>Food & Beverage</option>
								</select>
							</div>

							<div>
								<label className='block text-xs font-semibold text-gray-700 mb-1'>
									Upload trade license *
								</label>
								<div className='flex items-center bg-gray-50 border border-gray-200 rounded-md overflow-hidden'>
									<span className='px-3 py-2 text-xs text-gray-400 truncate flex-grow'>
										{fileName}
									</span>
									<label className='cursor-pointer bg-white text-gray-700 text-xs px-4 py-2 border-l border-gray-200 font-medium hover:bg-gray-100 transition-colors shrink-0'>
										Browse
										<input
											type='file'
											required
											accept='.pdf,.png,.jpg,.jpeg'
											onChange={handleFileChange}
											className='hidden'
										/>
									</label>
								</div>
							</div>
						</div>

						{/* Form Submit Button */}
						<div className='pt-6 flex justify-center'>
							<button
								type='submit'
								className='bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-10 py-3 rounded-full shadow-lg hover:shadow-red-500/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0'>
								Get Started
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Subscription
