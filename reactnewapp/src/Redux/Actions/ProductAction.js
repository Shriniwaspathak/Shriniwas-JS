import { ActionType } from "../Contants/Action_type"
export const setProducts=(products)=>{
    return  {
        type:ActionType.SET_PRODUCTES,
        payload:products
    };
};

export const selectedProducts=(products)=>{
    return  {
        type:ActionType.SELECTED_PRODUCTES,
        payload:products
    };
};