import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
// import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public class SpringBootFirstWebApplication implements OnInit {}
//"export" oznacza możliwość używania klasy poza modułem
export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message'
  welcomeMessageFromService:string
  errorMessage:string
  username = ''

  //ActivatedRoute żeby pobierało z obecnego adresu
  constructor(
    private route : ActivatedRoute,
    private service : WelcomeDataService) { }

  //void init() {}
  //deklaracja typu dla metody: "ngOnInit() : typ"
  ngOnInit() {
    
    this.username = this.route.snapshot.params['name']
  }

  // metoda odpowiadająca za całość powitania przy logowaniu
  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.username).subscribe(
      response => this.handleSuccesfullResponse(response),
      error => this.handleErrorResponse(error)
    )
  }

  // metoda zwracająca info po zalogowaniu
  handleSuccesfullResponse(response) {
    this.welcomeMessageFromService = response.message
    
  }

  // metoda zwracająca info przy Exception
  handleErrorResponse(error) {
    this.errorMessage = error.error.message
  }

}
