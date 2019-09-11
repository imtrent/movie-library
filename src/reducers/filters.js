const filtersReducerDefaultState = {
    popularity: false,
    release: false,
    votes: false
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SORT_BY_POPULARITY':
            return {
                ...state
            };
        default:
            return state;
    }
};

export default filtersReducer;
