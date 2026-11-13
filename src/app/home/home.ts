import { Component, computed, signal } from '@angular/core';
import { inject } from '@angular/core';
import { Translate } from '../commons/services/translate/translate';
import { RouterLink } from '@angular/router';
import { HlmCardImports } from '@spartan-ng/helm/card'

@Component({
  selector: 'app-home',
  imports: [RouterLink, HlmCardImports],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly translate = inject(Translate)
  protected readonly data = computed(() => {
    const lang = this.translate.current();
    return {
      greetings: lang.greetings ?? 'Hola soy',
      profiency: lang.profiency ?? 'Ing en Computacion | Desarrollador web y movil | Sistemas distribuidos en la nube',
      see_projects: lang.see_projects ?? 'Ver Proyectos',
      contact_me: lang.contact_me ?? 'Contáctame',
      stack_heading: lang.stack_heading ?? 'Stack',
      stack_intro: lang.stack_intro ?? 'Tecnologías con las que diseño sistemas fullstack, serverless y distribuidos.',
      stack_groups: lang.stack_groups ?? [],
    };
  })
  protected readonly link = signal('/projects')
}
