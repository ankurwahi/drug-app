import {Component, OnInit, Output, EventEmitter} from '@angular/core';


import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public myForm: FormGroup;
  public data: any;
  public searchData: any;
  public cityData: any = [];
  public submitted: boolean;
  public sortOrder: any = 0;
  public categoryData:any =[
    {id:1, name:'General'},
    {id:2, name:'Retail'},
    {id:2, name:'Wholesale'},
  ]
  public activeData:any =[
    {id:true, name:'true'},
    {id:false, name:'false'}
  ]
  public drugCodesData:any =[
    {id:1, name:'Drug 1'},
    {id:2, name:'Drug 2'},
    {id:3, name:'Drug 3'},
    {id:4, name:'Drug 4'},
    {id:5, name:'Drug 5'},
  ]
  @Output() addClick = new EventEmitter<any>();

  constructor(private _fb: FormBuilder) {
  }

  
  ngOnInit() {
    this.myForm = this._fb.group({
      name: [new FormControl(), [<any>Validators.required]],
      code: [new FormControl(), [<any>Validators.required]],
      price: [new FormControl(), [<any>Validators.required, Validators.pattern("^[0-9]*$"),]],
      quantity: [new FormControl(), [<any>Validators.required]],
      is_otc: [new FormControl(), [<any>Validators.required]],
      category: [new FormControl(), [<any>Validators.required]],
      unit: [new FormControl(), [<any>Validators.required]],
      status: [new FormControl(), [<any>Validators.required]],
      img: [new FormControl()],
    });

    const _form = {
      name: '',
      code: '',
      price: '',
      quantity: '',
      is_otc: '',
      category: '',
      unit: '',
      status: '',
      img: 'https://cdn3.vectorstock.com/i/1000x1000/12/07/medicine-icon-vector-22011207.jpg',
    };
    // initializes the form
    (<FormGroup>this.myForm).setValue(_form, {onlySelf: true});
  }


  save(e, model: any, isValid: boolean) {
    e.preventDefault();
    this.addClick.emit(model);
  }

}
