import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, ConflictException, UseGuards } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('ventas')
@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

  @Post()
  async create(@Body() createVentaDto: CreateVentaDto) {
    try {
      return await this.ventasService.create(createVentaDto);
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new HttpException({
          status: HttpStatus.CONFLICT,
          error: 'La venta ya existe',
        }, HttpStatus.CONFLICT);
      }
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Error al crear la venta',
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  findAll() {
    return this.ventasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ventasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVentaDto: UpdateVentaDto) {
    return this.ventasService.update(+id, updateVentaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ventasService.remove(+id);
  }
}
