import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [

    // Sayfamız için gerekli link yönledmnirme işlemlerini bu kısımda yapıyoruz.
    { path: '', component: HomePageComponent},
    { path: 'home', component: HomePageComponent}
];
