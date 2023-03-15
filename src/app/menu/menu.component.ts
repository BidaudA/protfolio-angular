import { Component } from '@angular/core';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  faLinkedIn = faLinkedin;
  faGitHub = faGithub;
  

  ngOnInit() :void {

  }
}
