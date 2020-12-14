import { Controller, Param, Post } from '@nestjs/common';

@Controller('post')
export class PostController {
  @Post('/ok')
  postOk(): string {
    return 'ok';
  }

  @Post('/hello/:prenom')
  postHello(@Param('prenom') prenom: string): string {
    return prenom;
  }
}
