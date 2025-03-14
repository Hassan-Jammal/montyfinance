<template>
    <section class="bg-gray-100 py-32">
        <div class="container">
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-12 items-center">
                <div class="flex flex-col justify-center">
                    <div class="flex gap-1 text-sm text-[#C7D165] font-libre font-bold uppercase">
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0.5H4.89919H0V5.41129V12.5" fill="#C7D165"/>
                        </svg>
                        <h2>Code of Conduct</h2>
                    </div>
                    <h3 class="mt-6 text-2xl lg:text-5xl font-lora font-bold">COMPLIANCE WITH CONDUCT RULES</h3>
                </div>
                <div class="max-lg:hidden"></div>
                <div>
                    <p class="mt-2 text-base text-[#73788B]">We're committed to revolutionizing the global approach to money – to simplify, enhance, and enrich the experience for everyone.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 md:py-32 mx-auto">
        <div class="container">
            <div class="mt-24">
                <div v-for="(section, index) in sections" :key="index" class="flex max-lg:flex-col gap-12 lg:gap-24 xl:gap-48 mt-24">
                    <div class="flex-1" :class="{ 'lg:order-1': index % 2 !== 0 }">
                        <img :src="`/images/${section.image}.webp`" :alt="section.title" width="992" height="788" />
                    </div>
                    <div class="flex-1 flex flex-col justify-center" :class="{ 'lg:order-0': index % 2 !== 0 }">
                        <p class="text-xl text-[#09052B] font-lora font-bold">{{ section.title }}</p>
                        <ol class="mt-6 text-base text-[#73788B] list-decimal px-4">
                            <li v-for="(point, i) in section.points" :key="i">{{ point }}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    const sections = [
        {
            title: 'Professionalism',
            points: [
            'Our employees are expected to work responsibly, actively, pragmatically, and devotedly, and to contribute to ensure world-class service in the new era.',
            'They shall fulfill their duties legally, diligently, ethically, honestly and within the scope of authority granted to them. No activities beyond authority are allowed.'
            ],
            image: 'professionalism'
        },
        {
            title: 'Integrity',
            points: [
            'It is forbidden for our employees to claim or accept cash, marketable securities, gifts, special services, privileges and other property or non-property rights or benefits from customers, suppliers, competitors, subordinating institutions, and other business-related parties under any name and in any form.',
            'They are prohibited from seeking any improper benefits in their official capacity for themselves, relatives, friends, or other individuals.'
            ],
            image: 'integrity'
        },
        {
            title: 'Conflict of interest',
            points: [
            'As professionals, our employees make business decisions every day. In making such decisions, they become responsible for remaining free from influence, or the appearance of influence.',
            'They shall avoid any situation where their private or personal interests may conflict or appear to conflict with their duties to the company.'
            ],
            image: 'conflict-of-interest'
        },
        {
            title: 'Honesty and Harmony',
            points: [
            'Our employees shall ensure the authenticity, accuracy, completeness, and timeliness of working records.',
            'They should respect each other and be empathic towards each other.'
            ],
            image: 'honesty-and-harmony'
        },
        {
            title: 'Treating customers fairly',
            points: [
            'Our employees shall not show indifference, arrogance, rudeness, or discrimination against customers based on factors such as nationality, ethnicity, religion, age, gender, color, disability, or amount of business.',
            'Our employees shall deal with customers fairly and transparently, taking the time to explain the risks and benefits, and informing them of any changes in these conditions. Employees will also respond with high professionalism, accuracy, and speed to any inquiries a customer makes.'
            ],
            image: 'treating-customers-fairly'
        },
        {
            title: 'Confidentiality and data protection',
            points: [
            'Our employees are bound by the provisions of the Lebanese Law of 3 September 1956 on Banking Secrecy in the interest of its customers.',
            'Furthermore, Personal data held by or on behalf of us must be used in compliance with data protection laws.'
            ],
            image: 'confidentiality-and-data-protection'
        }
    ];
</script>