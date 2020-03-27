export const shopsReducer = (state, action) => {
    switch(action.type){
        case 'ADD_SHOP':
            return[ ...state, {
                id: action.shop.id,
                name: action.shop.name,
                notice: action.shop.notice
            }]
        case 'REMOVE_SHOP':
            return state.filter(shops => shops.id !== action.id);  
        default:
            return state;    
    }
} 