import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { RemoteStateService } from "../services/remote-state.service";

export let NavigationRouter = (routeUrl: string) => {
  let router = inject(Router);
  console.log("reaching the navigation router fn")
  return router.navigate([routeUrl]);
}

export const LogMessage = (message: any, type?: string) => {
  if(type === 'warn'){
    console.warn(message)
  }
  else if(type === 'error'){
    console.error(message)
  }
  else {
    console.log(message)
  }
}

// export const DataStore = () => {
//   let store = inject(RemoteStateService);
//   store.getModalRootComponent().subscribe((res: any) =>{
//     LogMessage(res)
//     return res
//   });
// }

// export const SetModalRootComponent = (COMPONENT_NAME: string) => {
//   let store = inject(RemoteStateService);
//   LogMessage(COMPONENT_NAME)
//   store.setModalRootComponent(COMPONENT_NAME);
// }
