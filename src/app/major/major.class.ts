import { HttpClient } from '@angular/common/http'

//build model in vs
export class Major {
    id: number = 0;
    code: string = '';
    name: string = 'New Major';
    minSat: number = 400;

    constructor  () {}
}