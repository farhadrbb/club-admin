import ApiConfig from '../../../../../Containers/Common/Components/apiConfig';
import { handleNoAnswarApi , handleAlertAndSelectApi } from "../../../../../Containers/Common/method/handleAlertAndSelectApi";




export function post_v1_actions_enable(id  , action , parent_post_id) {

    return async (dispatch) => {
        // dispatch({ type: faq_V1_loading });
        let config = { url: "update_request" };

        let _data = {
            table: "post",
            method_type: "enable_post",
            data: {
                _id : id
            }
        }

        try {
            // dispatch({ type: "ALERT", payload: { status: true, textAlert: "در حال بازخوانی", typeAlert: "info" } })

            let response = await ApiConfig(config, _data)

            if (response.data.status !== 200 || !response.data.response.is_successful) {
                handleNoAnswarApi(dispatch)
                return
            }
            dispatch({ type: "ALERT", payload: { status: true, textAlert: "درخواست شما با موفقیت انجام شد.", typeAlert: "success" } })

            handleAlertAndSelectApi(response.data, action, dispatch , parent_post_id )


        } catch (err) {
            handleNoAnswarApi(dispatch)
        }

    }
}