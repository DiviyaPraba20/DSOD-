import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

import { Store } from '@ngxs/store';
import { TabDirective } from 'ngx-bootstrap/tabs';
import * as actions from '../../../cms/actions';
import {
  CMSResponse,
  CMSPageContent,
  CMSContentTypeModel,
  Sponsors
} from 'src/app/cms/models';
import { FetchSponsorContents } from '../../../cms/actions';

@Component({
  selector: 'dsod-sponsors-container',
  templateUrl: './sponsors-container.component.html',
  styleUrls: ['./sponsors-container.component.scss']
})
export class SponsorsContainerComponent implements OnInit, OnDestroy {
  filterBy = 'All';
  sponsorName = '';
  sponsorsList = [];
  pageConents$: Observable<CMSResponse<CMSPageContent[]>>;
  postType: CMSContentTypeModel;
  sponsorInfo: Sponsors = {
    id: null,
    name: null
  };

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private spinner: NgxSpinnerService
  ) {
    store.dispatch(new actions.FetchContentTypes());
    store.dispatch(new actions.FetchSponsorsList());
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sponsorName = params.name;
      this.getSponsorId();
      this.getPostType();
      this.getPostContents();
    });
  }

  ngOnDestroy() {
    this.store.dispatch(new actions.ResetState());
  }

  onChangeFilter(data: TabDirective): void {
    this.filterBy = data.heading;
    this.getPostType();
  }

  getPostType() {
    this.store.select(state => state.cms.contentTypes).pipe().subscribe(item => {
      this.postType = item.filter(type => type.name === this.filterBy)[0];
      this.searchPostContents();
    });
  }

  getSponsorId() {
    this.store.select(state => state.cms.sponsorsList).pipe().subscribe(sponsors => {
      this.sponsorInfo = sponsors.filter(sponsor => sponsor.name === this.sponsorName)[0];
      this.searchPostContents();
    });
  }

  searchPostContents() {
    let contentTypeId = null;
    if (this.sponsorInfo && this.sponsorInfo.id) {
      if (this.postType && this.postType.id) {
        contentTypeId = this.postType.id;
      }
      this.spinner.show();
      this.store.dispatch(new FetchSponsorContents({
        skip: 0,
        limit: 100,
        contentTypeId: contentTypeId,
        sponsorId: this.sponsorInfo.id
      })).subscribe(res => {
        this.spinner.hide();
      });
    }
  }

  getPostContents() {
    this.pageConents$ = this.store.select(state => state.cms.sponsoredTopics);
  }
}