const axios = require("axios");
console.log(new Date()); // Helps in checking the proper working

 axios.get("")  // enter API here - make sure API is not on local host but is hosted on a domain
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });