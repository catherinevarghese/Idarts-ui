import { getApi  } from "./apiService";

export const getStockDetails = async function () {
    return await getApi("stockDetails")
  };