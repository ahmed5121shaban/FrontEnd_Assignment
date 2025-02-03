import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NumberHeaderComponent } from './Components/NumberHeader/NumberHeader.component';
import { NumberParentComponent } from './Components/NumberParent/NumberParent.component';
import { FooterComponent } from './Components/Footer/Footer.component';
import { TableComponent } from './Components/Table/Table.component';
import { ShortTextPipe } from './Pipes/shortText.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NumberHeaderComponent,
    NumberParentComponent,
    FooterComponent,
    TableComponent,
    ShortTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
