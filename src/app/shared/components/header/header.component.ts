import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, Location, NgOptimizedImage } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from '@components/button/button.component';
import { TypeButton } from '@core/types/type-button';
import { NavigationEnd, Router } from '@angular/router';
import { Icon } from '@core/utils/icon';
import {
  AppRoute,
  getRouteTitle,
  isWithBack,
  isWithHeader,
  isWithPreferences,
  isWithPreferencesAndButtonEditProfile,
} from '@core/utils/app-route';
import { Data } from '@core/utils/data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    AngularSvgIconModule,
    ButtonComponent,
    NgOptimizedImage,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input() isWithPreferences: boolean;
  @Input() isForBanner: boolean;
  @Input() title: string;
  @Input() image: string;
  @Input() description: string;

  isActive: boolean;
  showHeader: boolean;
  isWithButtonEditProfile: boolean;
  isWithBack: boolean;
  protected readonly TypeButton = TypeButton;
  protected readonly Icon = Icon;

  constructor(
    private router: Router,
    private location: Location
  ) {
    this.isActive = false;
    this.showHeader = false;
    this.isWithPreferences = false;
    this.isWithButtonEditProfile = false;
    this.isWithBack = false;
    this.title = Data.article.user.name;
    this.image = Data.article.user.photo;
    this.description = '';
    this.isForBanner = false;
  }

  get withDescription(): boolean {
    return this.description !== '';
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeader = isWithHeader(event.url);
        if (this.showHeader) {
          this.isWithPreferences = isWithPreferences(event.url);
          this.isWithButtonEditProfile = isWithPreferencesAndButtonEditProfile(
            event.url
          );
          this.isWithBack = isWithBack(event.url);
          this.title = getRouteTitle(event.url);
        }
      }
    });

    if (this.isForBanner) {
      this.showHeader = true;
      this.isWithPreferences = true;
      this.isWithButtonEditProfile = true;
      this.isWithBack = true;
    }
  }

  togglePreferences() {
    this.isActive = !this.isActive;
  }

  redirectToBack() {
    this.location.back();
  }

  navigateToEditProfile() {
    this.router
      .navigate([`${AppRoute.Profile}/${AppRoute.EditProfile}`])
      .then();
    this.togglePreferences();
  }
}
