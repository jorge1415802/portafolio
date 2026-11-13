import { Component, computed, inject } from '@angular/core';
import { HlmCardImports } from '@spartan-ng/helm/card';
import {  HlmButtonImports } from '@spartan-ng/helm/button'
import { Translate } from '../commons/services/translate/translate';
import { Project } from './interfaces/project.interface';
@Component({
  selector: 'app-projects',
  imports: [HlmCardImports, HlmButtonImports],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private readonly translate = inject(Translate);
  protected readonly projects = computed<Project[]>(() => this.translate.current().projects_list);

}
