import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url: string = "https://loiane.com";
  cursoAngular: boolean = true;
  urlImagem: string = "https://images.unsplash.com/photo-1638188955953-55ed6325eeff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

  getValor() {
    return 1;
  }

  getCurtiCurso() {
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
