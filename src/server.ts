import express from 'express';
import { userRoute } from './modules/user/user.routes';
import { initDb } from './database/db';
import { authRoute } from './modules/auth/auth.routes';
const app = express();
const port = 5000;

app.use(express.json());



initDb()

app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);



// app.get('/', async (req: Request, res: Response) => {
//     res.status(200).send({
//         message: "hi mutasim i am a sever",
//         path: req.path
//     })
// });


app.listen(port, () => {
    console.log(`my server is running on port:${port}`);

})