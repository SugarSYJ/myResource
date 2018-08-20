import {Pipe, PipeTransform} from '@angular/core'

@Pipe({name: 'range'})
export class RangePipe implements PipeTransform{
    transform(val: Array<any>, range: number): Array<number>{
        for(var i = 0; i < range; i++){
            val.push(i)
        }
        return val;
    }
}