const axios = require('axios');

//const url = process.env.API_URL;
const url = 'http://localhost:8000/api';

export const login = async (email: string, password: string): Promise<[string, string, null] | [string, string, string]>=> {
  const data = {
    email,
    password
  };

  const config = {
    method: 'post',
    url: `${url}/login`,
    headers: {
      'Content-Type': 'application/json'
    },
    data
  }

  try {
    const response = await axios(config);
    return [response.data.token, response.data.role, null];
  } catch (e: any) {
    return ["", "", `${e.code}: ${e.message}`];
  }
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