import {IsString} from 'class-validator';

export class CreateMovieDto{



    @IsString()
    readonly title: string;
    @IsString()
    readonly year:number;
    @IsString({each:true})
    readonly generes:string[];
}