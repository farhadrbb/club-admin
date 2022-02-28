
import { ORDERS_V1_SELECT } from "../../../typeActions";

const initState = {
  data: [],
  isOk: false,
  from: 0,
  size: 20,
  total: 10000,
};

export const orders_select_Reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ORDERS_V1_SELECT:
      return {
        ...state,
        data: payload.response.data.results,
        total: payload.response.data.total
          ? payload.response.data.total > 10000 ? 10000 : payload.response.data.total
          : 0,
      };

    default:
      return state;
  }
};
