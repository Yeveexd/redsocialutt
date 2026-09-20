import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  ColorRandom(): { color: string } {
    const colors = [
      'Rosa',
      'Azul',
      'Morado',
      'Verde',
      'Amarillo',
      'Naranja',
      'Blanco',
      'Negro',
    ];
    const i = Math.floor(Math.random() * colors.length);

    return { color: colors[i] };
  }
}
