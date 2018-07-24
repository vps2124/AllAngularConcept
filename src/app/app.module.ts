import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
// Other imports removed for brevity
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { TodosComponent } from './todos/todos.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { NestedComponentsComponent } from './nested-components/nested-components.component';
import { ParentChildCommComponent } from './parent-child-comm/parent-child-comm.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { AnimationComponent } from './animation/animation.component';
import { AccountsComponent } from './accounts/accounts.component';
import { Angualr4ProjectRoutingModule } from './angualr4-project/angualr4-project-routing.module';
import { TestingComponent } from './testing/testing.component';
import { AngularCaseStudyComponent } from './angular-case-study/angular-case-study.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { UsersService } from './service/users.service';
import { AccountsService } from './service/accounts.service';
import { PostsService } from './service/posts.service';
import { CommentsService } from './service/comments.service';
import { TodosService } from './service/todos.service';
import { AlbumsService } from './service/albums.service';
import { PhotosService } from './service/photos.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';
import { FgColorDirective } from './directives/fg-color.directive';
import { BgColorDirective } from './directives/bg-color.directive';
import { NgShowDirective } from './directives/ng-show.directive';
import { NgHideDirective } from './directives/ng-hide.directive';
import { StudentComponent } from './student/student.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PagerService } from './service/pager.service';
import { FlightTicketComponent } from './flight-ticket/flight-ticket.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';


@NgModule({
  declarations: [       //components,directives,pipes
    AppComponent, AngularBasicsComponent, AngularPipesComponent, TechnologiesComponent, UsersComponent, PostsComponent, CommentsComponent, TodosComponent, AlbumsComponent, PhotosComponent, CustomDirectivesComponent, NestedComponentsComponent, ParentChildCommComponent, FormValidationComponent, AnimationComponent, AccountsComponent, TestingComponent, AngularCaseStudyComponent, UsersListComponent, UsersTableComponent, ParentComponent, ChildComponent, CountryComponent, StateComponent, CityComponent, FgColorDirective, BgColorDirective, NgShowDirective, NgHideDirective, StudentComponent, ReactiveFormComponent, FlightTicketComponent, SearchFlightComponent
  ],
  imports: [
    BrowserModule,   //modules
    Angualr4ProjectRoutingModule,
    FormsModule,
    RouterModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [UsersService,
  AccountsService,
  PostsService,
  CommentsService,
  TodosService,
  AlbumsService,
  PhotosService,
  PagerService
  ],  //services
  bootstrap: [AppComponent] //components
})
export class AppModule { }
