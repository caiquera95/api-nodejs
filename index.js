const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json(
        {id : '1',
        urlGithub: 'https://github.com/caiquera95',
    }
        
    );
})

app.get('/atualizou', (request, response) => {
    return response.json({message: 'Atualzou mesmo'});
})

app.post('/teste', (request, response) => {
    const [name, date] = request.body;

    return response.json({name, date});
})

app.listen(3333)