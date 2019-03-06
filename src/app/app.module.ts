import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { FeedComponent } from './components/feed/feed.component';
import { UploadComponent } from './components/upload/upload.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
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
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthService } from './auth.service';
import { HomeRedirectComponent } from './Components/home-redirect/home-redirect.component';
import { DisclosureComponent } from './Components/disclosure/disclosure.component';
import { FeedRedirectComponent } from './Components/feed-redirect/feed-redirect.component';
import { SearchRedirectComponent } from './Components/search-redirect/search-redirect.component';
import { CatSingleComponent } from './Components/cat-single/cat-single.component';
import { PdetailComponent } from './Components/pdetail/pdetail.component';
import { SignupComponent } from './Components/signup/signup.component';

const appRoutes : Routes = [

{path : '', component: HomeComponent },
{path : 'category', component: CategoryComponent },
{path : 'feed', component: FeedComponent },
{path : 'feed/:slug', component: FeedComponent },
{path : 'upload', component: UploadComponent },
{path : 'login', component: LoginComponent },
{path : 'search', component: SearchComponent },
{path : 'post', component: PostComponent },
{path : 'home-redirect', component: HomeRedirectComponent },
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
{path : 'feed-redirect', component: FeedRedirectComponent },
{path : 'search-redirect', component: SearchRedirectComponent },
{path : 'cat-single/:slug', component: CatSingleComponent },
{path : 'cat-single/:slug/:slug2', component: CatSingleComponent },
{path : 'pdetail/:slug', component: PdetailComponent },
{path : 'register', component: SignupComponent}

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
    LoadingSpinnerComponent,
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
    HomeRedirectComponent,
    DisclosureComponent,
    FeedRedirectComponent,
    SearchRedirectComponent,
    CatSingleComponent,
    PdetailComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
