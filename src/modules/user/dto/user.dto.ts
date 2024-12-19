
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { RolesTypes } from "src/auth/guards/roles.interface";

export class userDTO {

    @IsOptional()
    @IsString()
    role: RolesTypes;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    phoneNumber: string;

}