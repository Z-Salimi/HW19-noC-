import { Provider } from "react-redux";
// import store from "./Thunk/store";
// import store from "./Middleware/store";
// import store from "./Persist/store";
import store from "./logger/store";
import AppM from "./Middleware/AppM";
import AppT from "./Thunk/AppT";
import AppL from "./logger/AppL";
import AppP from "./Persist/AppP";
import AppR from "./recoil/AppR";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    // <Provider store={store}>
    //   <AppL />
    //   {/* <AppM /> */}
    //   {/* <AppT /> */}
    //   {/* <AppP /> */}
    // </Provider>
    <RecoilRoot>
      <AppR />
    </RecoilRoot>
  );
};

export default App;
