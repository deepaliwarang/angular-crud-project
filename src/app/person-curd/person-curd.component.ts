import { Component } from '@angular/core';

import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PersonService } from '../services/person.service';
import { formatDate } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-person-curd',
  templateUrl: './person-curd.component.html',
  styleUrls: ['./person-curd.component.css']
})
export class PersonCurdComponent {

  personForm: any;
  Id: number = 0;
  item: any;
  blogImageSrc: string = "";
  isEdit: boolean = false;
  isCreate = false;
  submitted = false;


  constructor(private personsrc: PersonService, private active: ActivatedRoute, private router: Router,private _fb: FormBuilder) {


    this.Id = this.active.snapshot.params['id'];

    if (this.Id > 0 && this.Id != 0) {

      this.getpersonById();
      this.isCreate = false
    }
    else {
      this.personsrc.getData().subscribe((data: any) => {
        console.log(data);
        this.Id = data.length + 1;
        this.isCreate = true
      })
    }
  }
  ngOnInit(): void {
    this.personForm = this._fb.group({

      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]  ,
      doj: ['', Validators.required],
      Department:  ['', Validators.required],
      Position:  ['', Validators.required]

    })
  }

  get f() { return this.personForm.controls; }

  savePerson() {
    debugger;
    this.submitted = true;
    if (this.personForm.invalid) {
      // alert('All fields are mandatory !!');
      return;
    }

    let frm = {

      id: this.Id.toString(),
      name: this.personForm.controls['name'].value,
      email: this.personForm.controls['email'].value,
      doj: this.personForm.controls['doj'].value,
      Department: this.personForm.controls['Department'].value,
      Position: this.personForm.controls['Position'].value

    }
    this.personsrc.AddPerson(frm, this.Id, this.isCreate).subscribe(data => {
      console.log(data)
      this.router.navigate(['/Person-List'])
    })
  }
  getpersonById() {
    this.personsrc.getPersonById(this.Id.toString()).subscribe(data => {
      this.item = data;
      console.log("result", data)
      this.patchDataToctr();
    })
  }
  patchDataToctr() {
    debugger;
    this.personForm.setValue({

      name: this.item.name,
      email: this.item.email,
      doj: this.item.doj,
      Department: this.item.Department,
      Position: this.item.Position
    })
  }



  parseData(data: any[]) {
    return data.map(item => ({ ...item, id: parseInt(item.id, 10) }));
  }


  onFileChange(e: any) {

    if (e.target.files.length > 0) {
      var file;
      if (e.target.files && e.target.files[0]) {
        file = e.target.files[0]
        var reader = new FileReader();
        reader.onload = (event: any) => {
          var res = (<FileReader>event.target).result as string;
          this.blogImageSrc = (res);
        }
        reader.readAsDataURL(e.target.files[0]);
      }
    }
  }
}






