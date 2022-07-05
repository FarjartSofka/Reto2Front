import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table'
import { Score } from 'src/app/models/score';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-mejores-puntajes',
  templateUrl: './mejores-puntajes.component.html',
  styleUrls: ['./mejores-puntajes.component.css']
})
export class MejoresPuntajesComponent implements OnInit,  AfterViewInit {

  displayedColumns: string[] = ['jugadorId', 'nombre', 'puntaje'];
  dataSource = new MatTableDataSource<Score>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);

  constructor(
    private juegoSVC : JuegoService
  ) { }

  ngOnInit(): void {
    this.obtenerPuntajes();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

obtenerPuntajes(){
 this.juegoSVC.obtenerPuntajes().subscribe(score =>{
    this.dataSource.data = score;

   });

  }

}
