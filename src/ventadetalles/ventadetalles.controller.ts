import { Controller, Get, Post, Body, Patch, Param, Delete, ConflictException, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { VentadetallesService } from './ventadetalles.service';
import { CreateVentadetalleDto } from './dto/create-ventadetalle.dto';
import { UpdateVentadetalleDto } from './dto/update-ventadetalle.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags(' detalles de venta')
@Controller('ventadetalles')
export class VentadetallesController {
  constructor(private readonly ventadetallesService: VentadetallesService) { }

  @Post()
  async create(@Body() createVentadetalleDto: CreateVentadetalleDto) {
    try {
      return await this.ventadetallesService.create(createVentadetalleDto);
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new HttpException({
          status: HttpStatus.CONFLICT,
          error: 'La venta de detalle ya existe',
        }, HttpStatus.CONFLICT);
      }
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Error al crear venta de detalle',
      }, HttpStatus.BAD_REQUEST);
    }


  }

  @Get()
  findAll() {
    return this.ventadetallesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ventadetallesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVentadetalleDto: UpdateVentadetalleDto) {
    return this.ventadetallesService.update(+id, updateVentadetalleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ventadetallesService.remove(+id);
  }
}
