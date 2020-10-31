import * as types from '../common/actionTypes/app'
import { axios } from './axiosConfig'

export const setAppLoading = (isLoading) => (dispatch) => {
    dispatch({
        type: types.SET_LOADING,
        data: isLoading,
    })
}
