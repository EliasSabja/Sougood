const axios = require('axios');

//const url = process.env.API_URL;
const url = 'http://localhost:8000/api';

export const login = () => {

}

export const register = (email: string, password: string) => {
  const data = {
    email,
    password
  };

  console.log(data);
  
  const config = {
    method: 'post',
    url: `${url}/user`,
    headers: {
      'Content-Type': 'application/json'
    },
    data
  }

  axios(config)
    .then((response: any) => {
      console.log("Response");
      console.log(response);
      return response;
    })
    .catch((err: any) => alert(err))
}