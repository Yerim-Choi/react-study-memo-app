import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as WebAPI from 'lib/web-api';

// 액션 타입
const CREATE_MEMO = 'memo/CREATE_MEMO';
const GET_INITIAL_MEMO = 'memo/GET_INITIAL_MEMO';

// 액션 생성자
export const createMemo = createAction(CREATE_MEMO, WebAPI.createMemo) // { title, body }
export const getInitialMemo = createAction(GET_INITIAL_MEMO, WebAPI.getInitialMemo);


const initialState = Map({
    data: List()
});

export default handleActions({
    // 초기 메모 로딩
    ...pender({
        type: GET_INITIAL_MEMO,
        onSuccess: (state, action) => state.set('data', fromJS(action.payload.data))
    })
}, initialState);