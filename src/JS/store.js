import { createStore } from "redux";
import reducers from "./reducers";

const myStore = createStore(reducers)

export default myStore;