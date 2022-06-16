import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {

  }
  getAllProperties():Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map((data) => {
        const propertiesArray: Array<IProperty> = [];
        for (const Id in data) {

          if (data.hasOwnProperty(Id)) {
            propertiesArray.push(data[Id]);
          }
        }
        return propertiesArray
      })
    );
  }
}
