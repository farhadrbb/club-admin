import { SECTOR_V1_MANAGEMENT_DATA_SELECT } from "../../../typeActions";

const initState = {
  data: [],
  size: 20,
  total: 10000,
};

export const management_data_sector_Reducer = (
  state = initState,
  { type, payload }
) => {
  switch (type) {
    case SECTOR_V1_MANAGEMENT_DATA_SELECT:
      return {
        ...state,
        data: payload.results,
        total: payload?.total ? payload.total : 10000,
      };

    default:
      return state;
  }
};
