import { coinsSlice } from "../index";

const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"


export function loadCoins() {
    return function (dispatch) {

        dispatch(coinsSlice.actions.startLoading(null));

        fetch(url)
            .then((response) => response.json())
            .then((coins) => {
                dispatch(coinsSlice.actions.finishLoading(coins));
            })
            .catch((error) => {
                dispatch(coinsSlice.actions.failLoading(error));
            });
    };
}