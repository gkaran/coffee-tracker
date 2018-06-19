import {LayoutModule} from '@angular/cdk/layout';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatProgressSpinnerModule,
  MatSidenavModule, MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatToolbarModule, MatFormFieldModule, MatInputModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {ChartsModule} from 'ng2-charts';
import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {AverageCoffeesComponent} from './average-coffees/average-coffees.component';
import {LeaderboardComponent} from './leaderboard/leaderboard.component';
import {NavbarComponent} from './navbar/navbar.component';
import {UnpaidCoffeesComponent} from './unpaid-coffees/unpaid-coffees.component';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import {MonthlyCoffeesComponent} from './monthly-coffees/monthly-coffees.component';
import {AddCoffeeModalComponent} from './modals/add-coffee-modal/add-coffee-modal.component';
import {UpdateNameModalComponent} from './modals/update-name-modal/update-name-modal.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {NonAuthedGuard} from './non-authed.guard';
import {AuthedGuard} from './authed.guard';
import {AuthService} from './services/auth.service';
import {AddCoffeeBtnComponent} from './add-coffee-btn/add-coffee-btn.component';
import {PayCoffeeBtnComponent} from './pay-coffee-btn/pay-coffee-btn.component';
import {CoffeeService} from './coffee.service';
import {LiveFeedComponent} from './live-feed/live-feed.component';
import {PayCoffeeModalComponent} from './modals/pay-coffee-modal/pay-coffee-modal.component';
import {DateDistanceInWordsToNowPipe} from './date-distance-in-words-to-now.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UnpaidCoffeesComponent,
    LeaderboardComponent,
    AverageCoffeesComponent,
    UserDashboardComponent,
    NavbarComponent,
    MonthlyCoffeesComponent,
    AddCoffeeModalComponent,
    UpdateNameModalComponent,
    LoginComponent,
    AddCoffeeBtnComponent,
    PayCoffeeBtnComponent,
    LiveFeedComponent,
    PayCoffeeModalComponent,
    DateDistanceInWordsToNowPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatProgressSpinnerModule,
    ChartsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    FormsModule,
    MatSnackBarModule,
    AppRoutingModule
  ],
  providers: [
    NonAuthedGuard,
    AuthedGuard,
    AuthService,
    CoffeeService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddCoffeeModalComponent,
    UpdateNameModalComponent,
    PayCoffeeModalComponent
  ]
})
export class AppModule {}
