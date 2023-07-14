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
  isArticleRoute,
  isWithBack,
  isWithHeader,
  isWithPreferences,
  isWithPreferencesAndButtonEditProfile,
  setRoute,
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
  isForArticlePage: boolean;
  @Input() title: string;
  @Input() image: string;
  @Input() description: string;

  showPreferences: boolean;
  showHeader: boolean;
  isWithButtonEditProfile: boolean;
  isWithBack: boolean;
  protected readonly TypeButton = TypeButton;
  protected readonly Icon = Icon;

  constructor(
    private router: Router,
    private location: Location
  ) {
    this.showPreferences = false;
    this.showHeader = false;
    this.isWithPreferences = false;
    this.isWithButtonEditProfile = false;
    this.isWithBack = false;
    this.title = Data.article.user.name;
    this.image = Data.article.user.photo;
    this.description = '';
    this.isForArticlePage = false;
  }

  get withDescription(): boolean {
    return this.description !== '';
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.url;
        setRoute(currentUrl);
        this.showHeader = isWithHeader();
        if (this.showHeader) {
          this.isWithPreferences = isWithPreferences();
          this.isWithButtonEditProfile =
            isWithPreferencesAndButtonEditProfile();
          this.isWithBack = isWithBack();
          this.title = getRouteTitle();
          this.isForArticlePage = isArticleRoute();
        }
      }
    });
  }

  togglePreferences() {
    if (this.isWithPreferences) {
      this.showPreferences = !this.showPreferences;
    }
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
