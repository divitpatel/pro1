import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component' 
import {FormsModule} from '@angular/forms' 
import { HttpModule } from "@angular/http";
import {RouterModule,Routes} from '@angular/router'
import{ ErrorLoggingComponent } from './logging/errorLogging.component';
import {EmpFileterComponent } from "./logging/filters/emp-filter.component";


const appRoutes : Routes = [ 
    {path : 'errorlog', component: ErrorLoggingComponent}
    ,{path : '',redirectTo : 'errorlog', pathMatch : 'full' }
    ,{path : '**',redirectTo : 'errorlog', pathMatch : 'full'}
]
 
@NgModule({
    imports : [BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(appRoutes) ],
    declarations : [AppComponent,ErrorLoggingComponent,ErrorLoggingComponent,EmpFileterComponent],
    bootstrap : [AppComponent],
    providers : [EmpFileterComponent]   

})
export class AppModule{

}