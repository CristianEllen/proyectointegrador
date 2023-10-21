import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-romies',
  templateUrl: './romies.component.html',
  styleUrls: ['./romies.component.css']
})
export class RomiesComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  romieData:any;
  ngOnInit(): void {
    this.romieData = this.service.romieDetails;
  }

}
