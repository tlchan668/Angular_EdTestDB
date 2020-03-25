import { HttpClient } from '@angular/common/http'
import { Major } from '../major/major.class';

//build model in vs
export class Student {
    id: number = 0;
    name: string;
    sat: number;
    gpa: number;
    majorId?: number=null;
    major: Major = null;

    constructor  () {}
}