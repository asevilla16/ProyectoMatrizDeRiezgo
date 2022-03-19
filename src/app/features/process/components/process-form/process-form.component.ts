import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProcessCategory } from './../../models/process-category';
import { ProcessService } from './../../services/process.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProcessType } from '../../models/process-type';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-process-form',
  templateUrl: './process-form.component.html',
  styleUrls: ['./process-form.component.css']
})
export class ProcessFormComponent implements OnInit {

  private unsubscribe: Subject<void> = new Subject();

  categories: ProcessCategory[] = [];

  types: ProcessType[] = [];

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private processService: ProcessService,
    private _matSnackBar: MatSnackBar,
    private router: Router
  ) { 
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    this.getTypes();
    this.getCategories();
  }

  buildForm(){
    return this.formBuilder.group({
      name: [''],
      type: [''],
      category: [''],
      description: [''],
    })
  }

  addProcess(){
    const process = this.form.value;

    this.processService.addProcess(process)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(res => {
        this._matSnackBar.open('Se ha creado un nuevo proceso', 'OK', {
          verticalPosition: 'top',
          duration: 6000
        });
        this.router.navigate(['./process']);
      });
  }

  getCategories(){
    this.processService.getCategories()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(res => {
        this.categories = res;
      })
  }

  getTypes(){
    this.processService.getTypes()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(res => {
        this.types = res;
      })
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
