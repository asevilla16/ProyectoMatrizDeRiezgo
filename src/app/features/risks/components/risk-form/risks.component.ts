import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RisksService } from './../../services/risks.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { collection } from 'firebase/firestore';
import { Subject, takeUntil } from 'rxjs';
import { industryRiskNames } from 'src/app/features/mock-data/riesgo-industrial-mock';
import { Risk } from '../../models/risk';

@Component({
  selector: 'app-risks',
  templateUrl: './risks.component.html',
  styleUrls: ['./risks.component.css']
})
export class RisksComponent implements OnInit, OnDestroy {

  private unsubscribe: Subject<void> = new Subject();

  names: string[] = industryRiskNames

  probabilities: any = [];

  impacts: any = [];

  form: FormGroup;

  id: string | null = '';

  title: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private riskService: RisksService,
    private _matSnackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    this.getProbabilities();
    this.getImpacts();
    
  }

  getTitle(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.id 
    ? this.title = "Editar Riesgo"
    : this.title = "Crear Riesgo"
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

  calculateRiskCategory(){
    const impacto = this.form.controls.impact.value;
    const prob = this.form.controls.frequency.value;

    console.log(this.form.value)
    
    const riskLevel = impacto * prob;
    
    if(riskLevel <= 1){
      this.form.controls.riskLevel.setValue("Muy Bajo  -  " + riskLevel);
    }
    else if(riskLevel >= 2 && riskLevel <=4){
      this.form.controls.riskLevel.setValue("Bajo  -  " + riskLevel);
    }
    else if(riskLevel >= 5 && riskLevel <= 9){
      this.form.controls.riskLevel.setValue("Medio  -  " + riskLevel);
    }
    else if(riskLevel >= 10 && riskLevel <= 12){
      this.form.controls.riskLevel.setValue("Alto  -  " + riskLevel);
    }
    else if(riskLevel >= 15 && riskLevel <= 25){
      this.form.controls.riskLevel.setValue("Muy Alto  -  " + riskLevel);
    }
  }

  getProbabilities(){
    this.riskService.getProbabilities()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(res => {
        this.probabilities = res;
      })
  }

  getImpacts(){
    this.riskService.getImpacts()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(res => {
        this.impacts = res;
      })
  }

  addRisk(){
    const risk: Risk = this.form.value;
    risk.frequency = this.probabilities.find((x: any) => x.value == risk.frequency).description;
    risk.impact = this.impacts.find((x: any) => x.value == risk.impact).description;
    
    this.riskService.addRisk(risk)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(res => {
        this._matSnackBar.open('Se ha creado un nuevo riesgo', 'OK', {
          verticalPosition: 'top',
          duration: 6000
        });
        this.router.navigate(['/risk'])
      })

  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }



}
