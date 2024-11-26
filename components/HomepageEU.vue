<template>
    <div>
		<section id="section-1" class="flex flex-col justify-center items-center h-screen bg-[url('public/images/banner.webp')] bg-no-repeat bg-cover bg-center">
			<div class="container">
				<div class="flex flex-col justify-center gap-4 w-full md:w-3/5 h-full">
					<h1 class="text-white text-2xl lg:text-[3rem] font-lora !leading-[1.3]" data-aos="fade-up" data-aos-delay="100">Making financial independence accessible and affordable for all</h1>
					<ScrollButton target="contact-us" class="flex items-center gap-2 w-max mt-3 md:mt-6 text-sm text-[#D3EAF0] cursor-pointer" data-aos="fade-up" data-aos-delay="200">
						Find out how we work
						<Icon name="material-symbols-light:arrow-outward" class="text-2xl" />
					</ScrollButton>
					<div>
						<ScrollButton target="contact-us" class="mt-3 md:mt-6 py-2 px-8 text-sm font-medium text-white bg-[#585E8D] hover:bg-[#09052B] transition-[background] duration-300 ease-in-out" data-aos="fade-up" data-aos-delay="300">Contact Us</ScrollButton>
					</div>
				</div>
			</div>
		</section>
		
		<section id="section-2" class="pt-28 pb-28 md:pt-32 bg-[#EEF3F5]">
			<div class="container">
				<div class="flex items-center gap-1 text-sm text-[#C7D165] font-libre font-bold uppercase" data-aos="fade-up">
					<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 0.5H4.89919H0V5.41129V12.5" fill="#C7D165"/>
					</svg>
					<h2>Affiliated With</h2>
				</div>

				<div class="marquee overflow-hidden">
					<div class="wrapper grid grid-flow-col auto-cols-[10rem] lg:auto-cols-[15rem] justify-items-center items-center mt-10 md:my-10 animate-[marquee_20s_linear_infinite] lg:animate-[marqueelg_20s_linear_infinite]">
						<template v-for="(marquee, index) in marqueeList" :key="index">
							<a :href="marquee.link" target="_blank">
								<img class="marquee-item w-2/3" :src="`images/${marquee.image}.webp`" :alt="marquee.alt" :width="marquee.width" :height="marquee.height" data-aos="fade-up" :data-aos-delay="(index + 1) * 100"/>
							</a>
						</template>
						<template v-for="(marquee, index) in marqueeList" :key="index">
							<a :href="marquee.image" target="_blank">
								<img class="marquee-item w-2/3" :src="`images/${marquee.image}.webp`" :alt="marquee.alt" :width="marquee.width" :height="marquee.height" data-aos="fade-up" :data-aos-delay="(index + 1) * 100"/>
							</a>
						</template>
					</div>
				</div>
			</div>
		</section>

		<div id="section-3" class="services bg-[#585E8D] max-lg:pb-16 text-white">
			<div ref="containerRef" class="container flex max-lg:flex-col">
				<div class="w-full lg:w-4/7 order-1 lg:order-0" :style="{ transform: `translateX(-${marginLeft}px)` }">
					<img class="w-full h-full aspect-[4/3] object-cover object-right block lg:-translate-y-12" :src="`images/services-we-offer.webp`" alt="Services We Offer" width="480" height="611"/>
				</div>
				<!-- lg:pl-16 -->
				<div class="w-full lg:w-3/7 my-16 lg:my-32 lg:pl-16 order-0 lg:order-1">
					<div :style="{ marginLeft: `-${marginLeft}px`, width: `calc(100% + ${marginLeft}px` }">
						<div class="flex items-center gap-1 text-sm text-[#C7D165] font-libre font-bold uppercase" data-aos="fade-up">
							<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12 0.5H4.89919H0V5.41129V12.5" fill="#C7D165"/>
							</svg>
							<h2>What We Do</h2>
						</div>
						<h3 class="mt-6 text-2xl lg:text-5xl font-lora" data-aos="fade-up">The services we offer</h3>
						<p class="flex items-center gap-2 mt-6 text-base text-gray-300" data-aos="fade-up">Monty Finance's range of services is crafted to deliver strategic insights, and foster sustainable growth for businesses across various industries.</p>
						
						<div class="flex flex-col mt-14">
							<div class="flex justify-between gap-2 border-b pb-6">
								<h4 class="font-lora text-xl cursor-pointer"
									:class="activeTab === 0 ? 'text-[#D3EAF0] after:absolute after:-bottom-6 after:left-0 after:w-full after:h-[1px] after:bg-[#D3EAF0] after:z-10' : 'text-white'"
									@click="show(0)">Digital Banking</h4>

								<h4 class="font-lora text-xl cursor-pointer"
									:class="activeTab === 1 ? 'text-[#D3EAF0] after:absolute after:-bottom-6 after:left-0 after:w-full after:h-[1px] after:bg-[#D3EAF0] after:z-10' : 'text-white'"
									@click="show(1)">Digital banking enablement</h4>

								<h4 class="font-lora text-xl cursor-pointer"
									:class="activeTab === 2 ? 'text-[#D3EAF0] after:absolute after:-bottom-6 after:left-0 after:w-full after:h-[1px] after:bg-[#D3EAF0] after:z-10' : 'text-white'"
									@click="show(2)">Payment infrastruture</h4>
								<!-- <div class="absolute bottom-0 left-0 w-1/3 h-[1px] bg-white"></div> -->
							</div>

							<div class="mt-6">
                                <p class="transition-opacity ease-in-out duration-300" :class="{ 'absolute invisible opacity-0': activeTab !== 0 }">Our Digital Core Banking Software offers all the essential functionalities to support your business on a single, powerful platform. Experience seamless and efficient banking solutions tailored to your needs.</p>
                                <p class="transition-opacity ease-in-out duration-300" :class="{ 'absolute invisible opacity-0': activeTab !== 1 }">We provide a completely digital and modern ecosystem for banking and payment firms. Our exceptional tools help you build a microservices-based architecture that fits your unique requirements, ensuring efficiency and adaptability.</p>
                                <p class="transition-opacity ease-in-out duration-300" :class="{ 'absolute invisible opacity-0': activeTab !== 2 }">Our intelligent, secure, and powerful routing system optimizes your payment processes. We enable merchants to maximize their global business potential by facilitating transactions in multiple currencies and payment types worldwide.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<section id="section-4" class="about-us py-16 md:py-32 text-center mx-auto">
			<div class="container">
				<div class="w-full md:w-3/5 mx-auto">
					<div class="flex justify-center items-center gap-1 text-sm text-[#C7D165] font-libre font-bold uppercase" data-aos="fade-up">
						<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 0.5H4.89919H0V5.41129V12.5" fill="#C7D165"/>
						</svg>
						<h2>About Monty Finance</h2>
					</div>
					<h3 class="mt-6 text-2xl lg:text-5xl font-lora" data-aos="fade-up">Unlocking your financial freedom with confidence</h3>
					<p class="flex items-center gap-2 mt-6 text-base text-[#73788B]" data-aos="fade-up">Founded in 2021, Monty Finance UK is a global financial technology service provider.<br />We are dedicated to meeting the needs of underserved, dissatisfied, and unbanked communities through a comprehensive range of services across various verticals and markets.</p>
					<div class="flex justify-center items-center gap-6 mt-10 text-[#585E8D]">
						<div class="p-4 sm:p-14 bg-gray-100">
							<span class="block text-3xl sm:text-7xl font-lora">25</span>
							<span class="block text-base">Years of experience</span>
						</div>
						<div class="p-4 sm:p-14 bg-gray-100">
							<span class="block text-3xl sm:text-7xl font-lora">20+</span>
							<span class="block text-base">Countries worldwide</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="section-5" class="py-32 text-white bg-[url('public/images/mission-vision.webp')] bg-no-repeat bg-cover bg-center">
			<div class="container">
				<div class="flex max-md:flex-col justify-center items-stretch gap-14 md:gap-28">
					<div class="flex-1 p-6 bg-white/10">
						<div class="flex items-start gap-4" data-aos="fade-up">
							<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12 0.5H4.89919H0V5.41129V12.5" fill="#FFFFFF"/>
							</svg>
							<h2 class="mt-2 text-2xl lg:text-5xl font-lora">Mission</h2>
						</div>
						<p class="mt-8">To enhance financial access by providing inclusive, straightforward, and comprehensive services that empower individuals and businesses globally.</p>
					</div>
					<div class="flex-1 p-6 bg-white/10">
						<div class="flex items-start gap-4" data-aos="fade-up">
							<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12 0.5H4.89919H0V5.41129V12.5" fill="#FFFFFF"/>
							</svg>
							<h2 class="mt-2 text-2xl lg:text-5xl font-lora">Vision</h2>
						</div>
						<p class="mt-8">To become the world's foremost catalyst for financial inclusion, driving exponential growth in access to essential financial services for all.</p>
					</div>
				</div>
			</div>
		</section>
		
		<section id="section-6" class="contact-us py-16 md:py-32">
			<div class="container">
				<div class="flex max-md:flex-col items-center gap-8">
					<div class="flex-1 w-full">
						<div class="flex items-center gap-1 text-sm text-[#C7D165] font-libre font-bold uppercase" data-aos="fade-up">
							<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12 0.5H4.89919H0V5.41129V12.5" fill="#C7D165"/>
							</svg>
							<h2>Contact Us</h2>
						</div>
						<h3 class="mt-6 text-2xl lg:text-5xl font-lora" data-aos="fade-up">Reach out to us today</h3>
						<p class="flex items-center gap-2 mt-6 text-base text-[#73788B]" data-aos="fade-up">We are here to assist you with all your financial needs. 
							Please feel free to reach out to us through any of the following channels.</p>

						<div class="flex flex-col gap-6 mt-8">
							<div class="flex flex-col md:flex-row gap-6 w-full">
								<div class="flex flex-col gap-1 w-full">
									<input v-model="form.first_name" type="text" id="first_name" placeholder="First Name" class="w-full text-sm px-3 py-2 text-black border-b border-b-[#D0D5DD] outline-none">
									<div v-if="errors.first_name" class="text-red-500 text-xs">{{ errors.first_name }}</div>
								</div>
								<div class="flex flex-col gap-1 w-full">
									<input v-model="form.last_name" type="text" id="last_name" placeholder="Last Name" class="w-full text-sm px-3 py-2 text-black border-b border-b-[#D0D5DD] outline-none">
									<div v-if="errors.last_name" class="text-red-500 text-xs">{{ errors.last_name }}</div>
								</div>
							</div>

							<div class="flex flex-col md:flex-row gap-6 w-full">
								<div class="flex flex-col gap-1 w-full">
									<input v-model="form.email" type="text" id="email" placeholder="Email" class="w-full text-sm px-3 py-2 text-black border-b border-b-[#D0D5DD] outline-none">
									<div v-if="errors.email" class="text-red-500 text-xs">{{ errors.email }}</div>
								</div>
								<div class="flex flex-col gap-1 w-full">
									<div class="flex flex-row gap-2">
										<div class="flex flex-col gap-1 w-[160px]">
											<div @click="toggleDropdown" class="custom-dropdown w-full text-sm px-4 py-2 text-black border-b border-b-[#D0D5DD] outline-none cursor-pointer">
												<div id="selected-country" class="flex justify-start items-center gap-2">
													<img class="selected-country--image" :src="`/images/flags/${selectedCountry.iso2 || 'LB' }.svg`" :alt="selectedCountry.name || 'Lebanon'" width="20" height="20">
													<span class="selected-country--name">+{{ selectedCountry.code || '961' }}</span>
													<!-- <Icon name="fa6-solid:angle-down" class="selected-country--icon" :class="{'rotate-180': showDropdown}" /> -->
												</div>
											</div>
											<input v-model="form.code" type="hidden" id="code">
											<div v-if="errors.code" class="text-red-500 text-xs">{{ errors.code }}</div>
										</div>

										<ul v-if="showDropdown" ref="dropdownContainer" @scroll="handleScroll" class="dropdown-container absolute top-full left-0 w-full max-h-[200px] text-sm rounded-xl bg-primary text-black mt-2 overflow-auto z-50">
											<input v-model="searchQuery" type="text" id="search" placeholder="Search" class="sticky top-0 left-0 w-full bg-primary px-4 py-2 border-b border-b-slate-200 outline-0 z-10">
											<template v-for="country in filteredCountries">
												<li v-if="country.status == 1" :key="country.id" @click="selectCountry(country)" class="flex gap-2 text-black p-2 hover:bg-slate-200 cursor-pointer">
													<img :src="`/images/flags/${country.iso2}.svg`" :alt="country.name" width="20" height="20" />
													<span class="text-xs text-[#73788B]">(+{{ country.code }})</span>
													<span class="text-xs">{{ country.name }}</span>
												</li>
											</template>
										</ul>

										<div class="flex flex-col gap-1 w-full">
											<input v-model="form.mobile" type="text" id="mobile" placeholder="Phone Number" class="w-full text-sm px-3 py-2 text-black border-b border-b-[#D0D5DD] outline-none">
											<div v-if="errors.mobile" class="text-red-500 text-xs">{{ errors.mobile }}</div>
										</div>
									</div>
								</div>
							</div>

							<div class="flex flex-col md:flex-row gap-6 w-full">
								<div class="flex flex-col gap-1 w-full">
									<textarea v-model="form.message" id="message" placeholder="Message" class="w-full text-sm px-4 py-2 text-black border-b border-b-[#D0D5DD] outline-none resize-none" rows="7"></textarea>
									<div v-if="errors.message" class="text-red-500 text-xs">{{ errors.message }}</div>
								</div>
							</div>

							<div class="flex flex-col md:flex-row gap-6 w-full" data-aos="fade-up">
								<button type="submit" id="submit" class="w-full px-4 py-3 text-white text-center bg-[#585E8D] hover:bg-[#09052B] transition-all duration-300 ease-in-out" @click.prevent="handleSubmit">Send message</button>
							</div>
						</div>
						<div v-if="submissionMessage" class="mt-4 text-xs" :class="{'text-red-500': isError, 'text-gray-500': !isError}">{{ submissionMessage }}</div>
					</div>
					<div class="flex-1 w-full">
						<div class="flex flex-col justify-center items-stretch gap-8">
							<div class="flex-1 p-6 md:p-12 bg-gray-100">
								<div class="flex items-start gap-4" data-aos="fade-up">
									<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12 0.5H4.89919H0V5.41129V12.5" fill="#585E8D"/>
									</svg>
									<Icon name="ph:map-pin-bold" class="mt-3 text-[#585E8D] text-3xl" />
									<div>
										<h2 class="mt-2 text-3xl text-[#585E8D] font-lora">Office Address</h2>
										<p class="block mt-2 text-[#73788B]">Gefinor Center, Hamra, Beirut, Lebanon</p>
									</div>
								</div>
							</div>
							<div class="flex-1 p-6 md:p-12 bg-gray-100">
								<div class="flex items-start gap-4" data-aos="fade-up">
									<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12 0.5H4.89919H0V5.41129V12.5" fill="#585E8D"/>
									</svg>
									<Icon name="ph:envelope-open-bold" class="mt-3 text-[#585E8D] text-3xl" />
									<div>
										<h2 class="mt-2 text-3xl text-[#585E8D] font-lora">General Inquiries</h2>
										<a href="mailto:montyfinance@gmail.com" class="block mt-2 text-[#73788B]">montyfinance@gmail.com</a>
									</div>
								</div>
							</div>
							<div class="flex-1 p-6 md:p-12 bg-gray-100">
								<div class="flex items-start gap-4" data-aos="fade-up">
									<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12 0.5H4.89919H0V5.41129V12.5" fill="#585E8D"/>
									</svg>
									<Icon name="ph:phone-bold" class="mt-3 text-[#585E8D] text-3xl" />
									<div>
										<h2 class="mt-2 text-3xl text-[#585E8D] font-lora">Toll-Free Number</h2>
										<a href="tel:+448082387522" class="block mt-2 text-[#73788B]">+44 808 238 7522</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="section-7" class="board py-16 pb-32">
			<div class="container">
				<div class="flex items-center gap-1 text-sm text-[#C7D165] font-libre font-bold uppercase" data-aos="fade-up">
					<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 0.5H4.89919H0V5.41129V12.5" fill="#C7D165"/>
					</svg>
					<h2>Board Members</h2>
				</div>
				<h3 class="mt-6 text-2xl lg:text-5xl font-lora" data-aos="fade-up">The faces behind Monty Finance</h3>

				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
					<template v-for="(board, index) in boardList" :key="index">
						<div class="relative overflow-hidden p-4 bg-gray-100 rounded-sm"
							:class="{
								// 'mt-0': index % 3 === 0,      /* No margin-left for the 1st, 4th, 7th... items */
								'lg:translate-y-10': index === 1 || index === 4,      /* Indent for the 2nd, 5th, 8th... items */
								'lg:translate-y-20': index === 2 || index === 5,      /* More indent for the 3rd, 6th, 9th... items */
								'max-md:translate-y-0': index >= 3     /* More indent for the 3rd, 6th, 9th... items */
							}">
							<div class="h-full absolute left-0 top-0 flex flex-col justify-center">
								<p class="sm:text-base xl:text-lg text-[#73788B] text-center p-3" :class="{'hidden': !board.isExpanded, 'block': board.isExpanded}">{{ board.description }}</p>
							</div>
							
							<div :class="{'opacity-0 translate-y-full': board.isExpanded}">
								<img class="w-full h-full rounded-sm" :src="`images/${board.image}.webp`" :alt="board.alt" width="336" height="362" data-aos="fade-up" :data-aos-delay="(index + 1) * 100"/>
								<h4 class="text-base text-[#585E8D] font-bold text-center uppercase mt-4">{{ board.name }}</h4>
								<h5 class="text-xl font-lora text-center">{{ board.position }}</h5>
							</div>	
							
							<div class="flex justify-between items-center gap-2 mt-4">
								<a class="flex" :href="board.linkedin" target="_blank" aria-label="Linkedin" rel="noopener">
									<Icon name="uiw:linkedin" class="text-2xl text-[#585E8D]" />
								</a>
								<p @click="toggleExpand(board)" class="flex justify-between items-center gap-2 text-sm text-[#585E8D] hover:text-[#09052B] cursor-pointer" data-aos="fade-up" data-aos-delay="200">
									<span>{{ board.isExpanded ? 'Show less' : 'Read more' }}</span>
									<Icon name="material-symbols-light:arrow-outward" class="text-2xl" />
								</p>
								<div></div>
							</div>
						</div>
					</template>
				</div>
			</div>
		</section>

		<div id="section-8" class="offices bg-[#585E8D] my-16 lg:my-32 max-lg:pb-16 text-white">
			<div ref="containerRef" class="container flex max-lg:flex-col">
				<div class="w-full lg:w-4/7 order-1 lg:order-0" :style="{ transform: `translateX(-${marginLeft}px)` }">
					<img :class="currentPath === '/eu' ? 'aspect-[4/3]' : 'aspect-[6/3]' " class="w-full h-full object-cover object-right block lg:-translate-y-12" :src="`images/our-offices.webp`" alt="Our Offices" width="664" height="1146"/>
				</div>
				
				<div class="w-full lg:w-3/7 py-16 md:py-32 lg:pl-16 order-0 lg:order-1">
					<div :style="{ marginLeft: `-${marginLeft}px`, width: `calc(100% + ${marginLeft}px` }">
						<div class="flex items-center gap-1 text-sm text-[#C7D165] font-libre font-bold uppercase" data-aos="fade-up">
							<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12 0.5H4.89919H0V5.41129V12.5" fill="#C7D165"/>
							</svg>
							<h2>Our Offices</h2>
						</div>
						<h3 class="mt-6 text-2xl lg:text-5xl font-lora" data-aos="fade-up">Where to find us</h3>
						
						<div class="grid grid-cols-2 xl:grid-cols-3 gap-8 mt-14">
							<div v-if="currentPath === '/eu'">
								<h4 class="text-3xl font-lora">UK</h4>
								<p class="mt-2 text-base text-gray-300" data-aos="fade-up">Beaumont Bridge House, 181 Queen Victoria Street</p>
							</div>
							<div v-if="currentPath === '/eu'">
								<h4 class="text-3xl font-lora">Nigeria</h4>
								<p class="mt-2 text-base text-gray-300" data-aos="fade-up">10th Floor, Standard Chartered HQ. No.142, Ahmadu Bello Way, Victoria Island, Eti-Osa</p>
							</div>
							<div>
								<h4 class="text-3xl font-lora">Jordan</h4>
								<p class="mt-2 text-base text-gray-300" data-aos="fade-up">Office 501, Campbell Grey Living, Land Number 851, Al-Waibdeh - Al- Wastani Basin</p>
							</div>
							<div>
								<h4 class="text-3xl font-lora">Lebanon</h4>
								<p class="mt-2 text-base text-gray-300" data-aos="fade-up">1st floor, Bloc E, Gefinor Center, Hamra, Beirut</p>
							</div>
							<div>
								<h4 class="text-3xl font-lora">UAE</h4>
								<p class="mt-2 text-base text-gray-300" data-aos="fade-up">Unit 30, floor 20, Central Park Tower, DIFC</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<section id="section-9" class="py-16">
			<div class="container">
				<div class="flex max-lg:flex-col items-start gap-8">
					<div class="flex-1 w-full md:sticky md:top-[88px]">
						<div class="flex items-center gap-1 text-sm text-[#C7D165] font-libre font-bold uppercase" data-aos="fade-up">
							<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12 0.5H4.89919H0V5.41129V12.5" fill="#C7D165"/>
							</svg>
							<h2>Our Coverage</h2>
						</div>
						<h3 class="mt-6 text-2xl lg:text-5xl font-lora" data-aos="fade-up">We're here to empower investors globally </h3>
						<p class="flex items-center gap-2 w-full md:w-10/12 mt-6 text-base text-[#73788B]" data-aos="fade-up">Our range of services is crafted to deliver strategic insights, and foster sustainable growth for businesses across various industries.</p>
					</div>
					
					<div class="flex-1 grid grid-cols-2 gap-4 md:gap-6 w-full">
						<div v-for="(office, index) in officesListEu" :key="index" class="flex items-start gap-4 p-2 md:p-6 bg-gray-100" data-aos="fade-up">
							<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12 0.5H4.89919H0V5.41129V12.5" fill="#585E8D"/>
							</svg>
							<h2 class="mt-2 text-xl md:text-3xl text-[#585E8D] font-lora">{{ office.country }}</h2>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="section-10" class="portfolio py-16 md:py-32">
			<div class="container">
				<div class="flex items-center gap-1 text-sm text-[#C7D165] font-libre font-bold uppercase" data-aos="fade-up">
					<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 0.5H4.89919H0V5.41129V12.5" fill="#C7D165"/>
					</svg>
					<h2>Profile</h2>
				</div>
				<h3 class="mt-6 text-2xl lg:text-5xl font-lora" data-aos="fade-up">Portfolio</h3>
				<p class="flex items-center gap-2 mt-6 text-base text-[#73788B] w-full md:w-2/3" data-aos="fade-up">Explore our portfolio to see how we've transformed ideas into impactful solutions. Our work reflects a commitment to innovation, functionality, and results-driven solutions across diverse industries.</p>

				<div class="grid lg:grid-cols-3 gap-8 mt-8">
					<div class="w-full py-16 px-10 bg-[#D3EAF0]">
						<img class="h-[100px] mx-auto" :src="`images/mymonty.svg`" alt="MyMonty" width="285" height="58"/>
						<p class="mt-6">MyMonty, a global neobanking platform, offers a seamless digital banking experience anytime, anywhere.</p>
						<a href="https://mymonty.com" target="_blank" class="flex items-center gap-2 w-max mt-6 text-sm" data-aos="fade-up" data-aos-delay="200">
							Discover
							<Icon name="material-symbols-light:arrow-outward" class="text-2xl" />
						</a>
					</div>

					<div class="w-full py-16 px-10 bg-[#09052B] text-white lg:translate-y-10">
						<img class="h-[100px] mx-auto" :src="`images/montypay.svg`" alt="MontyPay" width="304" height="55"/>
						<p class="mt-6">MontyPay, an international payment gateway, provides intelligent and powerful payment solutions to help your business grow and thrive globally.						</p>
						<a href="https://montypay.com" target="_blank" class="flex items-center gap-2 w-max mt-6 text-sm" data-aos="fade-up" data-aos-delay="200">
							Discover
							<Icon name="material-symbols-light:arrow-outward" class="text-2xl" />
						</a>
					</div>

					<div class="w-full py-16 px-10 bg-[#DFDFE0] text-[#5A5F71] lg:translate-y-20">
						<img class="h-[100px] mx-auto" :src="`images/mymonty-technology.svg`" alt="Monty Mobile" width="285" height="58" />
						<p class="mt-6">Empower your bank, FinTech startup, or financial institution with the right technical infrastructure to accelerate digital transformation, delivering a smooth and consistent experience.</p>
						<!-- <a href="https://mymonty.com" target="_blank" class="flex items-center gap-2 w-max mt-6 text-sm text-[#73788B]" data-aos="fade-up" data-aos-delay="200">
							Discover
							<Icon name="material-symbols-light:arrow-outward" class="text-2xl" />
						</a> -->
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
	import { useCountry } from '~/composables/useCountry';

	useSeoMeta({
        title: 'Homepage Europe Europe',
        description: '',

        ogTitle: 'Homepage Europe',
        ogDescription: '',
        ogImage: '/assets/images/share-image-team.webp',

        twitterTitle: 'Homepage Europe',
        twitterDescription: '',
        twitterCard: 'summary_large_image',
    })

	const { selectedCountry, detectCountry, countriesData } = useCountry();

	const emit = defineEmits();

	const route = useRoute();
	const currentPath = route.path;
    const currentRoute = computed(() => route.path);

	const marginLeft = ref(0)
	const containerRef = ref(null)
	const mdBreakpoint = 1024 // Breakpoint for md screen sizes

	const activeTab = ref(0);
	
	// Country-related State
    const countries = ref([]);
    const showDropdown = ref(false);
    const placeholder = 'Code';
    const filteredCountries = ref([]);
    const searchQuery = ref('');
    const dropdownContainer = ref(null);
    const lastLoadedIndex = ref(0);
    const searchFlag = ref(false);
    const initialCode = ref(''); // Store initial value

    // Submission State
    const submissionMessage = ref('');
    const isSubmitting = ref(false);
    const isError = ref(false);

	const marqueeList = [
        { image: "mymonty", alt: "MyMonty", width: "174", height: "35", link: "https://mymonty.com" },
        { image: "comium", alt: "Comium", width: "154", height: "38", link: "https://comium.gm" },
        { image: "montypay", alt: "MontyPay", width: "183", height: "33", link: "https://montypay.com" },
        { image: "monty-mobile", alt: "Monty Mobile", width: "154", height: "48", link: "https://montymobile.com" },
        { image: "monty-capital", alt: "Monty Capital", width: "225", height: "35", link: "https://montycapital.com" },
    ];

	const boardList = ref([
        { name: "Mountasser Hachem", position: "Founder & CEO", description: "With more than 20 years leading a group of holdings, Mr. Hachem is always striving to make a difference in the lives of others even if it means taking risks and venturing into new fields. Ambitious, bold and driven, he founded Monty Group and its subsidiaries and dove into the telecom world over two decades ago, building a successful career and transforming t he company into an international hub with several branches all over the world.", image: "mountasser-hachem", linkedin: "", isExpanded: false   },
        { name: "Mike Quintanilla", position: "Board Member", description: "A highly experienced FinTech executive with expertise in payments, BaaS, digital banking, cryptocurrency, DeFi, and NFTs. Mike has successfully prescribed product roadmaps and integrated cutting-edge technologies for innovative companies and startups. He has also demonstrated a deep passion and understanding of behavioral economics, gamification, and tokenization frameworks for enterprises in the metaverse.", image: "mike-quintanilla", linkedin: "", isExpanded: false  },
        { name: "Randa Naboulsi", position: "Group CFO & Board Member", description: "An ambitious, result oriented and accomplished Chief Financial Officer, Randa Naboulsi graduated with a BBA from the University of Balamand in Lebanon in 1995 and later completed her studies with an MBA from the Lebanese American University of Beirut in 2008 She has extensive hands-on expertise in Corporate Finance, Treasury, Budgeting & Forecasting, toping it up with strong connections with investors.", image: "randa-naboulsi", linkedin: "", isExpanded: false  },
        { name: "Sussane Hannestad", position: "Board Member", description: "With over 30 years of experience in the fields of Banking, Insurance and Financial services, Mrs. Hannestad has a proven record of accomplishments of scaling and launching companies in global markets providing a unique edge and knowledge for fintech growth and development.", image: "sussane-hannestad", linkedin: "", isExpanded: false  },
        { name: "Arvinder Gujral", position: "Board Member", description: "With an MBA in Business Management, Arvinder Gujral was the first Twitter employee in India to become its Managing Director in SE & Asia and Senior Business Development Executive of APAC. >With over 22 years of experience in the field of Technology, Telecom and Advertising, he has come a long way working with several key international players.", image: "arvinder-gujral", linkedin: "", isExpanded: false  },
        { name: "Sarah Alateeqi", position: "Board Member", description: "Vice Chairman and Acting CEO of AlMal Investment Company in Kuwait, Mrs. Alateeqi is an expert business leader. Passionate about finance and investments, she has worked both sides of the table as investor and founder, having started her career in investment banking and private equity.", image: "sarah-alateeqi", linkedin: "", isExpanded: false  },
    ]);
	
	const officesListLb = [
        { country: "United Kingdom" },
        { country: "EEA Countries" },
        { country: "Australia" },
        { country: "Lebanon" },
        { country: "Jordan" },
        { country: "Nigeria" },
        { country: "Latam" },
        { country: "Indonesia" },
        { country: "Bahrain" },
        { country: "Kuwait" },
        { country: "Oman" },
        { country: "USA" },
        { country: "Canada" },
    ];

	const officesListEu = [
        { country: "United Kingdom" },
        { country: "Australia" },
        { country: "Lebanon" },
        { country: "Jordan" },
        { country: "Nigeria" },
		{ country: "Europe" },
    ];

	// Function to calculate the margin-left based on screen width and container width
	const updateMarginLeft = () => {
		const screenWidth = window.innerWidth
		// Only apply marginLeft for screens larger than the md breakpoint
		if (screenWidth >= mdBreakpoint) {
			if (containerRef.value) {
				const containerWidth = containerRef.value.offsetWidth
				const widthDifference = screenWidth - containerWidth
				marginLeft.value = (widthDifference / 2) + 16
			}
		} else {
			// Reset marginLeft for screens smaller than md
			marginLeft.value = 0
		}
	}

	onMounted(async () => {
		// Load initial countries in the country code dropdown
        loadInitialCountries();

		// Detect country immediately on component mount and assign it to form.value.code
		detectCountry().then(() => {
			initialCode.value = selectedCountry.value.code
			form.value.code = selectedCountry.value.code;
		});

		// Calculate the margin on initial mount form some section that are out of the container
		updateMarginLeft()
		window.addEventListener('resize', updateMarginLeft)
    });

	onUnmounted(() => {
		// Remove the resize event listener when the component is destroyed
		window.removeEventListener('resize', updateMarginLeft)
	})

	// Toggle function to change the `isExpanded` state
	const toggleExpand = (board) => {
		board.isExpanded = !board.isExpanded
	}

	const show = (index) => {
		activeTab.value = index;
	};
    
	const form = ref({
        first_name: '',
        last_name: '',
        email: '',
		code: '',
        mobile: '',
        message: '',
    });

    const errors = ref({
        first_name: '',
        last_name: '',
        email: '',
		code: '',
        mobile: '',
        message: '',
    });

    const validationRules = {
        first_name: {
            required: 'Please enter your first name',
            safe: 'Your input has invalid value'
        },
        last_name: {
            required: 'Please enter your last name',
            safe: 'Your input has invalid value'
        },
		email: {
            required: 'Please enter your email address',
            email: 'Please enter a valid email address',
            safe: 'Your input has invalid value'
        },
        code: {
            required: 'Please choose your country code',
            code: 'Please enter a valid country code',
            safe: 'Your input has invalid value'
        },
        mobile: {
            required: 'Please enter your mobile number',
            numeric: 'Please enter a valid numeric phone number',
            length: 'Please enter a valid phone number',
            safe: 'Your input has invalid value'
        },
        message: {
            required: 'Please enter your message',
            safe: 'Your input has invalid value'
        },
    };

	// Submitting the form
	const handleSubmit = async () => {
        // Disable the submit button
        isSubmitting.value = true;

        // Validate form fields
        const isFormValid = validateForm(form, errors, validationRules);

        // If either form or file validation fails, stop submission
        if (!isFormValid) {
            // console.log('Validation failed:', errors.value);
            isSubmitting.value = false; // Re-enable the button
            submissionMessage.value = 'Please ensure all required fields are correctly filled and try submitting again.'; // Re-enable the butto
            isError.value = true;
            return; // Stop submission if form or file validation fails
        }

        try {
            const API_ENDPOINT = 'https://backend.montyfinance.com/wp-json/contact-form-7/v1/contact-forms/7/feedback';
            const formData = new FormData();

            // Append top-level fields

            Object.keys(form.value).forEach((key) => {
				formData.append(key, form.value[key]);
            });
            formData.append('_wpcf7_unit_tag', 'rte');

            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                    // 'Content-Type': 'multipart/form-data' // No need to set this header for FormData
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            // console.log("Form submitted successfully:", data);

            if(data.status == 'validation_failed'){
                submissionMessage.value = "Error in submitting your message. Please try again later";
                isError.value = true;

                // Clear error message after 2 seconds
                setTimeout(() => {
                    submissionMessage.value = '';
                }, 2000);
                throw new Error('Validation Error');
            }

            submissionMessage.value = "Thank you for your message."
            isError.value = false;
            // Clear success message after 2 seconds
            setTimeout(() => {
                submissionMessage.value = '';
            }, 2000);

            resetForm();
            //Handle success response, such as notifying the user or redirecting
        } catch (error) {
            // console.error("Form submission error:", error);
            // Set error message
            submissionMessage.value = "Error in submitting your message. Please try again later";
            isError.value = true;

            // Clear error message after 2 seconds
            setTimeout(() => {
                submissionMessage.value = '';
            }, 2000);
        } finally {
            // Re-enable the submit button
            isSubmitting.value = false;
        }
    };

	// Resetting the form
    const resetForm = () => {
        form.value = {
			first_name: '',
			last_name: '',
			email: '',
			code: selectedCountry.value ? selectedCountry.value.code : initialCode.value,
			mobile: '',
			message: '',
        };
        errors.value = {
            first_name: '',
			last_name: '',
			email: '',
			code: '',
			mobile: '',
			message: '',
        };
    };

	// Choosing Country
    const toggleDropdown = () => {
        showDropdown.value = !showDropdown.value;

        // Reset country list and lastLoadedIndex when closing the dropdown
        if (!showDropdown.value) {
            resetDropdown();
        }
    };

    const resetDropdown = () => {
        countries.value = [];
        lastLoadedIndex.value = 0;
        filteredCountries.value = [];
        searchFlag.value = false
        searchQuery.value = ''
        loadInitialCountries();
    };

    const closeDropdown = () => {
        loadInitialCountries();
    };

    const selectCountry = (country) => {
        selectedCountry.value = country;
        form.value.code = country.code;
        emit('select', country);
        showDropdown.value = false;
        resetDropdown()
    };

    const loadInitialCountries = () => {
        loadNextCountries();
    };

    const loadNextCountries = () => {
        const batchSize = 10;
        const startIndex = lastLoadedIndex.value;
        const endIndex = startIndex + batchSize;
        const nextBatch = countriesData.slice(startIndex, endIndex);

        countries.value = [...countries.value, ...nextBatch];
        lastLoadedIndex.value = endIndex;
        filteredCountries.value = countries.value;
    };

    const handleScroll = () => {
        const container = dropdownContainer.value;
        if (searchQuery.value === '' && container.scrollTop + container.clientHeight >= container.scrollHeight - 20) {
            if (!searchFlag.value) {
                loadNextCountries();
            }
        }
    };

    const searchCountries = () => {
        const searchResults = countriesData.filter((country) =>
            country.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
        if (searchQuery.value != '') {
            filteredCountries.value = searchResults;
            searchFlag.value = true
        }
        else {
            resetDropdown();
        }
    };

    watch(searchQuery, searchCountries);
</script>

<style lang="sass" scoped>
	.marquee .wrapper:hover
		animation-play-state: paused

	.dropdown-container 
		box-shadow: 0 0.1875rem 0.5rem #00000022

</style>