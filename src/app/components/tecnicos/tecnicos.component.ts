import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';

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
      cpf: "123456789",
      email: "gabrielb@mail.com",
      perfis: ["CLIENTE", "TECNICO"],
      dataCriacao: "18/08/2022"
    },
    {
      id: 2,
      nome: "Paulo",
      cpf: "12345678978",
      email: "paulo@mail.com",
      perfis: ["CLIENTE", "TECNICO"],
      dataCriacao: "12/05/2022"
    },
    {
      id: 3,
      nome: "Hirlem",
      cpf: "1234561326",
      email: "hirlem@mail.com",
      perfis: ["CLIENTE", "TECNICO"],
      dataCriacao: "30/12/2021"
    }
  ];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'dataCriacao', 'update', 'delete'];
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
