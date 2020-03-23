import { HttpClient } from '@angular/common/http'

//build model in vs
export class Student {
    id: number = 0;
    name: string;
    sat: number;
    gpa: number;
    majorId?: number;

    constructor  () {}
}