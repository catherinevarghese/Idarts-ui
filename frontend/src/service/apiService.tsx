import axios from "axios";

export const getApi = async (url: string) => {
  try {
    let resp = await axios.get("http://localhost:5000/" + url);
    return resp;
  } catch (err: any) {
    throw err;
  }
};
