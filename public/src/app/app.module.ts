import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { FormsModule } from "@angular/forms";
import { HttpService } from "./http.service";


@NgModule({
  declarations: [
    AppComponent,
    AllAuthorsComponent,
    EditAuthorComponent,
    NewAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
