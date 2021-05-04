const fs = require('fs');
const axios=require('axios');


// Make a request for a user with a given ID
axios.get('http://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    // handle success
    console.log(response,'this is the response');

    
const responseString =JSON.stringify(response.data);

fs.writeFile('./post.json', responseString, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})

  })
  .catch(function (error) {
    // handle error
    console.log(error,'this is an error');
  })
