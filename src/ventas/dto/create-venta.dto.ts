import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateVentaDto {
  

  @ApiProperty()
    @IsNotEmpty({ message: 'El campo total de venta no debe ser vacío' })
    @IsString({ message: 'El campo total de venta debe ser de tipo cadena' })
    @MaxLength(50, { message: 'El campo total de venta no debe ser nemor a 50 caracteres' })
    @MinLength(1, { message: 'El campo total de venta no debe ser mayor a 4 caracteres' })
  readonly totalVenta: string;


  @ApiProperty()
  @IsDefined({ message: 'El campo idCategoria debe estar definido' })
  @IsNumber({}, { message: 'El campo idCategoria debe ser de tipo numérico' })
  readonly idCliente: number;
}
