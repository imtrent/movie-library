const movieReducerDefaultState = [];

const moviesReducer = (state = movieReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.movies;
        default:
            return [...state];
    }
};

export default moviesReducer;
