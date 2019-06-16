import { Component, OnInit } from '@angular/core';
import { SegmentedBarItem, SegmentedBar } from "tns-core-modules/ui/segmented-bar/segmented-bar";
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private dataNotification$: ObservableArray<any>;
  public segmentedBarItems: Array<SegmentedBarItem>;
  private selectedItemIndex: number = 0;

  constructor() { }

  ngOnInit() {
    this.buildSegmentedBarItems();
    this.getNotifications();
  }

  getNotifications(){
    let array = [
      { name : "Pago atrasado" },
      { name : "nueva función agregada" },
      { name : "arreglo de inconveniente con la facturas" }
    ]
    this.dataNotification$ = new ObservableArray(array);
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
