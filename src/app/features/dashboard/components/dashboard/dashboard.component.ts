import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  processes: number = 0;

  risks: number = 0;

  controls: number = 0;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.getProcesses();
    this.getRisks();
    this.getControls();
  }

  getProcesses(){
    this.dashboardService.getProcesses()
      .subscribe(res => {
        this.processes = res;
      })
  }

  getRisks(){
    this.dashboardService.getRisks()
      .subscribe(res => {
        this.risks = res;
      })
  }

  getControls(){
    this.dashboardService.getControls()
      .subscribe(res => {
        this.controls = res;
      })
  }
}
