import http from "./httpService";
import { apiUrl, apiUrl1 } from "../config.json";

export async function getAllProducts(catg, brand, search) {
  let url = apiUrl + "/products";
  if (catg) {
    url = url + "/" + catg;
  }
  if (brand) {
    url = url + "/" + brand;
  }
  url = url + search;
  let { data } = await http.get(url);
  return data;
}

export async function getAllProductsLap(catg, brand, search) {
  let url = apiUrl1 + "/products";
  if (catg) {
    url = url + "/" + catg;
  }
  if (brand) {
    url = url + "/" + brand;
  }
  url = url + search;
  let { data } = await http.get(url);
  return data;
}

export async function getAllDeals() {
  let url = apiUrl + "/deals";
  let { data } = await http.get(url);
  return data;
}

export async function getParticularProduct(id) {
  let url = apiUrl + "/product/" + id;
  let { data } = await http.get(url);
  return data;
}

export async function getParticularProductLap(Cat, id) {
  let url = apiUrl1 + "/product/" + Cat + "/" + id;
  let { data } = await http.get(url);
  return data;
}

export async function getBankOffers() {
  let url = apiUrl + "/bankOffers";
  let { data } = await http.get(url);
  return data;
}

export default {
  getAllProducts,
  getAllDeals,
  getParticularProduct,
  getBankOffers,
  getAllProductsLap,
  getParticularProductLap,
};
