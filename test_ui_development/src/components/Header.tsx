import React from 'react'
import dukkanLogo from '../assets/Dukkan_website_logo.svg'
export default function Header() {
	return (
		<header className='w-full max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between'>
			{/* Brand Logo */}
			<div className='flex items-center space-x-3'>
				<img src={dukkanLogo} alt='Dukkan Online Logo' className='size-32' />
			</div>

			{/* Navigation Menu */}
			<nav className='hidden md:flex items-center space-x-8 text-sm font-semibold text-gray-700'>
				<a href='#hero' className='hover:text-red-500 transition-colors'>
					Home
				</a>
				<a href='#about-us' className='hover:text-red-500 transition-colors'>
					About Us
				</a>
				<a href='#our-package' className='hover:text-red-500 transition-colors'>
					Our Package
				</a>
				<a href='#subscription' className='hover:text-red-500 transition-colors'>
					Subscription
				</a>
				<a href='#contact' className='hover:text-red-500 transition-colors'>
					Contact
				</a>
			</nav>
		</header>
	)
}
