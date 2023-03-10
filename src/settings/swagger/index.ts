import { INestApplication } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { readFileSync } from 'fs';
import path from 'path';

export const SwaggerSetting = (app: INestApplication) => {
  const swaagerConfig = readFileSync(
    path.join(__dirname, '../../swagger.json'),
    'utf8',
  );
  const swaggerDocument = JSON.parse(swaagerConfig);

  SwaggerModule.setup('api', app, swaggerDocument);
};
