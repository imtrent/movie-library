const genresReducerDefaultState = {
    genres: [],
    selected: {}
};

const genresReducer = (state = genresReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return {
                ...state,
                genres: action.genres
            };
        case 'SET_SELECTED':
            return {
                ...state,
                selected: action.selected
            };
        default:
            return state;
    }
};

export default genresReducer;
