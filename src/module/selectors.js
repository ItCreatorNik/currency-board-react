export const selectCoinsModuleState = (state) => state.coins;

export const selectCoinsState = (state) => selectCoinsModuleState(state).coins;


export const selectIsCoinsLoading = (state) => selectCoinsModuleState(state).isLoading;