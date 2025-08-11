import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name: string = 'Muhammad Mahad';
  age: number = 20;
  description: string = 'A passionate Web developer Ready to Learn New Things.';
}
