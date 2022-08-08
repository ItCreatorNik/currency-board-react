import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Coins } from "./components/Coins";
import { Navbar } from "./components/Navbar";
import { selectCoinsState, selectIsCoinsLoading } from "./module/selectors";
import { loadCoins } from "./module/thunks/load-coins";

export const App = () => {

  const dispatch = useDispatch();
  const coins = useSelector(selectCoinsState);
  const isLoading = useSelector(selectIsCoinsLoading);
 
  useEffect(() => {
    dispatch(loadCoins());
  }, [dispatch]);

  // console.log(coins)

  return isLoading ? (
    <span>Loading...</span> ) : (
    <>
     <Navbar/>
        <Coins coins={coins}/>
    </>
  );
}

