import * as express from "express"
import {Request, Response} from "express"
import dataSource from './datasource'
import {Tipos} from './entity/Tipos'
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


router.get('/', async (req: Request,  res: Response)=>{
    const users = await dataSource.getRepository(Tipos).find()
    res.json(users)
})

router.post('/', async (req: Request,  res: Response)=>{
    const user = await dataSource.getRepository(Tipos).create(req.body)
    const results = await dataSource.getRepository(Tipos).save(user)
    return res.send({
        mensagem:"produto inserido com sucesso!"
    })
    
})

router.put('/:id', async (req: Request, res: Response)=>{
    const user = await dataSource.getRepository(Tipos).findOneBy({id: req.params.id})
    dataSource.getRepository(Tipos).merge(user, req.body)
    const results = await dataSource.getRepository(Tipos).save(user)
    return res.send (results)
})

router.delete('/:id', async (req: Request, res: Response)=>{
    const results = await dataSource.getRepository(Tipos).delete(req.params.id)
    return res.send({
        mensagem: "produto deletado com sucesso!"
    })

})

export default router