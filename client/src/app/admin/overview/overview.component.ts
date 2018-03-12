import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../common/common-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  public dashboardInfo : object = {
    totalCounts : {},
    matchesStats : {}

  };
  constructor(private CommonServiceService : CommonServiceService) { 
    this.CommonServiceService.get('/admin')
    .map(res => res.json())
    .catch(this.handleError).subscribe(result=>{
      this.dashboardInfo = result;
    })
  }
  handleError(error: Response | any) {
    const body = JSON.parse(JSON.stringify(error)) || '';
    return Observable.throw(body);
  }

  ngOnInit() {
  }

}
