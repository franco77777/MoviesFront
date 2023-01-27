import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appRecarga]',
})
export class RecargaDirective implements OnChanges {
  @Input() appRecarga: number;
  constructor(
    private templateref: TemplateRef<any>,
    private viewconteinerRef: ViewContainerRef
  ) {
    this.viewconteinerRef.createEmbeddedView(templateref);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['appRecarga'] &&
      changes['appRecarga'].previousValue !== undefined
    ) {
      this.viewconteinerRef.clear();
      this.viewconteinerRef.createEmbeddedView(this.templateref);
    }
  }
}
