import { AfterViewInit, Component } from '@angular/core';
import * as $ from 'jquery'
import { HttpService } from 'src/service/http-service.service';
@Component({
  selector: 'app-joblisting',
  templateUrl: './joblisting.component.html',
  styleUrls: ['./joblisting.component.css']
})
export class JoblistingComponent implements AfterViewInit {

 

  ngAfterViewInit() {
    // Function to hide all dropdowns
    function hideAllDropdowns() {
      $(".dropdown_location, .dropdown_skills, .dropdown_job_type, .dropdown_menu4, .dropdown_menu5").slideUp();
    }
    // Click event for dropdown1
    $(".dropdown1").click(function () {
      $(".dropdown_location").slideToggle("");
      $('.drop_down').not('.dropdown_location').slideUp();
    });
    // Click event for locationCancel
    $("#locationCancel").click(function () {
      $(".dropdown_location").slideToggle("");
      $('.drop_down').not('.dropdown_location').slideUp();
    });
    // Click event for dropdown2
    $(".dropdown2").click(function () {
      $(".dropdown_skills").slideToggle("");
      $('.drop_down').not('.dropdown_skills').slideUp();
    });
    // Click event for dropdown3
    $(".dropdown3").click(function () {
      $(".dropdown_job_type").slideToggle("");
      $('.drop_down').not('.dropdown_job_type').slideUp();
    });
    // Click event for dropdown4
    $(".dropdown4").click(function () {
      $(".dropdown_menu4").slideToggle("");
      $('.drop_down').not('.dropdown_menu4').slideUp();
    });
    // Click event for dropdown5
    $(".dropdown5").click(function () {
      $(".dropdown_menu5").slideToggle("");
      $('.drop_down').not('.dropdown_menu5').slideUp();
    });
  }

}