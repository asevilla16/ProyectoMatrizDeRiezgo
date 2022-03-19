import { ControlsService } from './../../services/controls.service';
import { Control } from './../../models/control';
import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contingency-controls',
  templateUrl: './contingency-controls.component.html',
  styleUrls: ['./contingency-controls.component.css']
})
export class ContingencyControlsComponent implements OnDestroy, AfterViewInit {

  private unsubscribe: Subject<void> = new Subject();

  displayedColumns: string[] = ['id', 'name', 'description', 'buttons'];
  dataSource: MatTableDataSource<Control> = new MatTableDataSource<Control>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router: Router,
    private controlsService: ControlsService
  ) {
    this.getControls();
  }

  getControls(){
    this.controlsService.getControls()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(risks => {
        if(risks && risks !== null && risks.length > 0){
          this.dataSource = new MatTableDataSource<Control>(risks);
          this.dataSource.paginator = this.paginator;
        } else {
          this.dataSource = new MatTableDataSource<Control>([]);
          this.dataSource.paginator = this.paginator;
        }
      })
  }

  addControl(){
    this.router.navigate(['/controls/new']);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
      this.unsubscribe.next();
      this.unsubscribe.complete();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
