import { Component } from "@angular/core";
import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';
import * as firebase from "nativescript-plugin-firebase"


registerElement('CardView', () => CardView);

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})

export class AppComponent {
 
    constructor() {
        this.initPushNotification();
    }

    private initPushNotification() {
        // firebase.init({
        //     persist: false,
        //     onMessageReceivedCallback:  (message) => {
        //         if (message.foreground != true) {
    
        //         } else {
    
        //         }
        //     },
        // });
    }
    
}
