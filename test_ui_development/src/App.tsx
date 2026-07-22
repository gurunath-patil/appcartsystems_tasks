import React from 'react'
import Hero from './components/hero'
import AboutUs from './components/aboutUS'
import OurPackage from './components/OurPackages'
import Subscription from './components/Subscription'
import Contact from './components/ContactUs'
import Header from './components/header'

function App() {
	return (
		<div className='bg-white'>
			{/* Header / Navigation */}
			<Header />
			{/* Main Content Sections */}
			<main>
				<Hero />
				<AboutUs />
				<OurPackage />
				<Subscription />
				<Contact />
			</main>
		</div>
	)
}

export default App
