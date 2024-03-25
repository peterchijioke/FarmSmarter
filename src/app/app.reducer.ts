import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IAppReducer {
  data: any[],
  watchId:number|null,
  region:any,
  initialRegion:any,
  mountTimer:boolean
}

const initialState: IAppReducer = {
 data:[],
 mountTimer:false,
 watchId:null,
 region:{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
    initialRegion:null
}

export const appReducer = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      if (action.payload===0) {
        state.data=[]
        return
      }
      let updatedData = [...(state.data || []), action.payload];
   
    return { ...state, data: updatedData };

    },
    setWatchId: (state, action: PayloadAction<any>) => {
      state.watchId = action.payload
    },
    setRegion: (state, action:PayloadAction<any>)=>{
      state.region=action.payload
    },
     setInitialRegion: (state, action:PayloadAction<any>)=>{
      state.initialRegion=action.payload
    },
    setMountTimer: (state, action:PayloadAction<any>)=>{
      return {...state,mountTimer:action.payload}
    }
  },
})



export const { setData,setWatchId,setRegion,setInitialRegion,setMountTimer } = appReducer.actions
export default appReducer.reducer