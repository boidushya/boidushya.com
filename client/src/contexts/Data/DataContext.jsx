import { createContext } from "react";
import { initialState } from "./initialState";

const DataContext = createContext(initialState);

export default DataContext;
