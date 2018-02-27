import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonServiceService } from '../common/common-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public jobs : Array<object>;
  public query : string;
  public hideSearch : boolean = false;
  private router : Router;
  private filter : object;
  
  constructor(private commonServiceService: CommonServiceService, private Router: Router) { 
    this.router= Router;
  }

  ngOnInit() {
  }
  search(){
    let self = this;
    this.commonServiceService.get('/search?query='+this.query, this.filter)
    .map(res => res.json())
    .catch(this.handleError)
    .subscribe(function(jobs){
      self.jobs = jobs;
      self.hideSearch = true;
      localStorage.setItem('searchedJobs', JSON.stringify(jobs));
    });
  }
  handleError(error: Response | any) {
    const body = JSON.parse(JSON.stringify(error)) || '';
    return Observable.throw(body);
  }
  toggleFilter(key,value){
    if(this.filter[key] && this.filter[key] === value){
      delete this.filter[key];
    }else{
      this.filter[key] = value;
    }
  }
}
