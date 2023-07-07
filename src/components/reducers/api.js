
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const ApiKey =  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdkZDIyOTM5N2RmMTAwMTRkZGRkYjgiLCJpYXQiOjE2ODg2NDA3NjksImV4cCI6MTY4OTg1MDM2OX0.N0MTkbfQrBoKQ9niJjM1icRMh8Lu47QGOWCgrkmbjOQ"
export const fetchCommenti = createAsyncThunk(
  'commenti/fetchCommenti',
  async (asin) => {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
      headers: {
        Authorization: ApiKey
      }
    })
    const data = await response.json()
    return data
  }
)
export const fetchPostCommenti = createAsyncThunk(
  'commenti/postCommenti',
  async (review) => {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        Authorization: ApiKey,
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()
    return data
  }
)
export const deleteCommenti = createAsyncThunk(
  'commenti/deleteCommenti',
  async (comment) => {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + comment, {
      method: "DELETE",
      headers: {
        Authorization: ApiKey,

      }
    })
    const data = await response.json()
    return data
  }
)

export const updateCommenti = createAsyncThunk(
  'commenti/updateCommenti',
  async (comment) => {
    console.log(comment);
    const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + comment._id, {
      method: "PUT",
      body: JSON.stringify(comment),
      headers: {
        Authorization: ApiKey,
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()
    return data
  }
)



const initialState = {
  apiArray: [],
  originalArray: [],
  reviewArray: [],
  categoria: "",
  Dettagli:[],
  postComment: "",
  postRate: 1,
  postElementId: "",
  currentComment: undefined
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    apiCall: (state, action) => {
      state.apiArray = action.payload;

    },
    setOriginal: (state, action) => {
      state.originalArray = action.payload;
    },
    setCategory: (state, action) => {
      state.categoria = action.payload;
    },
    setSearch: (state, action) => {
      const search = action.payload;
      state.apiArray = state.originalArray.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      })
    },
    setCurrentComment: (state, action) => {
      state.currentComment = action.payload;
    },
    openModal: (state, action) => {
      const index = action.payload;
      state.apiArray[index].modal = !state.apiArray[index].modal;
    },
    setSelected: (state, action) => {
      const index = action.payload;
      state.apiArray[index].selected = !state.apiArray[index].selected;
    },
    BookDetail: (state, action) => {
     state.Dettagli = state.apiArray.find((item) => {
      return item.asin === action.payload;
      })
 
      },
      setPostComment: (state, action) => {
        state.postComment = action.payload;
      },
      setPostRate: (state, action) => {
        state.postRate = action.payload;
      },
      setPostElementId: (state, action) => {
        state.postElementId = action.payload;
      }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCommenti.fulfilled, (state, action) => {
      state.reviewArray = action.payload
    })

    builder.addCase(fetchCommenti.pending, (state, action) => {
      state.reviewArray = []
    })
  }

});


export const { apiCall, setCategory, setSearch, openModal, 
  setOriginal, setSelected,BookDetail,setPostComment,setPostRate,setPostElementId, setCurrentComment } = apiSlice.actions;
export default apiSlice.reducer;