import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./ChatSlice";
import searchSlice from "./searchSlice";





const store = configureStore({
      reducer:{
        app:appSlice,
        search:searchSlice,
        chat:chatSlice,
      },
});

export default store;