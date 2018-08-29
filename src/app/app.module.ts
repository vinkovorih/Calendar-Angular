import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {Router, RouterModule, Routes} from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { RosterComponent } from './roster/roster.component';
import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';
import { ApplicationComponent } from './application/application.component';
import { IndexTrollComponent } from './index-troll/index-troll.component';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './home/header/header.component';
import {DataManipulationService} from './data-manipulation.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'aboutUs',
    component: AboutUsComponent,
  },
  { path: 'roster',
    component: RosterComponent,
  },
  {
    path: 'spreadsheet',
    component: SpreadsheetComponent
  },
  {
    path: 'application',
    component: ApplicationComponent
  }
  ,
  {
    path: 'indexTroll',
    component: IndexTrollComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    RosterComponent,
    SpreadsheetComponent,
    ApplicationComponent,
    IndexTrollComponent,
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataManipulationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
