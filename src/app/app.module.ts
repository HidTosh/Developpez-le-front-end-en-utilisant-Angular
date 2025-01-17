import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetailComponent } from './pages/detail/detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { awardFill, arrowBarLeft } from 'ngx-bootstrap-icons';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';

/**
 * Select some icons from bootstrap
 */
const icons = {
  awardFill,
  arrowBarLeft
};

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    NotFoundComponent, 
    DashboardComponent, 
    DetailComponent, 
    HeaderComponent, 
    FooterComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    NgxBootstrapIconsModule.pick(icons)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
