import { Router as createRouter } from 'express';
import { UsersController } from '../controllers/users.controller.js';
import createDebug from 'debug';
import { UsersMongoRepo } from '../repos/users/users.mongo.repo.js';
import { AuthInterceptor } from '../middleware/auth.interceptor.js';

const debug = createDebug('W7E:users:router');

export const usersRouter = createRouter();
debug('Starting');

const repo = new UsersMongoRepo();
const controller = new UsersController(repo);
const interceptor = new AuthInterceptor();

usersRouter.get('/', controller.getAll.bind(controller)); // Ver todos los usuarios
usersRouter.post('/register', controller.create.bind(controller)); // Crear usuario
usersRouter.post('/login', controller.login.bind(controller)); // Hacer log in
usersRouter.patch( // Añadir usuario a amigo
  '/add-friend/:id', 
  interceptor.authorization.bind(interceptor),
  controller.update.bind(controller),
);
  
usersRouter.patch( // Token JWT
  '/login',
  interceptor.authorization.bind(interceptor),
  controller.login.bind(controller)
);
// Note progaming, post está haciendo un login, no un register, por eso no se llama register.
// const userLogin = {
//   email : form.elements.namedItem('email').value,
//   passwd : form.elements.namedItem('passwd').value,
// }

// const url = serverURL + '/users/login';
// const response = await fetch(url, options);{
//   method: 'POST',
//   body: json.stringify(userLogin),
//   headers: {
//     'Content-Type': 'application/json',
//   },
// }
// result = await response.json();
