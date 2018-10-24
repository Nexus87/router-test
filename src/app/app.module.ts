import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TabMenuModule } from 'primeng/tabmenu';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer, AppState } from './ngrx/reducer';
import { HomeComponent } from './home/home.component';

export interface IDB {
  app: AppState;
}

const reducer = {
  app: appReducer
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    StoreModule.forRoot(reducer),
    StoreDevtoolsModule.instrument({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
