import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-component/home-component.component';
import { FormsComponent } from './forms-component/forms-component.component';
import { ListsComponent } from './lists-component/lists-component.component';
import { CommonService } from './shared/common.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormsComponent,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
