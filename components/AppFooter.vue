<template lang="">
    <AppFooterEU v-if="currentRoute === '/eu'"/>
    <AppFooterLB v-else/>
</template>

<!-- <script setup>
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
            const emailCheckResponse = await fetch(`https://backend.montyfinance.com/wp-json/custom/v1/check-email?email=${form.value.newsletter_email}`);
            
            if (!emailCheckResponse.ok) {
                throw new Error('Failed to check email');
            }

            const emailCheckData = await emailCheckResponse.json();

            if (emailCheckData.exists) {
                errors.value.newsletter_email = 'This email address is already subscribed.';
                isSubmitting.value = false; // Re-enable the button
                return;
            }
            
            const API_ENDPOINT = 'https://backend.montyfinance.com/wp-json/contact-form-7/v1/contact-forms/6/feedback';
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
</script> -->

<style lang="">

</style>