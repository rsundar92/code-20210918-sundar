import axios from "axios";

export function getProductCatalog() {
    return axios.get('data/ProductCatalog.json');
}

export function getCarSpecs() {
    return axios.get('data/CarSpecs.json');
}