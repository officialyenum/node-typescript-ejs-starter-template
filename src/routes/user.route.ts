import { Router } from 'express';
import { ValidateSchema, Schemas } from '../middleware/ValidateSchema';
import UserController from '../controllers/api/user.controller';

const router = Router();

/** Set up your api routes here */

// User routes
router.get('/', UserController.index);
router.post('/', ValidateSchema(Schemas.user.create),UserController.create);
router.patch('/:id', ValidateSchema(Schemas.user.update), UserController.update);
router.get('/:id', UserController.show);
router.delete('/:id', UserController.delete);

export default router;
