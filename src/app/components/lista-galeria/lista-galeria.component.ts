import { Component, OnInit } from '@angular/core';
import { Galeria } from 'src/app/interface/Galeria.interface';
import { ServiceImagensService } from 'src/app/service/service-imagens.service';

@Component({
  selector: 'app-lista-galeria',
  templateUrl: './lista-galeria.component.html',
  styleUrls: ['./lista-galeria.component.scss'],
})
export class ListaGaleriaComponent implements OnInit {
  images!: Galeria[];
  allImages!:Galeria[];
  verGaleria: boolean = true;
  loading: boolean = false;

  constructor(private serviceImagens: ServiceImagensService) {}

  ngOnInit(): void {
    this.getImagens();
  }

  getImagens() {
    this.serviceImagens.getAllImagens().subscribe((images: any) => {
      this.images = images.results;
      this.allImages = images.results;
    });
    this.loading = false;
  }

  AbrirImagens() {
    this.loading = true;
    setTimeout(() =>{
      this.verGaleria = false;
    },1500)
  }

  search(e:Event):void{
    const target = e.target as HTMLInputElement;
    const value = target.value;
    console.log('value',value)
    this.images = this.allImages.filter((retorno) => {
      return retorno.name.toLowerCase().includes(value);
    })
  }
}
