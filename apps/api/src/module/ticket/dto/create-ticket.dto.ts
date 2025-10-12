export class CreateTicketDto {
  id: string;

  constructor(prefix: string) {
    this.id = CreateTicketDto.generateRandomId(prefix);
  }

  private static generateRandomId(prefix: string): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return prefix + result;
  }
}
