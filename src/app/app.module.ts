import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatSliderModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatProgressSpinnerModule, MatSelectModule
} from '@angular/material';
import { ResearchComponent } from './research/research.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DialogDataExampleDialogComponent, ResultComponent} from './result/result.component';
import {HttpClientModule} from '@angular/common/http';
import {SearchServiceService} from './service/search-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ResearchComponent,
    ResultComponent,
    DialogDataExampleDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  providers: [SearchServiceService],
  bootstrap: [AppComponent],
  entryComponents: [DialogDataExampleDialogComponent]
})
export class AppModule { }
