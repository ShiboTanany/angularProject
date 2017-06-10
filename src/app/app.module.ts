import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InsertService } from './ServiceStage/insert.service'
import { AppComponent } from './app.component';
import { InsertComponentComponent } from './ServiceStage/insert-component/insert-component.component';
import { UpdateComponentComponent } from './ServiceUpdate/update-component/update-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertComponentComponent,
    UpdateComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [InsertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
