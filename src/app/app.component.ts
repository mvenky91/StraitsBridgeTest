import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'careersStraitBridgeTest';
  layouts: any = [];
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get('assets/data.json').subscribe(
      (res: any) => {
        if (res && res.status && res.status == 200) {
          this.layouts = res.result.layouts;
        }
      }
    )
  }
}
