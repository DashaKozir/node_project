const express = require('express')

const app = express();

const port = 3000;

app.use(express.json()); // вызывает обработчик и зовет дальше
app.get('/home', (request, response) => {
    console.log(request)
    response.send('Hello world!')
}) // конечная точка. заходит запрос в get - обрабатываем - через объект response взвращаем ответ

// команда запускает сервер
app.listen(port, ()=>{
    console.log(`App starts listen ${port}`)
})