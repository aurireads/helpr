import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { Tecnico } from 'src/app/models/tecnico';
import { ClienteService } from 'src/app/services/cliente.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

type DataSection = {
  title: string,
  value: number
}

@Component({
  selector: 'app-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrls: ['./chamado-create.component.scss']
})
export class ChamadoCreateComponent implements OnInit {

  public statusList: DataSection[] = [
    { title: "Aberto", value: 0 },
    { title: "Em andamento", value: 1 },
    { title: "Encerrado", value: 2 }
  ];

  public prioridadeList: DataSection[] = [
    { title: "Baixa", value: 0 },
    { title: "Média", value: 1 },
    { title: "Alta", value: 2 }
  ];

  public clienteList: Cliente[] = [];
  public tecnicoList: Tecnico[] = [];

  public formChamado: FormGroup;

  private serviceCliente: ClienteService;
  private serviceTecnico: TecnicoService;

  constructor(serviceCliente: ClienteService, serviceTecnico: TecnicoService, formBuilder: FormBuilder) {
    this.serviceCliente = serviceCliente;
    this.serviceTecnico = serviceTecnico;
    this.formChamado = formBuilder.group({
      titulo: [""],
      status: [""],
      prioridade: [""],
      cliente: [""],
      tecnico: [""],
      observacoes: [""]
    });
  }

  ngOnInit(): void {
    this.initializeClientes();
    this.initializeTecnicos();
  }

  initializeClientes(): void {
    this.serviceCliente.findAll().subscribe(clientes => {
      this.clienteList = clientes;
    });
  }

  initializeTecnicos(): void {
    this.serviceTecnico.findAll().subscribe(tecnicos => {
      this.tecnicoList = tecnicos;
    });
  }

  create(): void {

  }
}
