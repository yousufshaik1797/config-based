import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ConnectableObservable, of } from 'rxjs';
import { TableConfig } from 'ui-table';
import { FlightData, FlightStatus } from '../models/flightStatus';
import { SearchFlightRequest } from '../models/searchFlightRequest';

@Component({
  selector: 'cbc-feature-table',
  templateUrl: './feature-table.component.html',
  styleUrls: ['./feature-table.component.scss']
})
export class FeatureTableComponent implements OnInit {

  statusArray = [FlightStatus.onTime, FlightStatus.delayed, FlightStatus.cancelled];
  tableConfig?: TableConfig<SearchFlightRequest, FlightData>;
  // flghtData: FlightData[] = [
  //   {
  //     id: 1,
  //     from: 'Visakapatnam',
  //     to: 'Mallorca',
  //     date: new Date().toISOString(),
  //     status: FlightStatus.onTime
  //   },
  //   {
  //     id: 2,
  //     from: 'Washington',
  //     to: 'Barcelona',
  //     date: new Date().toISOString(),
  //     status: FlightStatus.delayed

  //   },
  //   {
  //     id: 3,
  //     from: 'Mallorca',
  //     to: 'Ibiza',
  //     date: new Date().toISOString(),
  //     status: FlightStatus.onTime

  //   },
  //   {
  //     id: 4,
  //     from: 'Visakapatnam',
  //     to: 'Tirupathi',
  //     date: new Date().toISOString(),
  //     status: FlightStatus.cancelled

  //   },
  //   {
  //     id: 5,
  //     from: 'Delhi',
  //     to: 'Visakapatnam',
  //     date: new Date().toISOString(),
  //     status: FlightStatus.delayed

  //   },
  //   {
  //     id: 6,
  //     from: 'Barcelona',
  //     to: 'Chennai',
  //     date: new Date().toISOString(),
  //     status: FlightStatus.cancelled

  //   },
  //   {
  //     id: 7,
  //     from: 'Delhi',
  //     to: 'Singapore',
  //     date: new Date().toISOString(),
  //     status: FlightStatus.delayed

  //   },
  //   {
  //     id: 8,
  //     from: 'Delhi',
  //     to: 'Washington',
  //     date: new Date().toISOString(),
  //     status: FlightStatus.onTime

  //   },
  //   {
  //     id: 9,
  //     from: 'Paris',
  //     to: 'New york',
  //     date: new Date().toISOString(),
  //     status: FlightStatus.cancelled

  //   },
  //   {
  //     id: 10,
  //     from: 'Barcelona',
  //     to: 'Paris',
  //     date: new Date().toISOString(),
  //     status: FlightStatus.cancelled

  //   },
  //   {
  //     id: 11,
  //     from: 'Chennai',
  //     to: 'Delhi',
  //     date: new Date().toISOString(),
  //     status: FlightStatus.delayed

  //   },
  //   {
  //     id: 12,
  //     from: 'Chennai',
  //     to: 'Tokyo',
  //     date: new Date().toISOString(),
  //     status: FlightStatus.onTime

  //   },
  //   {
  //     id: 13,
  //     from: 'New york',
  //     to: 'Mumbai',
  //     date: new Date().toISOString(),

  //     status: FlightStatus.cancelled

  //   },
  //   {
  //     id: 14,
  //     from: 'Tokyo',
  //     to: 'Kolkata',
  //     date: new Date().toISOString(),
  //     status: FlightStatus.cancelled

  //   },
  //   {
  //     id: 15,
  //     from: 'Shimla',
  //     to: 'Dhaka',
  //     date: new Date().toISOString(),
  //     status: FlightStatus.delayed

  //   },
  //   {
  //     id: 16,
  //     from: 'Tokyo',
  //     to: 'Shimla',
  //     date: new Date().toISOString(),
  //     status: FlightStatus.onTime

  //   },
  //   {
  //     id: 17,
  //     from: 'Dhaka',
  //     to: 'Ahmedabad',
  //     date: new Date().toISOString(),
  //     status: FlightStatus.cancelled

