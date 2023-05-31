import emailjs from '@emailjs/browser';

export const sendEmail = async (templateParams) => {
    emailjs.send('service_r37pmmh', 'template_uz5u65m', templateParams,'dV0KM91KlAjnaroie')
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            
        }, function (error) {
            
            console.log('FAILED...', error);
        });
};

