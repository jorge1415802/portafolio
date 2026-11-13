import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Translate } from '../../commons/services/translate/translate';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected readonly translate = inject(Translate)
  protected readonly profile = computed(() => {
    const profLang = this.translate.current();
    return {
      prefix: profLang.prefix ?? 'Mi',
      porfolio: profLang.porfolio ?? 'Portafolio',
    };
  });

  protected readonly links = computed(() => {
    const tagsLang = this.translate.current();
    return [
      { label: tagsLang.home || 'Inicio', path: '/' },
      { label: tagsLang.projects || 'Proyectos', path: '/projects' },
      { label: tagsLang.about || 'Sobre Mí', path: '/about' },
    ];
  });
}

