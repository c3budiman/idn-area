import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Home')
@Controller()
export class AppController {
  @Get()
  @ApiOkResponse({
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 200 },
        message: { type: 'string' },
        version: {
          type: 'string',
          description: 'The version of this API.',
          example: '1.0.0',
        },
      },
    },
  })
  async index() {
    return {
      statusCode: HttpStatus.OK,
      message: 'Welcome to Indonesia Area API.',
      version: process.env.npm_package_version,
      docs: '/docs',
    };
  }
}
