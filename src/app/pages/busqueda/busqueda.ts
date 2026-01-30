import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SearchApi, SearchFilters } from '../../services/search';
import { SiteItem } from '../../data/Site-index';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [RouterModule, FormsModule, NgFor, NgIf, AsyncPipe],
  templateUrl: './busqueda.html',
  styleUrls: ['./busqueda.css'],
})
export class BusquedaComponent implements OnDestroy {
  // Entrada de búsqueda
  query = '';

  // Filtros
  filters: SearchFilters = {
    type: 'todos',
    section: 'todas',
  };

  // Opciones del select
  sections: string[] = [];

  // Resultados
  results$!: Observable<SiteItem[]>;

  // Control de subscripciones
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private api: SearchApi
  ) {
    this.sections = this.api.getSections();

    this.route.queryParamMap
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        this.query = params.get('q') ?? '';
        this.doSearch();
      });
  }

  doSearch(): void {
    this.results$ = this.api.search(this.query, this.filters);
  }

  clear(): void {
    this.query = '';
    this.filters = { type: 'todos', section: 'todas' };
    this.doSearch();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
