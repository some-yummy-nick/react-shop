import mock from '../data/mock';

let basketItems = JSON.parse(localStorage.getItem("basket"));
if (!basketItems) {
    basketItems = [];
}
export default function basket(state = basketItems, action) {
    switch (action.type) {
        case "ADD_ITEM":
            const newArr = mock.slice(0);
            const itemId = action.item;

            const item = newArr.filter((element) => {
                return element.id === itemId;
            });

            const basketArr = state.slice(0);

            const itemBasket = basketArr.filter((element) => {
                return element.id === item[0].id;
            });
            let returnObj;

            if (item && !itemBasket.length) {
                state.push(item[0]);
                let serialObj = JSON.stringify(state);
                localStorage.setItem("basket", serialObj);
                returnObj = JSON.parse(localStorage.getItem("basket"));
            }

            return returnObj || state;

        case "REMOVE_ITEM":
            let returnOb = JSON.parse(localStorage.getItem("basket"));
            const itemI = action.item;

            const oldArr = returnOb.slice(0);
            const newAr = oldArr.filter((element) => {
                return element.id !== itemI;
            });

            let serialObj = JSON.stringify(newAr);
            localStorage.setItem("basket", serialObj);
            let returnO = JSON.parse(localStorage.getItem("basket"));
            return returnO || state;

        default:
            return state;
    }
}
