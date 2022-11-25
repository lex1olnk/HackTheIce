const axios = require("axios");

const options = {
  method: 'POST',
  url: 'https://nexmo-nexmo-sms-verify-v1.p.rapidapi.com/send-verification-code',
  params: {phoneNumber: '79141009043', brand: 'HackTheIce'},
  headers: {
    'X-RapidAPI-Key': 'a13c0ecc50mshfdf2a4c610c2d1ep19ee7ajsn26663e85d963',
    'X-RapidAPI-Host': 'nexmo-nexmo-sms-verify-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});