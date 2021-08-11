import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private storage:LocalStorageService) { }
  userName: string | null = ''

  ngOnInit(): void {    
    this.userName = this.storage.get('userName');
    
  }
  signOut(){
     this.storage.set('loggedInUser', JSON.stringify(undefined));
     this.storage.set('userName', JSON.stringify(undefined));

    
  }
}
