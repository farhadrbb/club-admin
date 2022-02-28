import {
    CHANGE_BROKER_SELECT_IMG
} from "../../typeActions";

import ApiConfig from '../../../../Containers/Common/Components/apiConfig';
import { handleNoAnswarApi , handleAlertMethodSelect } from "../../../../Containers/Common/method/handleAlertAndSelectApi";




export function changeBroker_v1_select_actions_Img(data) {

    return async (dispatch) => {
        // dispatch({ type: LOGIN_V1_loading });
        let config = { url: "select_request" };

        let _data = {
            table: "changebroker",
            method_type: "select_change_brokers",
            data: data ? data : {}
        }

        try {
            let response = await ApiConfig(config, _data)

            let isOk = handleAlertMethodSelect(response.data, dispatch)
            if (!isOk) {
                return
            }

            if (!response.data.response.data.results.length) {
                dispatch({ type: "ALERT", payload: { status: true, textAlert: "رکوردی وجود ندارد", typeAlert: "warning" } })
                return;
            }

            dispatch({ type: CHANGE_BROKER_SELECT_IMG, payload: response.data })
         

        } catch (err) {
            handleNoAnswarApi(dispatch)
        }

    }
}