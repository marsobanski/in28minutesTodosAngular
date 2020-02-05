import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  username = ''

  //public SpringBootFirstApplication {}
  //słowo kluczowe "contructor"
  //ActivatedRoute żeby pobierało z obecnego adresu
  constructor(private route : ActivatedRoute) { }

  //void init() {}
  //deklaracja typu dla metody: "ngOnInit() : typ"
  ngOnInit() {
    console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.username = this.route.snapshot.params['name']
  }

}
