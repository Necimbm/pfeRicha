import { USER_SIGNIN_FAIL } from "constants/userConstants";
import { USER_SIGNOUT } from "constants/userConstants";
import { USER_SIGNIN_SUCESS } from "constants/userConstants";
import { USER_SIGNIN_REQUEST } from "constants/userConstants";

export const userSigninReducer =(state={}, action)=>{
    switch(action.type){ 
        case USER_SIGNIN_REQUEST:
            return {loading:true};

        case USER_SIGNIN_SUCESS:
        return {loading:false, userInfo:action.payload};
        case USER_SIGNIN_FAIL:
            return {loading:false, error:action.payload};
        case USER_SIGNOUT:
            return {};
        default:
                return state;
    }
}