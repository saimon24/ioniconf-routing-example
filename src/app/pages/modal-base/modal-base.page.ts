import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-base',
  templateUrl: './modal-base.page.html',
  styleUrls: ['./modal-base.page.scss'],
})
export class ModalBasePage implements OnInit {
  rootPage: any;

  constructor() { }

  ngOnInit() {
  }

}
