import {configureStore} from '@reduxjs/toolkit';
import Slice from '../slices/UserSlices';

const Store = configureStore({
    reducer:{
        dashboard: Slice,
    }
});

export default Store;