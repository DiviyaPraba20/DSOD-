import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dsod-latest-item',
	templateUrl:'./latest-item.component.html' ,
  styleUrls: ['./latest-item.component.scss']
})
export class DsodLatestItemComponent implements OnInit {

	@Input() latestItem;

  constructor() {}

  ngOnInit() {}
}