import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularSvgIconModule } from "angular-svg-icon";
import { ButtonComponent } from "@components/button/button.component";
import { TypeButton } from "@core/types/type-button";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule, ButtonComponent],
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent {
  @Input() isBack: boolean;
  @Input() withPreferences: boolean;
  @Input() title: string;
  @Input() image: string;
  @Input() description: string;

  isActive: boolean;
  protected readonly TypeButton = TypeButton;

  constructor(private router: Router) {
    this.isActive = false;
    this.isBack = false;
    this.withPreferences = true;
    this.title = 'Victor Arreaga';
    this.image = 'https://avatars.githubusercontent.com/u/18092385?v=4';
    this.description = '';
  }

  get withDescription(): boolean {
    return this.description !== '';
  }

  togglePreferences() {
    this.isActive = !this.isActive;
  }

  redirectToBack() {
    this.router.navigate(['/']).then();
  }
}