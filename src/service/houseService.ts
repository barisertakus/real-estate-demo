import api from "../helpers/api";
import { House } from "../types";

export default {
  getAll: () => {
    return api.get<House[]>("house");
  },
};
