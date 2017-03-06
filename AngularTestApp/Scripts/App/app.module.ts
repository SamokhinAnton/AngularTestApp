import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { UserarrComponent } from '../App/components/userarr.component';
import { TestComponent } from '../App/components/test.component';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [UserarrComponent, TestComponent],
    bootstrap: [UserarrComponent, TestComponent]
})
export class AppModule { }