import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import User from '../../models/User';

class UserController {
    public static index = async (req: Request, res: Response, next: NextFunction) => {
        return User.find()
            .then((users) => res.status(200).json({ users }))
            .catch((err) => res.status(500).json({ err }));
    };

    public static create = (req: Request, res: Response, next: NextFunction) => {
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name
        });

        return user
            .save()
            .then((newUser) => res.status(201).json({ newUser }))
            .catch((err) => res.status(500).json({ err }));
    };

    public static show = (req: Request, res: Response, next: NextFunction) => {
        const userId = req.params.id;
        return User.findById(userId)
            .then((user) => (user ? res.status(200).json({ user }) : res.status(404).json({ message: 'User not found' })))
            .catch((err) => res.status(500).json({ err }));
    };

    public static update = (req: Request, res: Response, next: NextFunction) => {
        const userId = req.params.id;
        return User.findById(userId)
            .then((updatedUser) => {
                if (updatedUser) {
                    updatedUser.set(req.body);
                    return updatedUser
                        .save()
                        .then((newUser) => res.status(201).json({ newUser }))
                        .catch((err) => res.status(500).json({ err }));
                } else {
                    return res.status(404).json({ message: 'User not found' });
                }
            })
            .catch((err) => res.status(500).json({ err }));
    };

    public static delete = (req: Request, res: Response, next: NextFunction) => {
        const userId = req.params.id;
        return User.findByIdAndDelete(userId)
            .then((user) => (user ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'User not found' })))
            .catch((err) => res.status(500).json({ err }));
    };
}

export default UserController;