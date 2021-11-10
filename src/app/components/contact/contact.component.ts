import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/sercices/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact:Contact = { name:'', email:'', phone:'', message:''};

  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.contactService.addContact(this.contact).subscribe(res =>{
      console.log(res);
    })
    // console.log(this.contact)
  }

}
