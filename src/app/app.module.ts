import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { MustMatchDirective } from './_helpers/must-match.directive';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { FeedComponent } from './components/feed/feed.component';
import { UploadComponent } from './components/upload/upload.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { PostComponent } from './components/post/post.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { TermsComponent } from './components/terms/terms.component';
import { BrandsComponent } from './components/brands/brands.component';
import { UsersComponent } from './components/users/users.component';
import { BloggersComponent } from './components/bloggers/bloggers.component';
import { TeamComponent } from './components/team/team.component';
import { SiteMapComponent } from './components/site-map/site-map.component';
import { BlogComponent } from './components/blog/blog.component';
import { DisclosureComponent } from './components/disclosure/disclosure.component';
import { CatSingleComponent } from './components/cat-single/cat-single.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';

const appRoutes : Routes = [

{path : '', component: HomeComponent },
{path : 'category', component: CategoryComponent },
{path : 'feed', component: FeedComponent },
{path : 'upload', component: UploadComponent },
{path : 'login', component: LoginComponent },
{path : 'search', component: SearchComponent },
{path : 'post', component: PostComponent },
{path : 'about', component: AboutComponent },
{path : 'blog', component: BlogComponent },
{path : 'bloggers', component: BloggersComponent },
{path : 'brands', component: BrandsComponent },
{path : 'contact', component: ContactComponent },
{path : 'faq', component: FaqComponent },
{path : 'site-map', component: SiteMapComponent },
{path : 'team', component: TeamComponent },
{path : 'terms', component: TermsComponent },
{path : 'users', component: UsersComponent },
{path : 'disclosure', component: DisclosureComponent },
{path : 'cat-single/:slug', component: CatSingleComponent },
{path : 'registration', component: SignupComponent},
{path : 'profile', component: ProfileComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    FeedComponent,
    UploadComponent,
    LoginComponent,
    SearchComponent,
    PostComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    TermsComponent,
    BrandsComponent,
    UsersComponent,
    BloggersComponent,
    TeamComponent,
    SiteMapComponent,
    BlogComponent,
    DisclosureComponent,
    CatSingleComponent,
    SignupComponent,
    MustMatchDirective,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
     ToastrModule.forRoot({
      timeOut: 8000,
      positionClass: 'toast-top-right'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
