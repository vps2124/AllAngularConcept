import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularBasicsComponent } from '../angular-basics/angular-basics.component';
import { AngularPipesComponent } from '../angular-pipes/angular-pipes.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { UsersComponent } from '../users/users.component';
import { PostsComponent } from '../posts/posts.component';
import { CommentsComponent } from '../comments/comments.component';
import { TodosComponent } from '../todos/todos.component';
import { AlbumsComponent } from '../albums/albums.component';
import { PhotosComponent } from '../photos/photos.component';
import { CustomDirectivesComponent } from '../custom-directives/custom-directives.component';
import { NestedComponentsComponent } from '../nested-components/nested-components.component';
import { FormValidationComponent } from '../form-validation/form-validation.component';
import { ParentChildCommComponent } from '../parent-child-comm/parent-child-comm.component';
import { AnimationComponent } from '../animation/animation.component';
import { AccountsComponent } from '../accounts/accounts.component';
import { TestingComponent } from '../testing/testing.component';
import { AngularCaseStudyComponent } from '../angular-case-study/angular-case-study.component';
import { UsersListComponent } from '../users-list/users-list.component';
import { UsersTableComponent } from '../users-table/users-table.component';
import { FlightTicketComponent } from '../flight-ticket/flight-ticket.component';
import { SearchFlightComponent } from '../search-flight/search-flight.component';

const routes: Routes = [
  {path:"home",component:AngularBasicsComponent},
  {path:"basics",component:AngularBasicsComponent},
  {path:"pipes",component:AngularPipesComponent},
  {path:"technologies",component:TechnologiesComponent},
  {path:"casestudy",component:AngularCaseStudyComponent,
   children:[
    {path:"users",component:UsersComponent,
  
  children:[
    {path:"list",component:UsersListComponent},
    {path:"table",component:UsersTableComponent},
    ]
   },


   {path:"users/:userId",component:UsersComponent},
   {path:"posts",component:PostsComponent},
   {path:"comments",component:CommentsComponent},
    {path:"todos",component:TodosComponent},
    {path:"albums",component:AlbumsComponent},
    {path:"photos",component:PhotosComponent},
    {path:"**",redirectTo:"casestudy"}
    
   ]



  },
  {path:"custom-directives",component:CustomDirectivesComponent},
  {path:"nested-component",component:NestedComponentsComponent},
  {path:"form-validation",component:FormValidationComponent},
  {path:"parent-child-comm",component:ParentChildCommComponent},
  {path:"animation",component:AnimationComponent},
  {path:"accounts",component:AccountsComponent},
  {path:"testing",component:TestingComponent},
  {path:"flight-booking",component:FlightTicketComponent,
  children:[
    {path:"SearchFlightComponent",component:SearchFlightComponent}
  ]

},  
  
  {path:"**",redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class Angualr4ProjectRoutingModule { }