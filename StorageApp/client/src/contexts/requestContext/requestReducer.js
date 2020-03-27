export const requestReducer = ( state, action) => {
    switch(action.type){
        case 'ADD_REQUEST':
            return[ ...state, {
                id: action.request.id,
                product: action.request.product,
                quantity: action.request.quantity,
                price: action.request.price,
                shop: action.request.shop,
                sum: (parseFloat(action.request.price)*parseFloat(action.request.quantity)).toFixed(2),
                done: false
            }]
        case 'REMOVE_REQUEST':
            return state.filter(request => request.id !== action.id);
        case 'DONE_REQUEST':
            return state.map(request => request.id === action.id ? { ...request, done: true } : request);
        case 'UNDONE_REQUEST':
            return state.map(request => request.id === action.id ? { ...request, done: false } : request);
        default:
            return state;    
    }
}