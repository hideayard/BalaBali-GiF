import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GitService {

  repoSelected: Subject<string> = new Subject<string>();
  repoSelectedObs = this.repoSelected.asObservable();

  constructor(
    private _httpClient: HttpClient
  ) {
    this.repoSelected.next('');
  }

  getAll() {
    return this._httpClient.get(
        'https://api.github.com/repositories'
    );
  }

  searchRepo(request: any) {
    let httpParams = new HttpParams();
    Object.keys(request).forEach((key: any) => {
        httpParams = httpParams.append(key, request[key]);
    });

    return this._httpClient.get(
        'https://api.github.com/search/repositories', {params: httpParams}
    );
  }

  getDetailRepo(name: String) {
    return this._httpClient.get(
        'https://api.github.com/repos/'+name,
    );
  }

  getPerUser(user: String) {
    return this._httpClient.get(
        'https://api.github.com/users/'+user,
    );
  }

}
