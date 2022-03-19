import { Control } from './../../models/control';
import { ControlsService } from './../../services/controls.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-controls-form',
  templateUrl: './controls-form.component.html',
  styleUrls: ['./controls-form.component.css']
})
export class ControlsFormComponent implements OnInit {

  private unsubscribe: Subject<void> = new Subject();

  form: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private controlsService: ControlsService,
    private _matSnackBar: MatSnackBar,
    private router: Router
  ) { 
    this.form = this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm(){
    return this.formBuilder.group({
      name: [''],
      riskOwner: [''],
      frequency: [''],
      impact: [''],
      riskLevel: [''],
      description: ['']
    })
  }

  addControl(){
    const control: Control = this.form.value;
    
    this.controlsService.addControl(control)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(res => {
        this._matSnackBar.open('Se ha creado un nuevo control de contingencias', 'OK', {
          verticalPosition: 'top',
          duration: 6000
        });
        this.router.navigate(['/controls'])
      })

  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }


}
