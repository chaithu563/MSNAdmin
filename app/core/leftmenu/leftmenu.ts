import { Component } from '@angular/core';
import {AccordionPanelComponent, AccordionComponent} from 'ng2-bootstrap';
@Component({
	selector: 'leftmenu',
	templateUrl: 'app/core/leftmenu/leftmenu.html',
		styleUrls: ['app/core/leftmenu/leftmenu.css'],
		providers: [AccordionComponent, AccordionPanelComponent]
	//	directives: [Accordion, AccordionPanel]
})
export class LeftMenuComponent {

	constructor() {



	}

}
