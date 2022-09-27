import {configureStore} from "@reduxjs/toolkit";
import PostReducer from "./feature/postSlice";

export default configureStore ({
    reducer: {
        app: PostReducer,
    },
});
