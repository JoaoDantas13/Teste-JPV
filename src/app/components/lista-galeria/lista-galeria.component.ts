import { Component, OnInit } from '@angular/core';
import { ServiceImagensService } from 'src/app/service/service-imagens.service';

@Component({
  selector: 'app-lista-galeria',
  templateUrl: './lista-galeria.component.html',
  styleUrls: ['./lista-galeria.component.scss']
})
export class ListaGaleriaComponent implements OnInit {

  imagens:any

  constructor(private serviceImagens:ServiceImagensService) { }

  ngOnInit(): void {
    this.getImagens();
  }

  getImagens(){
    this.serviceImagens.getAllImagens().subscribe((retorno) => {
      this.imagens = retorno;
      console.log('imagens',this.imagens);
    })
  }

}
