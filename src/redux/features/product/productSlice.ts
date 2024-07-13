
import { createSlice, PayloadAction} from "@reduxjs/toolkit";

// Define the type for a single product
export type  TProduct ={
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  stock: number;
}

type IInitialState={
  products:TProduct[];
}
// Define the initial state for the slice (in case you want to manage an array of products)


const initialState:IInitialState= {
  products:[]
  // Initialize other state properties here
};

 const productSlice= createSlice({
    name:'product',
    initialState,
    reducers:{
addProduct:(state, action:PayloadAction<TProduct>)=>{
  state.products.push({...action.payload})

},

    },

})

export const {addProduct}=productSlice.actions;
export default productSlice.reducer;

