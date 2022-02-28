import {
    REGISTRATION_GUIDE_V1_SELECT
} from "../../../typeActions";

import ApiConfig from '../../../../../Containers/Common/Components/apiConfig';
import { handleNoAnswarApi , handleAlertMethodSelect } from "../../../../../Containers/Common/method/handleAlertAndSelectApi";




export function registration_guide_v1_select_actions() {

    return async (dispatch) => {
        // dispatch({ type: LOGIN_V1_loading });
        let config = { url: "select_request" };

        let _data = {
            table: "static",
            method_type: "select",
            data: {
                name: "registration_guide"
            }
        }

        try {
            let response = await ApiConfig(config, _data)
        
            let isOk = handleAlertMethodSelect(response.data, dispatch)
            if (!isOk) {
                return
            }


            dispatch({ type: REGISTRATION_GUIDE_V1_SELECT, payload: response.data })

        } catch (err) {
            handleNoAnswarApi(dispatch)
        }

    }
}