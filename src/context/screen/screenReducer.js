import {ActionType} from '../../const';

const handlers = {
    [ActionType.CHANGE_SCREEN]: (state, payload) => payload,
    DEFAULT: (state) => state
};

export const screenReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action.payload);
}