  //   },
  //   {
  //     id: 18,
  //     from: 'Ahmedabad',
  //     to: 'Ibiza',
  //     date: new Date().toISOString(),
  //     status: FlightStatus.delayed

  //   },
  //   {
  //     id: 19,
  //     from: 'Delhi',
  //     to: 'Mumbai',
  //     date: new Date().toISOString(),
  //     status: FlightStatus.onTime

  //   },
  //   {
  //     id: 20,
  //     from: 'Singapore',
  //     to: 'Delhi',
  //     date: new Date().toISOString(),
  //     status: FlightStatus.delayed

  //   },
  //   {
  //     id: 21,
  //     from: 'Delhi',
  //     to: 'Singapore',
  //     date: new Date().toISOString(),
  //     status: FlightStatus.delayed

  //   },
  //   {
  //     id: 22,
  //     from: 'Dhaka',
  //     to: 'Shimla',
  //     date: new Date().toISOString(),
  //     status: FlightStatus.onTime

  //   },
  // ]

  date: Date = new Date()
  flghtData: FlightData[] = [
    {
      id: 1,
      from: 'Visakapatnam',
      to: 'Mallorca',
      date: formatDate(this.date.setDate(this.date.getDate() + 1), 'yyyy-MM-dd', 'en-US'),
      status: FlightStatus.onTime
    },
    {
      id: 2,
      from: 'Washington',
      to: 'Barcelona',
      date: formatDate(this.date.setDate(this.date.getDate()), 'yyyy-MM-dd', 'en-US'),
      status: FlightStatus.delayed
    },
    {
      id: 3,
      from: 'Mallorca',
      to: 'Ibiza',
      date: formatDate(this.date.setDate(this.date.getDate() + 1), 'yyyy-MM-dd', 'en-US'),
      status: FlightStatus.onTime

    },
    {
      id: 4,
      from: 'Visakapatnam',
      to: 'Tirupathi',
      date: formatDate(this.date.setDate(this.date.getDate()), 'yyyy-MM-dd', 'en-US'),
      status: FlightStatus.cancelled
    },
    {
      id: 5,
      from: 'Delhi',
      to: 'Visakapatnam',
      date: formatDate(this.date.setDate(this.date.getDate() - 2), 'yyyy-MM-dd', 'en-US'),
      status: FlightStatus.delayed

    },
    {
      id: 6,
      from: 'Barcelona',
      to: 'Chennai',
      date: formatDate(this.date.setDate(this.date.getDate() + 3), 'yyyy-MM-dd', 'en-US'),
      status: FlightStatus.cancelled

    },
    {
      id: 7,
      from: 'Delhi',
      to: 'Singapore',
      date: formatDate(this.date.setDate(this.date.getDate()), 'yyyy-MM-dd', 'en-US'),
      status: FlightStatus.delayed

    },
    {
      id: 8,
      from: 'Delhi',
      to: 'Washington',
      date: formatDate(this.date.setDate(this.date.getDate() - 2), 'yyyy-MM-dd', 'en-US'),
      status: FlightStatus.onTime
    },
    {
      id: 9,
      from: 'Paris',
      to: 'New york',
      date: formatDate(this.date.setDate(this.date.getDate() + 1), 'yyyy-MM-dd', 'en-US'),
      status: FlightStatus.cancelled
    },
    {
      id: 10,
      from: 'Barcelona',
      to: 'Paris',
      date: formatDate(this.date.setDate(this.date.getDate()), 'yyyy-MM-dd', 'en-US'),
      status: FlightStatus.cancelled
    },
    {
      id: 11,
      from: 'Chennai',
      to: 'Delhi',
      date: formatDate(this.date.setDate(this.date.getDate() + 1), 'yyyy-MM-dd', 'en-US'),
      status: FlightStatus.delayed
    },
    {
      id: 12,
      from: 'Chennai',
      to: 'Tokyo',
      date: formatDate(this.date.setDate(this.date.getDate()), 'yyyy-MM-dd', 'en-US'),
      status: FlightStatus.onTime
    },
    {
      id: 13,
      from: 'New york',
      to: 'Mumbai',
      date: formatDate(this.date.setDate(this.date.getDate() - 3), 'yyyy-MM-dd', 'en-US'),
      status: FlightStatus.cancelled
    },
    {
      id: 14,
      from: 'Tokyo',
      to: 'Kolkata',
      date: formatDate(this.date.setDate(this.date.getDate() + 5), 'yyyy-MM-dd', 'en-US'),
      status: FlightStatus.cancelled
    },
    {
      id: 15,
      from: 'Shimla',
      to: 'Dhaka',
      date: formatDate(this.date.setDate(this.date.getDate() - 1), 'yyyy-MM-dd', 'en-US'),
      status: FlightStatus.delayed
    },
    {
      id: 16,
      from: 'Tokyo',
      to: 'Shimla',
      date: formatDate(this.date.setDate(this.date.getDate() + 1), 'yyyy-MM-dd', 'en-US'),
      status: FlightStatus.onTime
    },
    {
      id: 17,
      from: 'Dhaka',
      to: 'Ahmedabad',
      date: formatDate(this.date.setDate(this.date.getDate() - 3), 'yyyy-MM-dd', 'en-US'),
      status: FlightStatus.cancelled
    },
    {
      id: 18,
      from: 'Ahmedabad',
      to: 'Ibiza',
      date: formatDate(this.date.setDate(this.date.getDate() - 1), 'yyyy-MM-dd', 'en-US'),
      status: FlightStatus.delayed
    },
    {
      id: 19,
      from: 'Delhi',
      to: 'Mumbai',
      date: formatDate(this.date.setDate(this.date.getDate() + 2), 'yyyy-MM-dd', 'en-US'),
      status: FlightStatus.onTime
    },
    {
      id: 20,
      from: 'Singapore',
      to: 'Delhi',
      date: formatDate(this.date.setDate(this.date.getDate() + 1), 'yyyy-MM-dd', 'en-US'),
      status: FlightStatus.delayed
    },
    {
      id: 21,
      from: 'Delhi',
      to: 'Singapore',
      date: formatDate(this.date.setDate(this.date.getDate() - 4), 'yyyy-MM-dd', 'en-US'),
      status: FlightStatus.delayed
    },
    {
      id: 22,
      from: 'Dhaka',
      to: 'Shimla',
      date: formatDate(this.date.setDate(this.date.getDate() + 4), 'yyyy-MM-dd', 'en-US'),
      status: FlightStatus.onTime
    },
  ]
  constructor() { }

  ngOnInit(): void {
    this.tableConfig = new TableConfig<any, any>({
      criteria: new SearchFlightRequest,
      search: (criteria) => this.Search(criteria),
    })
  }

  onChange(criteria: SearchFlightRequest, state: FlightStatus, event?: Event) {
    const index = criteria.status.indexOf(state);
    if ((<HTMLInputElement>event?.target).checked) {
      criteria.status.push(state);
    } else {
      criteria.status.splice(index, 1);
    }
  }

  Search(criteria: SearchFlightRequest) {
    const searchTerm = criteria.searchTerm;
    const date=criteria.date
    let filteredFlightData = this.flghtData;
    if (criteria) {

      if (date) {

        filteredFlightData = filteredFlightData.filter(x => x.date.toLocaleString().indexOf(date.toLocaleString()) !== -1)
      }
      
      if (searchTerm) {
        filteredFlightData = filteredFlightData.filter(x => x.id.toString().toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1)
      }
      if (criteria?.status?.length) {
        filteredFlightData = filteredFlightData.filter(x => {
          if (x.status) {
            const bool = criteria.status.indexOf(x?.status) !== -1;
            console.log(bool);
            return bool;
          }
          else return false
        });
      }
    }
    return of(filteredFlightData)
  }

}
