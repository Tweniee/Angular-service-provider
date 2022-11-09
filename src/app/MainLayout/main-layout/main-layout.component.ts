import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { category } from '../interface/category.model';
import { MainService } from '../Services/main-service.service';

interface data {
  success: boolean;
  categoryList: category[];
}
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent implements OnInit {
  allCategory: category[];
  count: number = 1;
  constructor(public service: MainService,private cService: CommonService) {}

  ngOnInit(): void {
    console.log(this.cService.getDecodedAccessToken())
    this.service.getAllCategory().then((data: data) => {
      this.allCategory = data.categoryList;
    });
  }
}
