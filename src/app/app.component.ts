import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ps6';
  data: any = null;

  constructor(private http: HttpClient) {}

  fetchData() {
    this.http.get('/assets/data.json').subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }
}
