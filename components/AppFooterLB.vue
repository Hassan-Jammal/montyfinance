<template lang="">
    <footer class="py-16 bg-gradient-to-r from-[#585E8D] to-[#09052B]">
        <div class="container">
            <div class="flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
                <div class="w-full flex max-md:flex-col justify-between lg:items-end gap-10">
                    <AppLogoWhite class="shrink-0" />
                    <div class="flex flex-col gap-4 text-white text-sm">
                        <div class="flex max-md:flex-col lg:items-center gap-4 lg:gap-12 justify-end">
                            <NuxtLink :to="'/lb/code-of-conduct'" class="hover:text-[#DFDFE0]">Code Of Conduct</NuxtLink>
                            <NuxtLink :to="'/lb/cookies-policy'" class="hover:text-[#DFDFE0]">Cookies Policy</NuxtLink>
                            <NuxtLink :to="'/lb/data-protection-policy'" class="hover:text-[#DFDFE0]">Data Protection Policy</NuxtLink>
                            <NuxtLink :to="'/lb/terms-and-conditions'" class="hover:text-[#DFDFE0]">Terms and Conditions</NuxtLink>
                        </div>
                        <div class="flex max-md:flex-col lg:items-center gap-4 lg:gap-12 justify-end">
                            <a href="https://mymonty.com.lb/customer-rights-and-duties" class="hover:text-[#DFDFE0]">Customer Rights and Duties</a>
                            <a href="https://mymonty.vercel.app/complaints" class="hover:text-[#DFDFE0]">Complaints</a>
                            <a href="https://mymonty.vercel.app/key-facts-statements" class="hover:text-[#DFDFE0]">Key Fact Statements</a>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-1">
                    <div class="flex"> 
                        <input v-model="form.newsletter_email" type="text" id="newsletter_email" placeholder="Subscribe to our newsletter here" class="w-full md:w-[350px] text-sm px-4 py-3 text-black border border-r-0 border-[#D0D5DD] rounded-l-md outline-none">
                        <button type="submit" id="submit" class="flex p-3 border border-[#585E8D] rounded-r-md text-white text-center bg-[#585E8D] hover:bg-[#09052B] transition-all duration-300 ease-in-out" @click.prevent="handleSubmit">
                            <Icon name="material-symbols:arrow-right-alt-rounded" class="text-2xl" />
                        </button>
                    </div>
                    <div v-if="errors.newsletter_email" class="text-xs text-red-500">{{ errors.newsletter_email }}</div>
                    <div v-if="submissionMessage" class="text-xs text-gray-500">{{ submissionMessage }}</div>
                </div>
            </div>

            <hr class="my-6" />

            <p class="text-sm text-white text-base opacity-80">Monty Finance S.A.L. Capital: 50.000.000.000 LBP. Head Office: Gefinor Center, Clemenceau Street, Hamra, Beirut, Lebanon. ROC Beirut No. 73215. Authorized by the Banque du Liban (“BDL”) to operate as a financial institution and an e-wallet service provider. Listed on BDL’s list of financial institutions under No. 23.</p>
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

<script setup>
    // Submission State
    const submissionMessage = ref('');
    const isSubmitting = ref(false);

    const form = ref({
        newsletter_email: '',
    });

    const errors = ref({
        newsletter_email: '',
    });

    const validationRules = {
		newsletter_email: {
            required: 'Please enter your email address',
            email: 'Please enter a valid email address',
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
            return; // Stop submission if form or file validation fails
        }
        
        try {
            // Check functions.php for the check email function (Theme 2024)
            // Add the form ID to the request
            const emailCheckResponse = await fetch(`http://backend.montyfinance.localhost/wp-json/custom/v1/check-email?email=${form.value.newsletter_email}`);
            
            if (!emailCheckResponse.ok) {
                throw new Error('Failed to check email');
            }

            const emailCheckData = await emailCheckResponse.json();

            if (emailCheckData.exists) {
                errors.value.newsletter_email = 'This email address is already subscribed.';
                isSubmitting.value = false; // Re-enable the button
                return;
            }
            
            const API_ENDPOINT = 'http://backend.montyfinance.localhost/wp-json/contact-form-7/v1/contact-forms/6/feedback';
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
                throw new Error('Validation Error');
            }

            submissionMessage.value = "Thank you for your message."
            
            // Clear success message after 2 seconds
            setTimeout(() => {
                submissionMessage.value = '';
            }, 2000);

            resetForm();
            //Handle success response, such as notifying the user or redirecting
        } catch (error) {
            // console.error("Form submission error:", error);
        } finally {
            // Re-enable the submit button
            isSubmitting.value = false;
        }
    };

    const resetForm = () => {
        form.value = {
			newsletter_email: '',
        };
        errors.value = {
			newsletter_email: '',
        };
    };
</script>