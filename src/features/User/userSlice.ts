import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface UserState {
  [key: string]: string | number | null | undefined;
}

// Define the initial state using that type
const initialState: UserState = {
  uid: null,
  name: null,
  email: null,
  phone: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserState>) => {
      // Merge the incoming action.payload with the current state
      Object.assign(state, action.payload);
    },
    clearUser: (state) => {
      // Clear all properties in the state
      for (const key in state) {
        state[key] = null;
      }
    },
  },
});

export const { addUser, clearUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
