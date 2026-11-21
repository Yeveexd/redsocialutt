import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from "@nestjs/common";

import { JwtService } from "@nestjs/jwt";

import { RegisterDto } from "./dto/register.dto.js";
import { LoginDto } from "./dto/login.dto.js";

import * as bcrypt from "bcrypt";
import { PrismaService } from "../prisma/prisma.service.js";

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  // REGISTER
  async register(dto: RegisterDto) {
    const existingUser = await this.prisma.pERFILES.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (existingUser) {
      throw new ConflictException("El correo ya está registrado");
    }

    const hashedPassword = await bcrypt.hash(dto.password, 12);

    const user = await this.prisma.pERFILES.create({
      data: {
        nombre: dto.name,
        email: dto.email,
        password: hashedPassword,
      },
      select: {
        id: true,
        nombre: true,
        : true,
        role: true,
        createdAt: true,
      },
    });

    return {
      message: "Usuario registrado correctamente",
      user,
    };
  }

  // LOGIN
  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) {
      throw new UnauthorizedException("Credenciales incorrectas");
    }

    const passwordValid = await bcrypt.compare(dto.password, user.password);

    if (!passwordValid) {
      throw new UnauthorizedException("Credenciales incorrectas");
    }

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const accessToken = await this.jwtService.signAsync(payload);

    return {
      access_token: accessToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }
}
