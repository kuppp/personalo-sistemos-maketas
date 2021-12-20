import { Component, OnInit } from '@angular/core';
import { PolicyListService, Policy, Schedule, Condition } from '../policyservice';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-fleet-info',
  templateUrl: './fleet-info.component.html',
  styleUrls: ['./fleet-info.component.css']
})
export class FleetInfoComponent implements OnInit {
  
  policies: Policy[];
  printMenuItems: MenuItem[];
  actionMenuItems: MenuItem[];
  paymentSchedule: Schedule[];
  parkConditions: Condition[];

  panel1: number = 100;
  panel2: number = 0;

  constructor(private PolicyListService: PolicyListService) { }

  ngOnInit() {
    this.PolicyListService.getPolicyMedium().then(data => {
      this.policies = data
      
  });

 this.printMenuItems = [
      {label: 'Generalinė sutartis', icon: 'pi pi-file-pdf'},
      {label: 'Priedas', icon: 'pi pi-file-pdf'},
      {separator: true},
      {label: 'Eksportuoti', icon: 'pi pi-file-excel', routerLink: ['/setup']},
      {label: 'Siųsti el.paštu', icon: 'pi pi-send', routerLink: ['/setup']}
  ];

  this.actionMenuItems = [
      {label: 'Nutraukti', icon: 'pi pi-pencil'},
      {label: 'Pašalinti iš parko', icon: 'pi pi-minus-circle'},
      {separator: true}
  ];

  this.paymentSchedule = [
      {"number":1, "date":'2022-01-01'}, {number:2, date:'2022-04-01'}, {number:3, date:'2022-08-01'},{number:4, date:'2022-12-01'}
  ]
  this.parkConditions = [
      {conditionType: 'Rizikų paketas', insType: 'Lengvieji automobiliai', value:'Bazinis'},
      {conditionType: 'Rizikų paketas', insType: 'Krovininai automobiliai', value:'Super'},
      {conditionType: 'Rizikų paketas', insType: 'Krovininai automobiliai iki 3.5 t', value:'Bazinis'},
      {conditionType: 'Kriterijai', insType: 'Lengvieji automobiliai', ageFrom: 9, ageTo: 50, value:'TP remontas Draudiko pasirinkimu'},
      {conditionType: 'Kriterijai', insType: 'Lengvieji automobiliai', ageFrom: 0, ageTo: 9, value:'TP remontas Draudėjo pasirinkimu'},
      {conditionType: 'Papildomi draudimai', insType: 'Lengvieji automobiliai', value:'Išplėstinė pagalba kelyje, Vairuotojai ir keleveikiai'},
      {conditionType: 'Papildomi draudimai', insType: 'Krovininai automobiliai iki 3.5 t', value:'Vairuotojai ir keleveikiai'},
      {conditionType: 'Papildomi draudimai', insType: 'Krovininai automobiliai', value:'Vairuotojai ir keleveikiai'}
  ]
  }

}