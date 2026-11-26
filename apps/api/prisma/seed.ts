import 'dotenv/config'
import { PrismaClient } from '../generated/prisma/client.js'
import { PrismaPg } from '@prisma/adapter-pg'
import bcrypt from 'bcrypt'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

const admins = [
  { matricula: '24170110', nombre: 'Javier', apellidos: 'Cabrales' },
  { matricula: '24330030', nombre: 'Santiago', apellidos: 'Yeverino' },
  { matricula: '24330010', nombre: 'Angel', apellidos: 'Dominguez' },
  { matricula: '24170142', nombre: 'Carlo', apellidos: 'Davila' },
]

async function main() {
  const rolAdmin = await prisma.rOLES.upsert({
    where: { nombre: 'administrador' },
    update: {},
    create: { nombre: 'administrador' },
  })

  const password_hash = await bcrypt.hash(process.env.SEED_ADMIN_PASSWORD ?? '123456', 10)

  for (const { matricula, nombre, apellidos } of admins) {
    const correo_institucional = `${matricula}@utt.edu.mx`
    await prisma.uSUARIOS.upsert({
      where: { correo_institucional },
      update: { rol_id: rolAdmin.id }, 
      create: {
        nombre,
        apellidos,
        correo_institucional,
        password_hash,
        estado: 'activo',
        rol_id: rolAdmin.id,
      },
    })
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })