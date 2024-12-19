import { BadRequestException, Body, Controller, Post, Req, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { AuthService } from './auth.service';
import { userDTO } from 'src/modules/user/dto/user.dto';
import { LoginDTO } from './dto/auth.dto';
import { Payload } from './types/payload.interfaces';

@Controller('auth')
export class AuthController {

    constructor(
      private readonly userService: UserService,
      private readonly authService: AuthService,
    ){}

    
    @Post('login')
    async login(@Body() loginDTO: LoginDTO){
      const user = await this.userService.findByLogin(loginDTO);
    
      if (user instanceof BadRequestException) {
        // Si el resultado es una BadRequestException, lanzarla nuevamente
        throw user;
      }
      const payload: Payload = {
        id: user.id,
        name: user.name,
        phoneNumber: user.phoneNumber,
        role: user.role
      }
      const token = await this.authService.signPayload(payload);
      return { user: { ...user, id: user.id }, token};
    }
  

    @Post('verify-token')
    async verifyToken(@Req() req) {
      const token = req.headers.authorization;
  
      if (!token) {
        throw new UnauthorizedException('Token not provided');
      }
      try {
        const decoded = await this.authService.verifyToken(token);
        return { message: 'Valid token', user: decoded };
      } catch (error) {
        throw new UnauthorizedException('Invalid token');
      }
    }
}
