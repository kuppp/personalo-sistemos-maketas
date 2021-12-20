import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PolicyListService {
  constructor(private http: HttpClient) {}

  getPolicyMedium() {
    return this.http
      .get<any>('assets/policy-list.json')
      .toPromise()
      .then((res) => <Policy[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
export interface Schedule {
  number?: number;
  date?: string | Date;

}
export interface Policy {
  flag?: number;
  policy?: string;
  beginDate?: string | Date;
  endDate?: string | Date;
  vehicle?: Vehicle;
  error?: string;
  premium?: number;
  additionalInsurance: Insurance;
  status?:string;
}

export interface Vehicle {
  plateNo?: string;
  vinNo?: string;
  type?: string;
  marke?: string;
  model?: string;
  manufYear?: string | Date;
  value?: number;
}

export interface Insurance {
  name?: string;
  premium?: number;
}

export interface Condition {
  conditionType?: string;
  insType?: string;
  ageFrom?: number;
  ageTo?: number;
  value: string;
}
