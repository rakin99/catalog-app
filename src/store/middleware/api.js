import axios from "axios";
import * as actions from "../api";

const api =
    ({ dispatch }) =>
    (next) =>
    async (action) => {
        if (action.type !== actions.apiCallBegan.type) return next(action);
        
        const { method, data, onStart, onSuccess, onError, sort, offset } = action.payload;
        const filter = action.payload.filter?'&languages=en':'';
        const keywords = action.payload.keywords?`&keywords=${action.payload.keywords}`:'';
        const url = `${action.payload.url}?access_key=${action.payload.apiKey}&categories=${action.payload.category}${keywords}${filter}&sort=${sort}&offset=${offset}`

        if (onStart) dispatch({ type: onStart });

        next(action);

        try {
            const response = await axios.request({
                baseURL: "http://api.mediastack.com/v1/",
                url,
                method,
                data,
            });
            //General
            dispatch(actions.apiCallSuccess(response.data));
            //Specific
            if (onSuccess){
                dispatch({ type: onSuccess, payload: {category:action.payload.category,data:response.data,sort:action.payload.sort,scroll:action.payload.scroll} });
            }
                
        } catch (error) {
            //General
            dispatch(actions.apiCallFailed(error.message));
            //Specific
            if (onError) dispatch({ type: onError, payload: error.message });
        }
    };

export default api;
