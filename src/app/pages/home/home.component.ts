import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DemoComponent, CommonModule],
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

}
