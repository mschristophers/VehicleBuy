// Data layer and logic goes here
export const initialState = {
    favorite: [],
    user: null,
};

// reduce -> accumulator
export const getFavoritesTotal = (favorite) =>
    favorite?.reduce((amount, item) => item.price + amount, 0);

// data layer is state
// action alters data layer
const reducer = (state, action) => {
    console.log(action); // important
    switch(action.type) {
        case "SET_USER": // Update user when logging in/out
            return {
                ...state, // ... = current
                user: action.user,
            }
        case "ADD_TO_FAVORITES":
            return {
                ...state,
                favorite: [...state.favorite, action.item]
            };
        case "REMOVE_FROM_FAVORITES":
            // Cloning the favorite lists
            let newFavorites = [...state.favorite];
        

            const index = state.favorite.findIndex((favoriteItem) => favoriteItem.id === action.id);

            if (index >= 0) {
                // Items exist in lists, remove them
                newFavorites.splice(index, 1);
            } else {
                console.warn (
                    `Cannot remove product (id: ${action.id}) as it is not in favorites`
                );
            }

            return { 
                ...state, 
                favorite: newFavorites,
            };
        default:
            return state;
    }
}

export default reducer;