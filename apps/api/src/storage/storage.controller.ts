import { Controller, Post, UploadedFile, UseInterceptors, BadRequestException } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { StorageService } from './storage.services.js'

type ArchivoSubido = {
  buffer: Buffer
  mimetype: string
  originalname: string
}

@Controller('storage')
export class StorageController {
  constructor(private readonly storage: StorageService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', { limits: { fileSize: 5 * 1024 * 1024 } }))
  async upload(@UploadedFile() file: ArchivoSubido) {
    if (!file) throw new BadRequestException('Falta el archivo')
    const permitido = file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')
    if (!permitido) throw new BadRequestException('Solo imágenes o videos')

    const key = await this.storage.subir(
      `pruebas/${Date.now()}-${file.originalname}`,
      file.buffer,
      file.mimetype,
    )
    return { key, url: await this.storage.urlFirmada(key) }
  }
}