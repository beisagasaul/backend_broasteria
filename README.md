<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description


[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License
Nest is [MIT licensed](LICENSE).








<p align="center">
  <h1 style="font-size: 4.5em;">Broasteria</h1>
</p>



![Imagen de una broasteria](https://cdn.pixabay.com/photo/2021/07/17/00/56/broaster-6472037_1280.jpg)


## Descripción
Este es un proyecto de backend para desarrollar un software de gestión de ventas para una Broastería. El software estará diseñado para ayudar en la administración de pedidos, control de inventario, gestión de clientes y generación de informes para optimizar el proceso de venta en una broastería.

## Base de datos



#### PRODUCTO
| Campo                        
|-----------------
| id                    
| nombre                
| descripción        
| precio_unitario 
| stock                    
| id_categoria             

#### CLIENTES
| Campo                  
|------------
| id               
| nombres            
| apellidos     
| dirección       
| teléfono     
| email       

#### CATEGORIAS
| Campo                
|-------------
| id                
| nombre          


#### VENTAS
| Campo                     
|--------------
| id                
| id_cliente            
| fecha             
| total_venta         
| estado       
#### DETALLE_VENTAS
| Campo                    
|-------------
| id                 
| id_venta               
| id_producto            
| cantidad            
| subtotal      

#### EMPLEADOS
| Campo                   
|------------------
| id                        
| nombres                
| apellidos             
| cargo                  
| salario                 
| fecha_contratación  
 id_usuario    

#### USUARIOS
| Campo                          
|---------------
| id                     
| nombre_usuario           
| clave                             
| rol                    

### Relaciones

- **Clientes y Ventas**:Un cliente puede realizar muchas ventas, pero cada venta es de un único cliente.  **(1 a M)**
- **Productos y DetalleVenta**:Un producto puede estar en varios detalleventa, y un detalleventa está asociado a un único producto. **(1 a M)**
- **Categorías y Productos**:Una categoría puede tener varios productos, pero cada producto pertenece a una única categoría. **(1 a M)**
- **Ventas y DetalleVenta**:Una venta puede tener varios detalles de venta, pero cada detalle de venta está asociado a una única venta. **(1 a M)**
- **Empleados y Ventas**: Un empleado puede realizar muchas ventas, pero cada venta es realizada por un único empleado **(1 a M)**
- **Usuarios y Empleados**: Un usuario está asociado a un único empleado, pero un empleado puede tener varios usuarios  **(1 a M)**

