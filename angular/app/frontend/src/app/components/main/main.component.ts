import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { HttpService } from 'src/service/http-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  ngOnInit(): void {
    this.getdata()
  }
  constructor(private http : HttpService){

  }
 private url =  "http://127.0.0.1:5000/admin/"
   comp_cout = ''
   emp_count = ''
   number_jobs = ''
  getdata(){
    this.http.get<any>("admin/").subscribe((res)=>{
      console.log(res)
      const {comp_count, emp_count , numbers_jobs} = res.body;
      this.comp_cout = comp_count;
      this.emp_count = emp_count;
      this.number_jobs = numbers_jobs;
    })
  }
}
