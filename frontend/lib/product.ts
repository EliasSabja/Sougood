const axios = require('axios');
import { API_URL } from "../config/config";
import Product from "../types/product";

export const getProducts = async (): Promise<Product[]>=> {
  let products = [];

  const config = {
    method: 'get',
    url: `${API_URL}/product`,
    headers: { }
  };

  try {
    const response = await axios(config);
    products = response.data.products;
  } catch (e: any) {
    alert(`Error: ${e.message}`);
  }

  return products;
}