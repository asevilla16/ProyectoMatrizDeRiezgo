import { takeUntil, Subject } from 'rxjs';
import { RisksService } from './../../services/risks.service';
import { Risk } from './../../models/risk';
import { AfterViewInit, Component, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-risks-list',
  templateUrl: './risks-list.component.html',
  styleUrls: ['./risks-list.component.css']
})
export class RisksListComponent implements AfterViewInit, OnDestroy {

  private unsubscribe: Subject<void> = new Subject();

  displayedColumns: string[] = ['id', 'name', 'impact', 'frequency', 'buttons'];
  dataSource: MatTableDataSource<Risk> = new MatTableDataSource<Risk>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router: Router,
    private riskService: RisksService
  ) {
    this.getRisks();
  }

  getRisks(){
    this.riskService.getRisks()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(risks => {
        if(risks && risks !== null && risks.length > 0){
          this.dataSource = new MatTableDataSource<Risk>(risks);
          this.dataSource.paginator = this.paginator;
          console.log(risks);
        } else {
          this.dataSource = new MatTableDataSource<Risk>([]);
          this.dataSource.paginator = this.paginator;
        }
      })
  }

  addRisk(){
    this.router.navigate(['/risk/new']);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
      this.unsubscribe.next();
      this.unsubscribe.complete();
  }

  details(){
    console.log(this.dataSource.data);
    //this.router.navigate(['/risk/edit/']);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
