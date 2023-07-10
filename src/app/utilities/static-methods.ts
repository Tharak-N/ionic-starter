import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const router = (routeUrl: string) => {
  let route = inject(Router);
  route.navigate([routeUrl]);
}


