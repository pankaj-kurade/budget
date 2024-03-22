import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  arrtran=[1,2,3,4]
  constructor(private router:Router){}
logout() {
this.router.navigate(['./budget-planner/login']);


var cookies = document.cookie.split("; ");
console.log(cookies,"coockies")

  
  for (var c = 0; c < cookies.length; c++) {
    var d = window.location.hostname.split(".");
    console.log(d,"d")

    while (d.length > 0) {
      var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) +
        "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=" + d.join(".") + " ;path=";
      var p = location.pathname.split('/');
      document.cookie = cookieBase + '/';
      while (p.length > 0) {
        document.cookie = cookieBase + p.join('/');
        p.pop();
      };
      d.shift();
    }
  }
  localStorage.clear();
  sessionStorage.clear();

  history.pushState(null, location.href);
window.onpopstate = function () {
    history.go(1);
};

  
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
