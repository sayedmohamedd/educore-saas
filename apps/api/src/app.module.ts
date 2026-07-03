import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';

// import configs from './config';
// import { envValidationSchema } from './config/env.validation';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   cache: true,
    //   expandVariables: true,
    //   envFilePath: '.env',
    //   load: configs,
    //   validationSchema: envValidationSchema,
    // }),
  ],
})
export class AppModule {}
