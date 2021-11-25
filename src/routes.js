import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => {
    res.send('teste')
    // res.sendFile(path.join(__dirname, '/public/index.html'));
})

export { routes }