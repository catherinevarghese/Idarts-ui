import { getApi  } from "./apiService";
import {STOCK_DETAILS_END_POINT} from '../constants/index';

export const getStockDetails = async function () {
    return await getApi(STOCK_DETAILS_END_POINT)
  };