import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Check,
	Facebook,
	Github,
	Instagram,
	Star,
	Twitter,
} from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AnimatedLogos from "@/components/AnimatedLogos";
import Link from "next/link";

const LandingPage = () => {
	
	const companies = [
		{
			name: "Air France",
			role: "Full-stack Developer",
			logo: "airfrance",
			resume: "/templates/1.png",
		},
		{
			name: "Accenture",
			role: "Engineering Team Lead",
			logo: "accenture",
			resume: "/templates/2.png",
		},
		{
			name: "Amazon",
			role: "Senior Solution Architect",
			logo: "amazon",
			resume: "/templates/3.png",
		},
		{
			name: "Dell",
			role: "GCP Program Manager",
			logo: "dell",
			resume: "/templates/4.png",
		},
		{
			name: "Microsoft",
			role: "Cloud Program Manager",
			logo: "microsoft",
			resume: "/templates/5.png",
		},
	];

	return (
		<div className='min-h-screen bg-white max-w-screen-2xl mx-auto relative overflow-hidden'>
			{/* Background SVG Blob */}
			<svg
				className='absolute -top-24 -left-32 w-[800px] h-[800px] opacity-10'
				viewBox='0 0 600 600'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M300,600 C465,600 600,465 600,300 C600,135 465,0 300,0 C135,0 0,135 0,300 C0,465 135,600 300,600 Z'
					fill='#f97316'
				/>
			</svg>

			{/* Navigation Bar */}
			<Navbar />

			{/* Hero Section */}
			<section className='max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
					<div className='mt-10 md:mt-0'>
						{/* <span className='text-gray-700 font-medium mb-2 text-sm uppercase tracking-wide'>
							Best AI Resume Builder
						</span> */}
						<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mt-4 mb-6'>
							Your success story begins with a resume.
						</h1>
						<p className='text-gray-600 text-base sm:text-lg mb-8'>
							Create a beautiful resume quickly with the help of artificial
							intelligence and our customizable templates. Impress your future
							employer with a perfect resume created in minutes.
						</p>
						<div className='flex flex-wrap gap-4'>
							<Link
								href='/signin'
								className='px-6 sm:px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm'>
								Create My Resume
							</Link>
							{/* <Button variant='outline' className='px-6 sm:px-8 py-3 sm:py-4'>
								See Examples
							</Button> */}
						</div>

						<div className='mt-12'>
							<p className='text-gray-600 mb-6'>
								Trusted by thousands of job seekers worldwide and still growing.
							</p>

							<AnimatedLogos />
						</div>
					</div>

					<div className='flex justify-center mt-12 md:mt-0 z-10'>
						<Image
							src='/templates/5.png'
							alt='Hero'
							className='shadow-xl rounded-lg w-full max-w-xs sm:max-w-md md:max-w-full'
							width={400}
							height={200}
						/>
					</div>
				</div>
			</section>

			{/* Trustpilot and Google Rating */}
			<section className='max-w-7xl mx-auto px-4 py-8 md:py-16'>
				<div className='flex flex-wrap justify-center gap-6 sm:gap-12 mb-12'>
					{/* Trustpilot Rating */}
					<div className='flex flex-col items-center'>
						<Image
							src='/trustpilot-logo.svg'
							alt='Trustpilot'
							width={120}
							height={16}
							className='mb-2'
						/>
						<div className='flex gap-1'>
							{[1, 2, 3, 4].map((_, i) => (
								<Star
									key={i}
									className='w-5 h-5 fill-green-500 text-green-500'
								/>
							))}
							<Star className='w-5 h-5 fill-gray-200 text-gray-200' />
						</div>
						<div className='text-sm text-gray-600 mt-1'>
							TrustScore 4.6 2,182 reviews
						</div>
					</div>

					{/* Google Rating */}
					<div className='flex flex-col items-center'>
						<Image
							src='/google-logo-colored.svg'
							alt='Google'
							width={100}
							height={16}
							className='mb-2'
						/>
						<div className='flex gap-1'>
							{[1, 2, 3, 4].map((_, i) => (
								<Star
									key={i}
									className='w-5 h-5 fill-yellow-400 text-yellow-400'
								/>
							))}
							<Star className='w-5 h-5 fill-yellow-400/50 text-yellow-400' />
						</div>
						<div className='text-sm text-gray-600 mt-1'>4.7 / 5</div>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
				<div className='grid md:grid-cols-2 gap-12 items-center'>
					<div className='bg-gray-50 p-6 rounded-lg shadow-md order-last md:order-first'>
						<Image
							src='/ai-writer.gif'
							alt='AI Writer'
							className='rounded-lg'
							width={600}
							height={400}
							unoptimized={true}
						/>
					</div>

					<div className='order-first md:order-last'>
						{/* <span className='text-gray-700 font-medium'>AI Resume Builder</span> */}
						<h2 className='text-3xl sm:text-4xl md:text-5xl font-serif mt-4 mb-6'>
							Let artificial intelligence write your resume.
						</h2>
						<p className='text-gray-600 mb-8 text-base sm:text-lg'>
							Are you struggling to find the right words for your resume? Our AI
							resume builder can find them in no time! Generate the first draft
							of your resume in seconds.
						</p>

						{/* Features */}
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
							{[
								"Powered by GPT-4",
								"Generated in seconds",
								"Produces human-like text",
								"Safe and secure",
							].map((feature, i) => (
								<div key={i} className='flex items-center gap-2'>
									<Check className='w-5 h-5 text-orange-500' />
									<span>{feature}</span>
								</div>
							))}
						</div>

						<Link
							href='/signin'
							className='px-6 sm:px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm'>
							Create My Resume
						</Link>
					</div>
				</div>
			</section>

			<section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
					{/* Left Side - Content */}
					<div>
						{/* <h2 className='text-gray-700 font-medium mb-2 text-sm uppercase tracking-wide'>
							Resume Templates
						</h2> */}
						<h3 className='text-3xl sm:text-4xl md:text-5xl font-serif mt-4 mb-6'>
							Pick a resume template.
							<br />
							Make it more you.
						</h3>
						<p className='text-gray-600 mb-8 text-base sm:text-lg'>
							Get hired fast with a resume that visually stand out from the
							pile. Browse 40+ ATS-friendly resume templates designed by a team
							of HR experts and typographers. Customize any template in any way
							you want. Explore more than a million possible design
							combinations.{" "}
							<a href='#' className='hover:underline'>
								Learn more about our resume builder.
							</a>
						</p>

						{/* Features */}
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
							{[
								"Designed by typographers",
								"Free basic template",
								"ATS-friendly",
								"Gets you compliments",
							].map((feature, i) => (
								<div key={i} className='flex items-center gap-2'>
									<Check className='w-5 h-5 text-orange-500' />
									<span>{feature}</span>
								</div>
							))}
						</div>

						<Link
							href='/signin'
							className='px-6 sm:px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm'>
							Create My Resume
						</Link>
					</div>

					{/* Right Side - Template Editor Interface */}
					<div className='bg-white rounded-lg shadow-xl p-6'>
						<Image
							src='/placeholder-dashboard-2.png'
							alt='Template Editor'
							width={600}
							height={400}
							className='w-full max-w-lg mx-auto'
						/>
					</div>
				</div>
			</section>

			<section className='bg-[#0B1437] text-white relative overflow-hidden'>
				{/* Wave SVG at the bottom */}
				<div className='absolute bottom-0 left-0 w-full'>
					<svg
						viewBox='0 0 1440 99'
						className='w-full h-auto'
						preserveAspectRatio='none'>
						<path
							fill='white'
							d='M0,0 C320,100 480,100 720,50 C960,0 1120,0 1440,100 L1440,100 L0,100 Z'
						/>
					</svg>
				</div>

				<div className='max-w-7xl mx-auto px-4 py-28'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						{/* Left side - Resume Illustration */}
						<div className='relative'>
							<Image
								src='/ai-automation.png'
								alt='Resume Illustration'
								width={600}
								height={400}
								className='rounded-lg'
							/>
						</div>

						{/* Right side - Content */}
						<div className='space-y-6 relative z-10'>
							<div className='font-medium mb-2 text-sm uppercase tracking-wide text-gray-300'>
								AI Resume Writer
							</div>

							<h2 className='text-3xl sm:text-4xl md:text-5xl font-serif mt-4 mb-6'>
								Automate your resume writing with AI Writer.
							</h2>

							<p className='text-gray-300 mb-8 text-base sm:text-lg'>
								See for yourself how our AI Resume Writer can drastically speed
								up your resume writing process. Thanks to artificial
								intelligence, we were able to automate the process of writing a
								resume to the point of it being almost entirely effortless and
								faster than ever.
							</p>

							<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
								{[
									"Select a template, enter your job title and let AI do the rest",
									"Get a beautiful AI-generated resume in seconds",
								].map((feature, i) => (
									<div key={i} className='flex items-center gap-2'>
										<Check className='w-5 h-5 text-orange-500' />
										<span>{feature}</span>
									</div>
								))}
							</div>

							<Link
								href='/signin'
								className='px-6 sm:px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm mt-6 inline-block'>
								Try AI Resume Writer
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className='max-w-7xl mx-auto px-4 py-16'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					{/* Left side - Resume Grid */}
					<Card className='p-6 bg-gray-50'>
						<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
							{companies.map((company) => (
								<div key={company.name} className='flex flex-col items-center'>
									<div className='bg-white rounded-lg shadow-sm w-full aspect-[3/4] mb-2 flex justify-center items-stretch mx-auto overflow-hidden p-2'>
										<Image
											src={company.resume}
											alt='Resume'
											width={300}
											height={400}
										/>
									</div>
									<div className='text-xs text-gray-600 text-center'>
										Hired by
										<div className='font-medium text-gray-900'>
											{company.name}
										</div>
									</div>
								</div>
							))}
						</div>
					</Card>

					{/* Right side - Content */}
					<div className='space-y-6'>
						<div className='text-gray-700 font-medium mb-2 text-sm uppercase tracking-wide'>
							Resume Examples
						</div>
						<h2 className='text-3xl sm:text-4xl md:text-5xl font-serif mt-4 mb-6'>
							Get inspired by real resume examples.
						</h2>
						<p className='text-gray-600 mb-8 text-base sm:text-lg'>
							Nike, Facebook — learn from resumes that helped our customers land
							jobs with the world&apos;s top companies. Explore 5 high-quality
							templates, each crafted from scratch to ensure maximum visibility.
							We prioritize the best quality, and more templates will be added
							soon!
						</p>

						{/* <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
							{[
								"400+ job-specific resume and cover letter guides",
								"1,500+ cover letter and resume examples",
							].map((feature, i) => (
								<div key={i} className='flex items-center gap-2'>
									<Check className='w-5 h-5 text-orange-500' />
									<span>{feature}</span>
								</div>
							))}
						</div> */}
					</div>
				</div>
			</section>

			<section className='bg-[#0B1437] text-white relative overflow-hidden'>
				<div className='absolute top-0 left-0 w-full'>
					<svg
						viewBox='0 0 1440 100'
						className='w-full h-auto transform rotate-180'
						preserveAspectRatio='none'>
						<path
							fill='white'
							d='M0,0 C320,100 480,100 720,50 C960,0 1120,0 1440,100 L1440,100 L0,100 Z'
						/>
					</svg>
				</div>

				<div className='max-w-3xl mx-auto space-y-4 px-4 pt-28 pb-16 text-center'>
					<div className='font-medium mb-2 text-sm uppercase tracking-wide text-gray-300'>
						One-Time Payment
					</div>

					<h2 className='text-3xl sm:text-4xl md:text-5xl font-serif mt-4'>
						No subscriptions. No ads. Just a one-time payment.
					</h2>

					<p className='text-gray-300 mb-8 text-base sm:text-lg'>
						Enjoy lifetime access to all features with a simple, one-time fee.
						No recurring subscriptions, no hidden charges, and absolutely no
						ads. Get all the benefits of our AI-powered resume tools without the
						hassle.
					</p>

					<Link
						href='/signin'
						className='px-6 sm:px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm mt-6 inline-block'>
						Get Started with One-Time Access
					</Link>
				</div>
			</section>
			<footer className='bg-[#FDF8F4] border-t border-[#FDF8F4] py-6'>
      <div className='container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center'>
        <p className='text-[#f97316] text-sm'>
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <div className='flex flex-col sm:flex-row items-center mt-4 sm:mt-0 gap-4'>
          {/* Navigation Links */}
          <div className='flex gap-6'>
            <Link href={'/terms-and-conditions'}
          
              className='text-sm text-gray-600 hover:text-gray-800 hover:underline'>
              Terms and Conditions
            </Link>
			
            <Link
              href='/privacy-policy'
              className='text-sm text-gray-600 hover:text-gray-800 hover:underline'>
              Privacy Policy
            </Link>
            <Link
              href='/refund-policy'
              className='text-sm text-gray-600 hover:text-gray-800 hover:underline'>
              Refund Policy
            </Link>
          </div>
          {/* Social Media Icons */}
          <div className='flex gap-4'>
            <Button variant='ghost' size='icon' asChild>
              <a
                href='https://facebook.com'
                aria-label='Facebook'
                target='_blank'
                rel='noopener noreferrer'>
                <Facebook className='h-5 w-5 text-gray-600 hover:text-gray-800' />
              </a>
            </Button>
            <Button variant='ghost' size='icon' asChild>
              <a
                href='https://twitter.com'
                aria-label='Twitter'
                target='_blank'
                rel='noopener noreferrer'>
                <Twitter className='h-5 w-5 text-gray-600 hover:text-gray-800' />
              </a>
            </Button>
            <Button variant='ghost' size='icon' asChild>
              <a
                href='https://instagram.com'
                aria-label='Instagram'
                target='_blank'
                rel='noopener noreferrer'>
                <Instagram className='h-5 w-5 text-gray-600 hover:text-gray-800' />
              </a>
            </Button>
            <Button variant='ghost' size='icon' asChild>
              <a
                href='https://github.com'
                aria-label='GitHub'
                target='_blank'
                rel='noopener noreferrer'>
                <Github className='h-5 w-5 text-gray-600 hover:text-gray-800' />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
		</div>
	);
};

export default LandingPage;
