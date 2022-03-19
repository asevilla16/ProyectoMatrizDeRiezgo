import { ChangeDetectorRef, Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  opened: boolean = true;

  mobileQuery: MediaQueryList;

  fillerNav = [
    { route: '', title: 'Dashboard', icon: 'grid_view'},
    { route: 'process', title: 'Procesos', icon: 'account_tree'},
    { route: 'risk', title: 'Riesgos', icon: 'local_fire_department'},
    { route: 'controls', title: 'Controles', icon: 'opacity'},
    { route: 'action-plans', title: 'Planes de accion', icon: 'assignment_turned_in_outlined'},

  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 800px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }



}
