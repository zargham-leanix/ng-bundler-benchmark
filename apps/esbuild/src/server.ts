import {createServer} from '@ng-rsbuild/plugin-angular/ssr';
import bootstrap from './main.server';

const server =  createServer(bootstrap);

server.listen();
