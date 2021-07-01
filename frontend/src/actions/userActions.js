import axios from "axios";
import { USER_SIGNOUT } from "constants/userConstants";
import { USER_SIGNIN_SUCESS } from "constants/userConstants";
import { USER_SIGNIN_FAIL } from "constants/userConstants";
import { USER_SIGNIN_REQUEST } from "constants/userConstants";

import { USER_SIGNUP_SUCESS } from "constants/userConstants";
import { USER_SIGNUP_FAIL } from "constants/userConstants";
import { USER_SIGNUP_REQUEST } from "constants/userConstants"

export const signin=(email, password)=> async(dispatch)=>{
dispatch({type: USER_SIGNIN_REQUEST, payload:{email,password}});
try{ 

    const {data}= await axios.post('/api/user/signin', {email,password});
    dispatch({type: USER_SIGNIN_SUCESS, payload:data});
    localStorage.setItem("userInfo",JSON.stringify(data));

} catch(error){
    dispatch({
        type: USER_SIGNIN_FAIL, 
        payload: error.response && error.response.data.message
        ? error.response.data.message 
        :error.message, 
    });
}
}

//signUp action
export const signup=(email, password,name,role) => async(dispatch)=>{
    dispatch({type: USER_SIGNUP_REQUEST, payload:{email,password}});
    try{ 
    
        const {data}= await axios.post('/api/user/register', {email,password,name,role});
        dispatch({type: USER_SIGNUP_SUCESS, payload:data});
        dispatch({ type: USER_SIGNIN_SUCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    
    } catch(error){
        dispatch({
            type: USER_SIGNUP_FAIL, 
            payload: error.response && error.response.data.message
            ? error.response.data.message 
            :error.message, 
        });
    }
    }
export const signout = ()=>(dispatch)=>{
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cartItems");
    dispatch({
        type: USER_SIGNOUT
    })
}