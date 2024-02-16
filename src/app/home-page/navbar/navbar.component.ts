import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() categories: string[] = [];
  @Output() categoryName = new EventEmitter<string>();

  handleCategory(event: string) {
    this.categoryName.emit(event);
  }

}
