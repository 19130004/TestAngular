import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {NewsApiService} from "./Service/news-api.service";
import {HttpClientModule} from "@angular/common/http";
import { FooterComponent } from './footer/footer.component';
import { DomesticComponent } from './domestic/domestic.component';
import {NgxPaginationModule} from "ngx-pagination";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForeignComponent } from './foreign/foreign.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { ListNewsSearchComponent } from './list-news-search/list-news-search.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { RightCateloryComponent } from './right-catelory/right-catelory.component';
import { CommentComponent } from './comment/comment.component';
import { UnionComponent } from './union/union.component';
import { YouReadComponent } from './you-read/you-read.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { FooterMobileComponent } from './footer-mobile/footer-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DomesticComponent,
    ForeignComponent,
    ScrollToTopComponent,
    ListNewsSearchComponent,
    SearchComponent,
    NewsDetailComponent,
    RightCateloryComponent,
    CommentComponent,
    UnionComponent,
    YouReadComponent,
    HeaderMobileComponent,
    FooterMobileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
