import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ExameService } from '../exame.service';
import { Exame } from '../exame';


@Component({
  selector: 'app-edit-exame',
  templateUrl: './edit-exame.component.html',
  styleUrls: ['./edit-exame.component.css']
})
export class EditExameComponent implements OnInit {

  private exame: Exame = null;
  private id: number;


  constructor(private router: Router, private route: ActivatedRoute, private exameService: ExameService) {}

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.id = params['id'];
      });
  
    }
    onSubmit(form: any){
      this.exame.dataExame = form.dataExame;
      this.exame.valor = form.valor;
      this.exame.dataResultado= form.dataResultado;
      this.exameService.update(this.exame, this.id).subscribe((result) => {
        console.log(result);
        alert('Exame atualizado!');
        this.router.navigate(['paciente/',result['idPaciente'],'/exames/',result['id']]);
      }, error => { alert('Um erro aconteceu, tente novamente!'); });
    }
  
  }
  