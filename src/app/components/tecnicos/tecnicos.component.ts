import { Tecnico } from './../../models/tecnico';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tecnicos',
  templateUrl: './tecnicos.component.html',
  styleUrls: ['./tecnicos.component.scss']
})

export class TecnicosComponent implements OnInit, AfterViewInit {

  ELEMENT_DATA: Tecnico[] = [
    {
      id: 1,
      nome: "Gabriel Braga",
      cpf: "424.440.550-04",
      email: "gabriel@gmail.com",
      perfis: ["CLIENTE", "TECNICO"],
      dataCriacao: "18/08/2022"
    },
    {
      id: 2,
      nome: "Paulo",
      cpf: "324.129.560-57",
      email: "paulo@gmail.com",
      perfis: ["CLIENTE", "TECNICO"],
      dataCriacao: "12/12/2021"
    },
    {
      id: 3,
      nome: "Hirlem",
      cpf: "783.829.480-06",
      email: "hirlem@gmail.com",
      perfis: ["CLIENTE", "TECNICO"],
      dataCriacao: "30/08/2022"
    }
  ];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'dataCriacao'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit(): void {
  }
}


