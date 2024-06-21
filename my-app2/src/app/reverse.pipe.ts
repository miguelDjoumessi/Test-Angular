import { Pipe, PipeTransform} from "@angular/core";

@Pipe({
    standalone: true,
    name: 'reverse'
})

export class ReversePipe implements PipeTransform{
    transform(value:string): string{
        let reverser:string = '';
        for(let i = value.length - 1; i>=0; i--){
            reverser += value[i];
        }
        return reverser;
    }
}