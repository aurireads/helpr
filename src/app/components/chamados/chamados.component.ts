import { MatRadioButton } from '@angular/material/radio';
import { ChamadoService } from './../../services/chamado.service';
import { Chamado } from './../../models/chamado';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.scss']
})
export class ChamadosComponent implements OnInit {

  public chamadoList: Chamado[] = [];

  displayedColumns: string[] = ['id', 'titulo', 'cliente', 'tecnico', 'dataAbertura', 'prioridade', 'status', 'update', 'details'];
  dataSource = new MatTableDataSource<Chamado>(this.chamadoList);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  private service: ChamadoService;

  constructor(service: ChamadoService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.initializeTable();
  }

  initializeTable(): void {
    this.service.findAll().subscribe(chamados => {
      this.chamadoList = chamados;
      this.dataSource = new MatTableDataSource<Chamado>(this.chamadoList);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  filterByStatus(status: number): void {
    let filterList: Chamado[] = [];
    this.chamadoList.forEach(chamado => {
      if(chamado.status === status){
        filterList.push(chamado);
      }
    });
    this.dataSource = new MatTableDataSource<Chamado>(filterList);
    this.dataSource.paginator = this.paginator;
  }

  clearFilter(input: HTMLInputElement, check1: MatRadioButton, check2: MatRadioButton, check3: MatRadioButton): void {
    input.value = "" ;
    check1.checked = false;
    check2.checked = false;
    check3.checked = false;
    this.dataSource = new MatTableDataSource<Chamado>(this.chamadoList);
    this.dataSource.paginator = this.paginator;
  }
}
