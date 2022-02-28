import {
    ACCOUNTS_V1_SELECT,
} from "../../typeActions";


const initState = {
    data: ""
}


export const  ACCOUNTS_v1_select_Reducer = (state = initState, { type, payload }) => {

    switch (type) {
        case ACCOUNTS_V1_SELECT:
            return { data: payload }
        default:
            return state;
    }
}
