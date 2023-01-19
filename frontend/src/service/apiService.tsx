import axios from "axios";
import {BASE_URL} from "../constants/index"

export const getApi = async (url: string) => {
  try {
    let resp = await axios.get(`${BASE_URL}${url}` );
    return resp;
  } catch (err: any) {
    throw err;
  }
};
