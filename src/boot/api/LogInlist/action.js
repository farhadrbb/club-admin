
import ApiConfig from "../../../Containers/Common/Components/apiConfig";
import { handleNoAnswarApi , handleAlertMethodSelect } from "../../../Containers/Common/method/handleAlertAndSelectApi";
import { LOG_IN_LIST_SELECT } from "../typeActions";

export const logInList_select_log = ( size,from, data,sort_by) => {
  return async (dispatch) => {
    let config = { url: "select_request" };
    
    let _data = {
      table: "clubmember",
      method_type: "select_login_log",
      
      from: from ? (from - 1) * size : 0,
      data: data ? data : {},
      size: size,
      sort_by: sort_by,
    };
    
    try {
      dispatch({
        type: "ALERT",
        payload: {
          status: true,
          textAlert: "در حال بازخوانی",
          typeAlert: "info",
        },
      });
    
      let res = await ApiConfig(config, _data);


      let isOk = handleAlertMethodSelect(res.data ,dispatch )
      if(!isOk){
              return 
      }

      if (!res.data.response.data.results.length) {
        dispatch({
          type: "ALERT",
          payload: {
            status: true,
            textAlert: "اعلان بیشتری وجود ندارد",
            typeAlert: "warning",
          },
        });
      }

      dispatch({
        type: LOG_IN_LIST_SELECT,
        payload: res.data,
      });
    } catch (err) {
      handleNoAnswarApi(dispatch);
    }
  };
};
