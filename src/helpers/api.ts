import axios from "axios";

const instance = axios.create({
  baseURL: "https://real-estate-demo-test.herokuapp.com/"
});

export default instance;