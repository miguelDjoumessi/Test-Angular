import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';

export const routes: Routes = [
    {
        path: '',
        title: 'App Component',
        component: AppComponent
    },
    {
        path: 'hotels',
        title: 'Liste Hotels',
        component: HotelsComponent
    }
];
