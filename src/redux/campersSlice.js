import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (params = {}, thunkAPI) => {
    try {
      const response = await axios.get('/campers', { params });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOneCamper = createAsyncThunk(
  'campers/fetchOne',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  items: [],
  selectedCamper: null,
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  isLoading: false,
  error: null,
  filter: '',
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      const index = state.favorites.indexOf(camperId);
      if (index === -1) {
        state.favorites.push(camperId);
      } else {
        state.favorites.splice(index, 1);
      }
      // localStorage'a kaydet
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.items;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      
 
      .addCase(fetchOneCamper.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.selectedCamper = null; 
      })
      .addCase(fetchOneCamper.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedCamper = action.payload;
      })
      .addCase(fetchOneCamper.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { toggleFavorite, setFilter } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;

// Selectors
export const selectAllCampers = (state) => state.campers.items;
export const selectCamperDetails = (state) => state.campers.selectedCamper; 
export const selectLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;
export const selectFavorites = (state) => state.campers.favorites;