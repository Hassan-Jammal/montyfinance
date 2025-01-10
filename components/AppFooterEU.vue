<template lang="">
    <footer class="py-16 bg-gradient-to-r from-[#585E8Dc2] via-10% to-white">
        <div class="container">
            <div class="flex flex-col md:flex-row justify-between items-center md:items-between gap-4">
                <AppLogoWhite class="max-md:mx-auto" />

                <!-- <div class="flex flex-col gap-1">
                    <div class="flex"> 
                        <input v-model="form.newsletter_email" type="text" id="newsletter_email" placeholder="Subscribe to our newsletter here" class="w-full md:w-[350px] text-sm px-4 py-3 text-black border border-r-0 border-[#D0D5DD] rounded-l-md outline-none">
                        <button type="submit" id="submit" class="flex p-3 border border-[#585E8D] rounded-r-md text-white text-center bg-[#585E8D] hover:bg-[#09052B] transition-all duration-300 ease-in-out" @click.prevent="handleSubmit">
                            <Icon name="material-symbols:arrow-right-alt-rounded" class="text-2xl" />
                        </button>
                    </div>
                    <div v-if="errors.newsletter_email" class="text-xs text-red-500">{{ errors.newsletter_email }}</div>
                    <div v-if="submissionMessage" class="text-xs text-gray-500">{{ submissionMessage }}</div>
                </div> -->

                <div class="flex items-center gap-2 text-[#73788B]">
                    <img src="/images/mail-1.svg" alt="Mail" width="20" height="14" />
                    <a class="text-base font-medium hover:text-[#09052B] transition-all duration-300 ease-in-out" href="mailto:supportlb@montyfinance.com">supportlb@montyfinance.com</a>
                </div>
            </div>

            <!-- <hr class="my-6" /> -->

            <!-- <div class="flex justify-between items-between gap-4">
                <div class="flex items-center gap-4">
                    <a class="flex" href="" target="_blank" aria-label="Linkedin" rel="noopener">
                        <Icon name="ri:linkedin-fill" class="text-xl text-white hover:text-[#09052B] transition-all duration-300 ease-in-out" />
                    </a>
                    <a class="flex" href="" target="_blank" aria-label="Facebook" rel="noopener">
                        <Icon name="ri:facebook-fill" class="text-xl text-white hover:text-[#09052B] transition-all duration-300 ease-in-out" />
                    </a>
                </div>
                <div class="flex items-center gap-2 text-[#73788B]">
                    <img class="mt-3" src="/images/mail-1.svg" alt="Mail" width="20" height="14" />
                    <a class="text-base font-medium hover:text-[#09052B] transition-all duration-300 ease-in-out" href="mailto:supportlb@montyfinance.com">supportlb@montyfinance.com</a>
                </div>
            </div> -->
        </div>
    </footer>
</template>