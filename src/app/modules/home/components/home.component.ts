import { Component, OnInit } from '@angular/core';
import { SegmentedBarItem, SegmentedBar } from "tns-core-modules/ui/segmented-bar/segmented-bar";
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { HomeService } from "../services/home.service";

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private dataNotification$: ObservableArray<any> = new ObservableArray([]);
  public segmentedBarItems: Array<SegmentedBarItem>;
  private selectedItemIndex: number = 0;

  constructor(private service :HomeService) { }

  ngOnInit() {
    this.buildSegmentedBarItems();
    this.getMessage();
  }

  getMessage(){
    this.service.getMessage().then((data)=>{
      this.dataNotification$ = data;
    });
  }

  private buildSegmentedBarItems() {
    this.segmentedBarItems = [];
    let item1 = new SegmentedBarItem();
    item1.title = "Información";
    this.segmentedBarItems.push(item1);
    let item2 = new SegmentedBarItem();
    item2.title = "Histórico";
    this.segmentedBarItems.push(item2);
  }

  public ChangetabIndexIOS(index) {
    this.selectedItemIndex = index;
  }

  public ChangetabIndexAndroid(args) {
    let segmetedBar = <SegmentedBar>args.object;
    this.selectedItemIndex = segmetedBar.selectedIndex;
  }

  get dataNotification(): ObservableArray<any> {
    return this.dataNotification$;
  }
}
