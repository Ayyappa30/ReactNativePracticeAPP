import { CommonActions, createNavigationContainerRef, NavigationContainerRef } from "@react-navigation/native"

type Params = {[key:string]:any}

const navigationRef = createNavigationContainerRef<NavigationContainerRef<any>>();

 const navigate = (name:string, params?:Params) =>{
    if(navigationRef.isReady()){
        navigationRef.navigate(name as any,params as any)
    }
}

  const navigationReset =(name:string,params:Params)=>{
        if(navigationRef.isReady()){
            navigationRef.resetRoot({
                index:0,
                routes: [{name,params}]
            })
        }
    }

    const goBack = () => {
        if(navigationRef.isReady()){
            navigationRef.dispatch(CommonActions.goBack);
        }
    }

export default {
    navigationRef,
    navigate,
    navigationReset,
    goBack
}
