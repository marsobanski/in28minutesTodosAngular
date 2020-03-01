import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export class HelloWorldBean {
  constructor(public message : string) {

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http : HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
    //<HelloWorldBean> to coś jak generyki w Javie, a bez tego nie będzie można wywołać .message w response w welome.component.ts
    // console.log("Execute HellowWorldBeanService")
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`)
    
  }
}
