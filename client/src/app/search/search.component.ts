import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonServiceService } from '../common/common-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public jobs;
  public query : string;
  constructor(private commonServiceService: CommonServiceService) { }

  ngOnInit() {
  }
  search(){
    this.jobs = this.commonServiceService.get('/search?query='+this.query)
    .map(res => res.json())
    .catch(this.handleError);
  }
  handleError(error: Response | any) {
    const body = JSON.parse(JSON.stringify(error)) || '';
    return Observable.throw(body);
  }

}
