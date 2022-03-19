import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDividerModule } from "@angular/material/divider";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';



const materialModules = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatMenuModule,
  MatListModule,
  MatCardModule,
  MatSelectModule,
  MatTableModule,
  MatDividerModule,
  MatPaginatorModule,
  MatGridListModule,
  MatSnackBarModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModules
  ],
  exports: [
    materialModules
  ]
})
export class MaterialModule { }
