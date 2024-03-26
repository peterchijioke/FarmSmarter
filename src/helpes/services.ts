import Geolocation from "@react-native-community/geolocation";
import { Linking, Platform} from "react-native";
import { store } from "../app/store";
import { setData, setInitialRegion, setMountTimer, setRegion, setWatchId } from "../app/app.reducer";
import { supabase } from "../../supabase/Supabase";
import { Toast } from "react-native-toast-notifications";

export const handleStart=async ()=>{
  store.dispatch(setMountTimer(true))
  if (!store.getState().app.mountTimer) {
        return
      }
    showToast('Location Watch started','success')
    const watchID = await Geolocation.watchPosition(
    async(position:any) => {
      const { latitude, longitude } = position.coords;
      const newCoordinate = {
        latitude,
        longitude
      };
      await store.dispatch(setData(newCoordinate))
      await store.dispatch(setRegion(newCoordinate))
     },
     (error:any )=> console.log(error),
     { enableHighAccuracy: true,
      interval: 100,
      distanceFilter: 1,
    }
  );
  store.dispatch(setWatchId(watchID))
}

// ====================saveInitialRegion=============
export const saveInitialRegion =async()=>{
try { Geolocation.getCurrentPosition(
    async (pos: any) => { 
const {latitude,longitude}=pos?.coords
await store.dispatch(setInitialRegion({
  latitude,longitude
}))
  await store.dispatch(setRegion({
     latitude,longitude
  }))

    },
    (    error: any)=>{
      console.log(error)
    },{
        enableHighAccuracy: true,
    }
    )
  
} catch (error) {
  
}
}
// =====================handleStop====================
export const handleStop=async()=>{
  console.log('stop')

 try {
  store.dispatch(setMountTimer(false))
  // Geolocation.clearWatch(store.getState().app.watchId);
  Geolocation.stopObserving()
 showToast('Navigation was stopped','success')
 } catch (error) {
  console.log(error)
 }
  return
}

// ============================handleReset=================
export const handleReset=async ()=>{
   showToast('Navigation was reset to default','success')
    await store.dispatch(setData(0))
}
export const handleSave=async()=>{
 showToast('Coordinate was saved successfully','success')
  const coordinates = store.getState().app?.data?.map((item:any,i:number)=>(
     {
      name:`${new Date().getTime()}`,
     coordinates: `POINT(${item.longitude} ${item.latitude})`
    }
  ))
try {
   

const { data, error } = await supabase
  .from('farm_smater_user_coords')
  .insert([...coordinates])
  .select()

  if(error?.message){
showToast(error.message,'danger')
return
  }
          
} catch (error:any) {
  console.log(error.message)
}

}

 export const switchOnLocation = () => {
    if (Platform.OS === 'android') {
      Linking.openSettings();
    } else if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    }
  };



export const showToast =(text:string,type:string)=> Toast.show(text,{
  type: "success ",
  duration: 4000,
  animationType: "zoom-in",
});
