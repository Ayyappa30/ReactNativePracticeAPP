import messaging, { getMessaging } from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import {Alert, PermissionsAndroid} from 'react-native';

const requestUserPermission = async() =>{
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

    if(granted === PermissionsAndroid.RESULTS.GRANTED){
        console.log("Notificaiton Permission Granted")
    }else{
        console.log("Notificaiton Permission denied")
    }
}

const getToken = async() =>{
    try{
        const token = await getMessaging().getToken();
        console.log("FCM token",token)
    }catch(err){
        console.error("failed to get the FCM token",err)
    }
}

export const useNotification = () =>{

    useEffect(()=>{
        requestUserPermission()
        getToken()
    },[])
    useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
}