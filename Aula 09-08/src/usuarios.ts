import * as express from "express"
import {Request, Response} from "express"
import { convertTypeAcquisitionFromJson } from "typescript"
import dataSource from './datasource'
import { User } from "./entity/User"
const router = express.Router()


dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

const app = express()
app.use(express.json())

/*router.get("/", (req: Request, res: Response)=>{
    res.send({message: 'Olá'})
})*/

router.get('/', async (req: Request,  res: Response)=>{
    const users = await dataSource.getRepository(User).find()
    res.json(users)
})

router.post('/', async (req: Request,  res: Response)=>{
    const user = await dataSource.getRepository(User).create(req.body)
    const results = await dataSource.getRepository(User).save(user)
    return res.send({
        mensagem:"usuario inserido com sucesso!"
    })
    
})

router.put('/:id', async (req: Request, res: Response)=>{
    const user = await dataSource.getRepository(User).findOneBy({id: req.params.id})
    dataSource.getRepository(User).merge(user, req.body)
    const results = await dataSource.getRepository(User).save(user)
    return res.send (results)
})

router.delete('/:id', async (req: Request, res: Response)=>{
    const results = await dataSource.getRepository(User).delete(req.params.id)
    return res.send(results)

})

export default router