import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DeptDataService } from '../../../services/services-webapi/GetDepartments/dept-data.service'
import { TellerDataService } from '../../../services/services-webapi/GetTellers/teller-data.service';
import { Users } from '../../../models/queueing_models';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-m-tellers',
  templateUrl: './m-tellers.component.html',
  styleUrls: ['./m-tellers.component.css']
})

export class MTellersComponent implements OnInit {

  public anyTeller: any = [];
  public passTeller = new Users;

  public depts: any = [];

  public tableid: number;

  constructor(private _DeptService: DeptDataService, private _TellerService: TellerDataService) { }

  ngOnInit() {
    this._DeptService.getDeptData()
      .subscribe(data => this.depts = data);

    this._TellerService.getTeller()
      .subscribe(data => {
        this.anyTeller = data.filter(anyTeller => anyTeller.IsAdmin !== true)
      })
  }

  throwId(id: number) {
    this.tableid = id;
  }


  onSubmit(tellerform: NgForm) {
    var index = tellerform.value.DepartmentId.indexOf(' ');
    var sliceDept = tellerform.value.DepartmentId.slice(0, index)
    tellerform.value.DepartmentId = sliceDept;
    this._TellerService.addTeller(tellerform.value)
      .subscribe(
        data => this._TellerService.getTeller()
          .subscribe(data => this.anyTeller = data.filter(anyTeller => anyTeller.IsAdmin !== true)
          ),
        error => console.error('Error!', error)
      )
    tellerform.resetForm();
  }

  edit(form: NgForm) {
    var index = form.value.DepartmentId.indexOf(' ');
    var sliceDept = form.value.DepartmentId.slice(0, index)
    form.value.DepartmentId = sliceDept;
    this._TellerService.editTeller(this.tableid, form.value)
      .subscribe(
        data => this._TellerService.getTeller()
          .subscribe(data => this.anyTeller = data.filter(anyTeller => anyTeller.IsAdmin !== true)
          ),
        error => console.error('Error!', error)
      )
    form.resetForm();
  }

  delete(id: number): void {
    this._TellerService.delTeller(id)
      .subscribe(
        _ => this.anyTeller = this.anyTeller.filter(anyTeller => anyTeller.UserId !== id)
      ),
      error => console.error('Error!', error)
  }
}

