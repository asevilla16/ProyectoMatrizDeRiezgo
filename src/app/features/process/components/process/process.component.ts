import { ProcessService } from './../../services/process.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Process } from '../../models/process';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'type', 'category', 'buttons'];
  dataSource: MatTableDataSource<Process> = new MatTableDataSource<Process>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router: Router,
    private processService: ProcessService
  ) {
    this.getProcesses();
  }

  getProcesses(){
    this.processService.getProcesses()
      .subscribe(processes => {
        if(processes && processes !== null && processes.length > 0){
          this.dataSource = new MatTableDataSource<Process>(processes);
          this.dataSource.paginator = this.paginator;
        } else {
          this.dataSource = new MatTableDataSource<Process>([]);
          this.dataSource.paginator = this.paginator;
        }
      })
  }
  
  addRisk(){
    this.router.navigate(['/process/new']);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

