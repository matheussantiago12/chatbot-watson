import express from 'express'
import { routes } from './routes.js'
import path, { dirname } from 'path'
import AssistantV2 from 'ibm-watson/assistant/v2.js'
import { IamAuthenticator } from 'ibm-watson/auth/index.js'

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(path.resolve() + '/public/index.html'))
})

app.get('/conversation', async (req, res) => {
    const assistant = new AssistantV2({
        authenticator: new IamAuthenticator({ apikey: 'VF0Ujyy0xvbgXBed5DAIoLZckShTLBXLn8szNDjBDzA5' }),
        serviceUrl: 'https://gateway.watsonplatform.net/assistant/api/',
        version: '2020-04-01'
    })

    const { result } = await assistant.message({
        assistantId: '992606b5-90b3-46b0-9c4f-17d9a70b9053',
        input: {
            message_type: 'text',
            text: 'Olá'
        },
        sessionId: '123'
    })

    return res.send(JSON.stringify(result))
})

export { app }