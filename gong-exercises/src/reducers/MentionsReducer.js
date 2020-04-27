import InitialData from "../data/InitialData";
import MentionActions from "../actions/MentionActions";

export const mentionsReducer = function(state = InitialData.mentions, action) {
    switch (action.type) {
        case MentionActions.ADD_MENTION:
            return [action.mention, ...state];
        default:
            return state;

    }
};
