import { Component, Input } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-podcast-playlist',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss']
})
export class DSODPodcastPlayListComponent {
  @Input()
  content: CMSPageContent;
  constructor() {}
}
