import {Component} from '@angular/core';
import { PolicyListService, Policy, Schedule, Condition } from './policyservice';
import { LazyLoadEvent } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import {MessageService} from 'primeng/api';
import {DividerModule} from 'primeng/divider';
import {BadgeModule} from 'primeng/badge';
import { TagModule } from 'primeng/tag';
import {ButtonModule} from 'primeng/button';
import {MenuItem} from 'primeng/api';
import * as Global from './global-variables';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService],
  styleUrls: ['./app.component.css'],
  styles: [`
        :host ::ng-deep  .row-not-imported {
            background-color: rgba(5,240,0,.05) !important;
            disabled: true;
        }`]
})


export class AppComponent { 

    page: string = 'fleet';
    policies: Policy[];
    items: MenuItem[];

    constructor(private PolicyListService: PolicyListService) { }

    ngOnInit() {
        this.items = [
            {
                label: 'Darbuotojai',
                items: [{
                        label: 'Naujas', 
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {label: 'Darbuotojas'},
                            {label: 'Other'},
                        ]
                    },
                    {label: 'Koreguoti'},
                    {label: ''}
                ]
            },
            {
                label: 'Darbo grafikai',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                    {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                ]
            }
        ];

    }

    ShowPage(pageName: string){
        this.page = pageName;
    }

}
