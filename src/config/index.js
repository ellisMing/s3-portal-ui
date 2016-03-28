import { module } from 'angular';
import router from './router.config';
import translate from './translate.config';
import satellizer from './satellizer.config';
import material from './material.config';
import authenticateGuard from './AuthenticateGuard';

const Config = module('app.config', [])
  .config(router)
  .config(translate)
  .config(satellizer)
  .config(material)
  .constant('Config', {
    API_URL: 'http://163.17.136.83:8080/api',
  })
  .run(authenticateGuard);

export default Config.name;
