import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface UserState {
    uid:string|null|undefined
    name: string|null|undefined
    email:string|null|undefined
    phone:number|null|undefined
}

// Define the initial state using that type
const initialState: UserState = {
  uid:null,
  name:null,
  email:null,
  phone:null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUser: (state, action: PayloadAction<UserState>) => {
        const { uid, name, email,phone } = action.payload;
        state.uid = uid;
        state.name = name;
        state.email = email;
        state.phone = phone;
      },
      clearUser: (state) => {
        state.uid = null;
        state.name = null;
        state.email = null;
        state.phone = null;
      },
    },
  });
  
  export const { setUser, clearUser } = userSlice.actions;
  export const userReducer = userSlice.reducer;