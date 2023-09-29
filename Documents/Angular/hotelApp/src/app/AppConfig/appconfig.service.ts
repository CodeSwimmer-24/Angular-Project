import { InjectionToken } from '@angular/core';
import { AppConfig } from './app.interface';
import { environment } from 'src/environments/environment';

export const APP_CONFIG_SERVICE = new InjectionToken<AppConfig>('app.config');

export const API_ENDPOINTS: AppConfig = {
  apiEndPoint: environment.apiEndPoints,
};
