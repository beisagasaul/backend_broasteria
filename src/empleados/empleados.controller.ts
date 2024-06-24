import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, ConflictException, UseGuards } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('empleados')
@Controller('empleados')
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadosService) {}

  @Post()
  async create(@Body() createEmpleadoDto: CreateEmpleadoDto) {
    try {
      return await this.empleadosService.create(createEmpleadoDto);
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new HttpException({
          status: HttpStatus.CONFLICT,
          error: 'La empleado ya existe',
        }, HttpStatus.CONFLICT);
      }
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Error al crear la empleado',
      }, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  findAll() {
    return this.empleadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empleadosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpleadoDto: UpdateEmpleadoDto) {
    return this.empleadosService.update(+id, updateEmpleadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empleadosService.remove(+id);
  }
}

