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
import { PrefixPipe } from './prefix.pipe';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    DatabindingComponent,
    HighlighterDirective,
    MathComponent,
    PrefixPipe,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [MathserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
