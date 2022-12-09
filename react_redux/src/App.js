import { Provider } from "react-redux"
import store from "./redux/store"
import CakeContainer from "./components/CakeContainer"
import HooksCakeContainer from "./components/HooksCakeContainer";
import IcecreamContainer from "./components/IcecreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserList from "./components/UserList";

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        {/* <ItemContainer cake></ItemContainer>
        <ItemContainer></ItemContainer>
        <CakeContainer></CakeContainer>
        <HooksCakeContainer></HooksCakeContainer>
        <IcecreamContainer></IcecreamContainer>
        <NewCakeContainer></NewCakeContainer> */}
        <UserList></UserList>
      </div>
    </Provider>
  );
}

export default App;
