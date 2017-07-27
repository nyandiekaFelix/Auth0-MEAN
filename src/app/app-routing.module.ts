import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MeetupComponent } from './pages/meetup/meetup.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'callback',
        component: CallbackComponent
    },
    {
        path: 'meetup',
        component: MeetupComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
