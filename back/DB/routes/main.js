import { Router } from 'express';
import User from '../models/User.js';
import Ajv from 'ajv';
const ajv = new Ajv();

const router = Router();

const Schema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 5,
            maxLength: 25,
            pattern: "^[A-Za-zА-Яа-яІіЄєЇї0-9'’]+$",
        },
        password: {
            type: 'string',
            minLength: 8,
            maxLength: 100,
            pattern: "^[A-Za-zА-Яа-яІіЄєЇї0-9!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?`~]+$",
        }
    },
    required: ['name', 'password'],
    additionalProperties: false,
};

router.post('/', async (req, res) => {
    const { name, password } = req.body;

    const valid = ajv.validate(Schema, { name, password });
    if (valid) {
        const newUser = await User.create({ name, password });
        console.log('User added:', newUser); 
        res.cookie('name', name, {
            maxAge: 99999999,
            httpOnly: true,
            sameSite: 'Strict',
            secure: false 
        });
        console.log('Cookie set for user:', name);
        
    } else {
        console.log('Validation errors:', ajv.errors);
        res.json({ errors: ajv.errors });
    }
});


router.get('/users', async (req, res) => {
    
});

export default router;
