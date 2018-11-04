import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HOME_COMPONENTS, HOME_CONTAINERS } from './index';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CMSModule } from 'src/app/cms/cms.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ArticleModule } from '../article/article.module';
import { VideoModule } from '../video/video.module';
import { PodcastModule } from '../podcast/podcast.module';
import { EventsModule } from '../events/events.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    TabsModule.forRoot(),
    ArticleModule,
    VideoModule,
    PodcastModule,
    EventsModule,
    CMSModule,
    NgxSpinnerModule
  ],
  declarations: [...HOME_CONTAINERS, ...HOME_COMPONENTS]
})
export class HomeModule {}
