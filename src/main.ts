import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  const adminConfig: ServiceAccount = {
    projectId: configService.get<string>('pwa-songplaylist'),
    privateKey: configService.get<string>(
      'nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC4v71bMGE9vzbk/XTkMAj6rZqbaZXGIal4t7F4bjEcfpufc5c5eCE3Ce3G87O2kNXykKYE1bhWj2SGeKt20kTChp4Yr+FdB11RPyTL/F5Kfxc5WTrCWLdDuCWytZb2bSYDX3uBIGXwm7/z7ZkCkqN8is4HsopvxY/+iYDzhHPo/2h4qDN/VjWuWys7ca6w29aLg8JigM7S0GXYQ6VJzGn8+bcSbkvwjaFCiiuCHPFmgzZecpTmq4ttwn9XWR65gvETMsgEMZT8Bcko4hMq9tMPQovc26RSqT2+XuJlpuNKrFI+9GOIupSelQdnb+YS4BMyxKJHFmx49BXjQdpxa3nzAgMBAAECggEAAaS7A3+nrcvwqhLTImCHA+vdbzp+OZf9EPTZYE/iofVCXyXBF6LI8NtmwRlT5PDe5lyBDZP1Itf9tfCG3fS65dwate+CmrhBDUL5idMB57m/tCPmEOqHHtQZicBxylloOCl2SMzH+173Uy0u6kXxrF7zvD/LWXkxcbs5aXEpMs5m9NAkcnoajEYLn7/axRXc4W9l34B0Av0aShI0+e/o9s+f+HSBN065ak7PdmzNMOZzwTOKCQz6zJMTnDvYHBxEZBEUSk+o73FeDx/2wJ318uCigIUWyEq3Oy0BUQAVK4NYRlRTyoii7jedVIvUrwglrsG4qDLoV4aPmVhnL9A20QKBgQDw2nN18ULwaBxOIb+00HGiF8T27XmxxJwCVF31Nhii0INH2WT4LwKi4kFEXGh4AZTf1/MvYuXPLx+nQaEazN0OQzU+YxEMbDy/ybaYCz7UjbmGQqF7RN1+7PaBhxYCy4OoEaCcbAhvxFccWCkn8O96kTEtvWjvjOJPfAb4pkhueQKBgQDEXg2Lqe+xIRmVnagWcevBts53oaxuiRrMYr8GhJpaZbonLIhfscLh0eooCCsztQFfBUVUkdE31G0xFmXAUlsEeihp15kuD27MjwXFhGaCv6HiZ+jK6uM6QUbKQMA50Cr0FxuE3iee/SGTKt6SuKDNzjAI/cscIM4Y/ykVg2LgywKBgBfCZPtwhlry2j/24lNy8JK954c4W/XmYEF2kyI6aOm+ygSPdH9rG8Z3rVqSBxg3h7khM3MsPWFX07aLKdpb9T6P8LOr0CW6k6+TtXiAO316UZ/l+MoRPAxmUdbrPYefDejJfF+R5K8p3jIEnGK9SNJ9ei157t0at8SBhqqGtMR5AoGBAIdJAO4Kus7+reCtCGPGQpVn+2DiKqjQnnzXPyIfczP6R8C7Zoz/K/NmKns//XuXJYWwXO6Bs3FSUZPzCVDxrDEuc+9PkQHxsfUOR/ynVfSYT9BqpDBAmSHGXR30dDqgVydpUBU+9G8Nl/cLHuJYfrirZ96Z8zfCxhrkmApxRUr3AoGBAMGDr0d1q9qlvftMnBNiUAm3lgTRt/khj+KOW+HlM0pdRfEQShVZmYQoO6CwkCM9nsg6KTM2DhXiZu1hpkdg707ZZJbxsUiZlp4ExluXMuD0O1O+ixkZMtsFoKN/VHnNG2VUXdJdEVCQ3L8Vm1neE7ms+8tLDHjeCQrz7teslMH+',
    ),
    clientEmail: configService.get<string>(
      'firebase-adminsdk-qzfup@pwa-songplaylist.iam.gserviceaccount.com',
    ),
  };
  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
    databaseURL: 'https://pwa-songplaylist.firebaseio.com/',
  });
  await app.listen(3000);
}
bootstrap();
