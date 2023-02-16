import { useContext } from "react";
import { rootStoreContext } from "../store";

/* if (process.env.NODE_ENV === 'developmint') {
    const { enableLogging } = require("mobx-logger");
    enableLogging();
} */

export const useStore = () => useContext(rootStoreContext);