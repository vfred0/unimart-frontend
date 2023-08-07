import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, Location, NgOptimizedImage } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from '@components/button/button.component';
import { TypeButton } from '@core/enums/type-button';
import { NavigationEnd, Router } from '@angular/router';
import { Icon } from '@core/enums/icon';
import {
  AppRoute,
  getRouteTitle,
  isArticleRoute,
  isHomeRoute,
  isWithBack,
  isWithHeader,
  isWithPreferences,
  isWithPreferencesAndButtonEditProfile,
  setRoute,
} from '@core/utils/app-route';
import { HeaderDetailComponent } from '@components/header-detail/header-detail.component';
import { HeaderDetail } from '@core/utils/header-detail';
import { AuthService } from '@shared/services/auth.service';
import { UserMapperService } from '@shared/mappers/user-mapper.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    AngularSvgIconModule,
    ButtonComponent,
    NgOptimizedImage,
    HeaderDetailComponent,
  ],
  providers: [UserMapperService],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input() isWithPreferences: boolean;
  isForArticlePage: boolean;
  showPreferences: boolean;
  showHeader: boolean;
  isWithButtonEditProfile: boolean;
  isWithBack: boolean;
  headerDetail: HeaderDetail;
  protected readonly TypeButton = TypeButton;
  protected readonly Icon = Icon;

  constructor(
    private router: Router,
    private location: Location,
    private authService: AuthService,
    private userMapperService: UserMapperService
  ) {
    this.showPreferences = false;
    this.showHeader = false;
    this.isWithPreferences = false;
    this.isWithButtonEditProfile = false;
    this.isWithBack = false;
    this.isForArticlePage = false;
    this.headerDetail = {} as HeaderDetail;
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
          this.headerDetail = this.userMapperService.toHeaderDetails(
            this.authService.user
          );
          if (!isHomeRoute()) {
            this.headerDetail.title = getRouteTitle();
          }
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

  onLogout() {
    this.authService.logout();
    this.router.navigate([AppRoute.AuthLogin]).then();
    this.togglePreferences();
  }
}
