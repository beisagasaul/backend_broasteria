import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUsuarioDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo usario no debe ser vacío' })
    @IsString({ message: 'El campo usario debe ser de tipo cadena' })
    @MaxLength(50, { message: 'El campo usario no debe ser mayor a 12 caracteres' })
    @MinLength(2, { message: 'El campo usario no debe ser menor a 4 caracteres' })
    readonly nombreUsuario: string;


    @ApiProperty({ example: 'usuario@gmail.com' })
    @IsNotEmpty({ message: 'El campo email no debe ser vacío' })
    @IsEmail({}, { message: 'El campo email debe tener el formato correcto' })
    @MaxLength(50, { message: 'El campo email no debe ser mayor a 50 caracteres' })
    @MinLength(2, { message: 'El campo email no debe ser menor a 10 caracteres' })
    readonly email: string;



}
