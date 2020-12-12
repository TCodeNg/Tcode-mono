import { InjectionToken } from '@angular/core';
import { ImageServiceConfig } from './image.service.config';

export const IMAGE_CONFIG_TOKEN = new InjectionToken<ImageServiceConfig>('IMAGE_CONFIG_TOKEN');
