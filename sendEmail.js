import emailjs from 'emailjs-com';

const sendEmail = (templateParams) => {
  emailjs.send('service_pfeu1e8', 'template_d12s1wp', templateParams, 'Qhq7_V5mvx8lHtiX_')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (error) => {
      console.log('FAILED...', error);
    });
}

export default sendEmail;