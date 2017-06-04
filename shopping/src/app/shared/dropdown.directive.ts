import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: Boolean = false;

  @HostListener('click') onClick() {
    this.isOpen = !this.isOpen
 }
}
