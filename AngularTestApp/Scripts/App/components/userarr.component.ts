import { Component } from '@angular/core';
import { UserarrService } from '../services/userarr.service'

@Component({
    selector: 'user-arr',
    templateUrl: '/Scripts/App/templates/userarr.template.html',
    providers: [UserarrService]
})
export class UserarrComponent {
    constructor(private userarrService: UserarrService) { }
    userdata: Array<Object>;
    valarr = [1, 2, 3];
    ngOnInit() {
        this.userarrService.getUserarrs().subscribe(data => {
            this.userdata = data;
        });;
    }
    
}