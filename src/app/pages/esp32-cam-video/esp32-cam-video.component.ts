import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esp32-cam-video',
  templateUrl: './esp32-cam-video.component.html',
  styleUrls: ['./esp32-cam-video.component.css']
})
export class Esp32CamVideoComponent implements OnInit {

  constructor(private http:HttpClient) { }

  async ngOnInit() {
    //const req = new HttpRequest<any>("GET", "http://192.168.31.39/mjpeg/1");
    const response=await fetch("http://192.168.31.39/mjpeg/1");
   
    const reader= response.body.getReader();

    reader.cancel();

    while (true) {
      const a = await reader.read();
      if (a.done) break;
      if(a.value){
        a.value
      }

    }

    const img = new Image();
    // img.src = "http://192.168.31.39/mjpeg/1";
  }

}
