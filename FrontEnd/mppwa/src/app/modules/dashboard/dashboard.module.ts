import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule
  ]
})
export class DashboardModule { }
