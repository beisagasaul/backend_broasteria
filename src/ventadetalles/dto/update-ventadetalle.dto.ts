import { PartialType } from '@nestjs/swagger';
import { CreateVentadetalleDto } from './create-ventadetalle.dto';

export class UpdateVentadetalleDto extends PartialType(CreateVentadetalleDto) {}
