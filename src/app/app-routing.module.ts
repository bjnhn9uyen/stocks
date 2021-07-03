// The RouterModule is used to activate the router and accepts the routes configuration when it’s initialized
import { Routes, RouterModule } from '@angular/router';
// Imports the two routable components, the Dashboard and Manage components, so we can reference them properly in our routes configuration
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';

// The routes are defined as an array of objects that have at least one property — in this case two, for a URL path and a component
// The first route (no path )acts as the application index (which will be http://localhost:4200) and links to the Dashboard component.
// The second route provides a URL path of manage (which will be http://localhost:4200/manage) and links to the Manage component.
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'manage',
    component: ManageComponent,
  },
];
// The forRoot method is a way to pass configuration to the module (passing the array of routes, in this case)
// We export this so we can import it into our App module and register it.
export const AppRoutingModule = RouterModule.forRoot(routes);

// The router works by declaring an outlet in the template by using 'router-outlet' element in the app.component.html
// Think of the outlet as the default placeholder for the content, and until the content is ready to be displayed, it will be empty.
// In the app.component.html, replace 'app-dashboard' and 'app-manage' by 'router-outlet'.
// Then we need to update the links to use a new directive that will set up the navigation between routes
// (the new directive is [routerLink] in the app.component.html)
