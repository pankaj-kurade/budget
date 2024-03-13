import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
logout() {
throw new Error('Method not implemented.');
}
onprev() {
throw new Error('Method not implemented.');
}
onProfile() {
throw new Error('Method not implemented.');
}
ondashboard() {
throw new Error('Method not implemented.');
}
  isSlideOut=false
toggleslide():void {
  this.isSlideOut = !this.isSlideOut;
  console.log(this.isSlideOut)


}

}
