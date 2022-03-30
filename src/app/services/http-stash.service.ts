import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiResponse } from '../models';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpStashService {
  BASEURL = environment.API_URL;
  FIRST_STASH = environment.FIRST_STASH;
  constructor(private http: HttpClient) {}

  load(id: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(
      `${this.BASEURL}/public-stash-tabs?id=${id || this.FIRST_STASH}`
    );
  }
}
