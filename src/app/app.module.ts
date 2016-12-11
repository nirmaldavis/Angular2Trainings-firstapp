import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { AnotherComponent } from './another/another.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { HighlighterDirective } from './highlighter.directive';
import { MathComponent } from './math/math.component';
import { MathserviceService } from './mathservice.service';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    DatabindingComponent,
    HighlighterDirective,
    MathComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MathserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
