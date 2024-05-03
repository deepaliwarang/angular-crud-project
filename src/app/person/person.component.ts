import { Component } from '@angular/core';
import { PersonService } from '../services/person.service';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  employeeData: any;
  serachTexts: string = '';

  constructor(private personsrc: PersonService) {
    this.getData();
  }

  
  getData() {
    debugger
    this.personsrc.getData().subscribe(data => {
      debugger
      console.log(data);
      this.employeeData = data;
    })
  }

  deleteemployee(items: any) {

    if (!confirm("Are you sure want to delete ?")) {
      return;
    }
    console.warn('Data Submitted successfully', this.deleteemployee)
    this.employeeData.splice(items - 1, 1)

    this.personsrc.Delete(items).subscribe(result => {
      this.getData();
    })


  }
}
