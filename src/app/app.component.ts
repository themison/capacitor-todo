import { Component, OnInit } from '@angular/core';
import { registerPlugin } from '@capacitor/core';
import ECHO from './echo-plugin';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor() {}

  public async ngOnInit(): Promise<void> {
    const { value } = await ECHO.echo({ value: 'Hello World!' });
    console.log('Response from native:', value);
  }

}
