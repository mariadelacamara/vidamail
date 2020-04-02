import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbSidebarModule,
  NbThemeModule } from '@nebular/theme';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MailFilterPipe } from './components/main/mail-filter.pipe';
import { MainComponent } from './components/main/main.component';
import { ViewComponent } from './components/main/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ViewComponent,
    MailFilterPipe
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    FormsModule,
    NbCardModule,
    NbInputModule,
    NbCardModule,
    NbIconModule,
    NbFormFieldModule,
    NbButtonModule,
    NbAlertModule,
    NbSidebarModule,
    NbSidebarModule.forRoot(),
    InfiniteScrollModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
