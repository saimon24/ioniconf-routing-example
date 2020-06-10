import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  myid = null;
  data = null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // Getting the id from the URL
    this.route.paramMap.subscribe(params => {
      this.myid = params.get('id');
    });

    // Getting data from the resolver
    this.data = this.route.snapshot.data['pokemon'];

    // Getting data from query params
    this.route.queryParams.subscribe(params => {
      if (params.pokemon) {
        this.data = JSON.parse(params.pokemon);
      }
    });

    // Getting the router state
    this.route.queryParams.subscribe(params => {      
      if (this.router.getCurrentNavigation().extras.state) {        
        this.data = this.router.getCurrentNavigation().extras.state.pokemon;
      }
    });
  }

}
