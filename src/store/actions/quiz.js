import axios from '../../axios/axios-quiz';
import {FETCH_QUIZES_ERROR, FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS} from './actionTypes'

export function fetchQuizes() {
    return async dispatch => {
        dispatch(fetchQuizesStart());

        try {
            const responce = await axios.get("quizes.json");
            console.log(responce.data);
            const quizes = [];

            Object.keys(responce.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест ${index + 1}`
                });
            });

            dispatch(fetchQuizesSuccess(quizes));
           
        } catch (err) {
            dispatch(fetchQuizesError(err));
        }
        
    }
}

export function fetchQuizesStart(){
    return {
        type: FETCH_QUIZES_START
    }
}

export function fetchQuizesSuccess(quizes){
    return {
        type: FETCH_QUIZES_SUCCESS,
        quizes
    }
}

export function fetchQuizesError(err){
    return {
        type: FETCH_QUIZES_ERROR,
        errror: err
    }
}