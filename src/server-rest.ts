import { json } from 'body-parser';
import express, { Request, Response } from 'express';
import cors from 'cors';
import { config } from 'dotenv';

import {
  createHero,
  deleteHero,
  getAllHeroes,
  getHeroById,
  getRandomHero,
  updateHero,
} from './rest/controllers/Heroes';

import {
  createType,
  deleteType,
  getAllTypes,
  updateType,
} from './rest/controllers/Types';

import {
  createAvatar,
  deleteAvatar,
  getAllAvatars,
  updateAvatar,
} from './rest/controllers/Avatars';

const app = express();

app.use(cors());

config();

const { HOST, PORT } = process.env;

app.use(json());
app.use('/assets', express.static('assets'));

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Server is running',
  });
});

app.get('/heroes', getAllHeroes);
app.get('/heroes/random', getRandomHero);
app.get('/heroes/:id', getHeroById);
app.post('/heroes', createHero);
app.delete('/heroes/:id', deleteHero);
app.put('/heroes/:id', updateHero);

app.get('/types', getAllTypes);
app.post('/types', createType);
app.delete('/types/:id', deleteType);
app.put('/types/:id', updateType);

app.get('/avatars', getAllAvatars);
app.post('/avatars', createAvatar);
app.delete('/avatars/:id', deleteAvatar);
app.put('/avatars/:id', updateAvatar);

app.listen(PORT, () => console.log(`Server is listening on ${HOST}${PORT}`));
