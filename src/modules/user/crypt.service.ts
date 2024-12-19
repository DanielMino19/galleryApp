import { Injectable } from "@nestjs/common";

@Injectable()
export class CryptService {
 
  encryptPhoneNumber(phoneNumber: string): string {
    const encrypted = Buffer.from(phoneNumber).toString('base64');
    return encrypted;
  }

  decryptPhoneNumber(encryptedPhoneNumber: string): string {
    const decrypted = Buffer.from(encryptedPhoneNumber, 'base64').toString('utf-8');
    return decrypted;
  }
  
}



