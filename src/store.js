import { createStore } from "redux";
import newsApp from "./components/Reducer/reducer";

const store = createStore(newsApp);

export default store;
