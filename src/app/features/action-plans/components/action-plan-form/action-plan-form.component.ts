import { ActionPlanService } from './../../services/action-plan.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-action-plan-form',
  templateUrl: './action-plan-form.component.html',
  styleUrls: ['./action-plan-form.component.css']
})
export class ActionPlanFormComponent implements OnDestroy, OnInit {

  private unsubscribe: Subject<void> = new Subject();

  form: FormGroup;

  answers: any = [
    {value: 1, description: 'Mitigar'},
    {value: 2, description: 'Transferir'},
    {value: 3, description: 'Aceptar'},
    {value: 4, description: 'Evitar'},
    
  ]

  id: string | null = '';

  title: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private actionPlanService: ActionPlanService,
    private _matSnackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    this.getTitle();
  }

  getTitle(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.id 
    ? this.title = "Editar Plan de accion"
    : this.title = "Crear Plan de accion"
  }

  buildForm(){
    return this.formBuilder.group({
      name: [''],
      description: [''],
      responsible: [''],
      answer: ['']
    })
  }


  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }


}
