import { Component } from '@angular/core';
import {AccordionPanelComponent, AccordionComponent} from 'ng2-bootstrap';
import {RouterLink, Router} from '@angular/router';
@Component({
	selector: 'leftmenu',
	templateUrl: 'app/core/leftmenu/leftmenu.html',
		styleUrls: ['app/core/leftmenu/leftmenu.css'],
		providers: [AccordionComponent, AccordionPanelComponent],
	//	directives: [AccordionComponent, AccordionPanelComponent, RouterLink]
		directives: [RouterLink]
})
export class LeftMenuComponent {

	constructor(private router: Router) {



	}

 //linkClicked(ob)
 //{
 //    this.router.navigate(['PublicPage']);
 //}

}
