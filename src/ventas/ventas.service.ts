import {ConflictException,Injectable,NotFoundException,} from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Venta } from './entities/venta.entity';
import { Repository } from 'typeorm';
import { Cliente } from 'src/clientes/entities/cliente.entity';

@Injectable()
export class VentasService {
  constructor(
    @InjectRepository(Venta) private ventasRepository: Repository<Venta>,
  ) {}

  async create(createVentaDto: CreateVentaDto): Promise<Venta> {
    const existe = await this.ventasRepository.findOne({
      where: {
        totalVenta: createVentaDto.totalVenta,
        cliente: { id: createVentaDto.idCliente },
      },
      relations: ['cliente'],
    });
    if (existe) {
      throw new ConflictException('La venta ya existe');
    }
    const venta = this.ventasRepository.create({
      totalVenta: createVentaDto.totalVenta.trim(),
      cliente: { id: createVentaDto.idCliente } as Cliente,
    });
    return this.ventasRepository.save(venta);
  }

  async findAll(): Promise<Venta[]> {
    return this.ventasRepository.find({ relations: ['cliente'] });
  }

  async findOne(id: number): Promise<Venta> {
    const venta = await this.ventasRepository.findOne({
      where: { id },
      relations: ['cliente'],
    });
    if (!venta) {
      throw new NotFoundException(`La venta con el id ${id} no existe`);
    }
    return venta;
  }

  async update(id: number, updateVentaDto: UpdateVentaDto): Promise<Venta> {
    const venta = await this.findOne(id);
    if (!venta) {
      throw new NotFoundException(`La venta con el id ${id} no existe`);
    }
    const actualizarVenta = Object.assign(venta, updateVentaDto);
    actualizarVenta.cliente = { id: updateVentaDto.idCliente } as Cliente;
    return this.ventasRepository.save(actualizarVenta);
  }

  async remove(id: number) {
    const venta = await this.findOne(id);
    if (!venta) {
      throw new NotFoundException(`La venta con el id ${id} no existe`);
    }
    return this.ventasRepository.delete(venta.id);
  }
}
