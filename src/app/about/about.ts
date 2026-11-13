import { Component, computed, inject } from '@angular/core';
import { Translate } from '../commons/services/translate/translate';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  private readonly translate = inject(Translate);

  protected readonly data = computed(() => {
    const lang = this.translate.current();
    return {
      eyebrow: lang.about_eyebrow ?? 'Acerca de mí',
      title: lang.about_title ?? 'Construyo software fullstack que escala.',
      summary: lang.about_summary ?? 'Soy ingeniero en computación con más de seis años desarrollando productos de punta a punta.',
      paragraphs: lang.about_paragraphs ?? [],
      focusTitle: lang.about_focus_title ?? 'En qué me enfoco',
      focus: lang.about_focus ?? [],
    };
  });
}
