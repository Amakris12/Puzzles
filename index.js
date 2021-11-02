const express = require('express')
const app = express()
const path = require('path')

app.get('/',(req,res)=>{
    console.log('user hit the resourse')
    res.status(200).sendFile(path.join(__dirname+'/Home.html'))
})
app.get('/index.css', (req, res) => {
    console.log('user hit the resource')
    res.status(200).sendFile(path.join(__dirname, '../Puzzles', '/styles', '/index.css'))
})
app.get('/first',(req,res)=>{
    console.log('user hit the resourse')
    res.status(200).sendFile(path.join(__dirname+'/pages','puzzleOneQuiz.html'))
})
app.get('/quiz.css', (req, res) => {
    console.log('user hit the resource')
    res.status(200).sendFile(path.join(__dirname, '../Puzzles', '/styles','/pages','/quiz.css'))
})
app.get('/ssss',(req,res)=>{
    console.log('user hit the resourse')
    res.status(200).sendFile(path.join(__dirname+'/pages','puzzleTwoTrivia.html'))
})
app.get('/trivia.css', (req, res) => {
    console.log('user hit the resource')
    res.status(200).sendFile(path.join(__dirname, '../Puzzles', '/styles','/pages','/trivia.css'))
})
app.get('/nextOne',(req,res)=>{
    console.log('user hit the resourse')
    res.status(200).sendFile(path.join(__dirname+'/Pages','puzzleThreeRiddle.html'))
})
app.get('/riddle.css', (req, res) => {
    console.log('user hit the resource')
    res.status(200).sendFile(path.join(__dirname, '../Puzzles', '/styles','/pages','/riddle.css'))
})
app.get('/moveAlongPeople',(req,res)=>{
    console.log('user hit the resourse')
    res.status(200).sendFile(path.join(__dirname+'/Pages','puzzleFourFillin.html'))
})
app.get('/fillin.css', (req, res) => {
    console.log('user hit the resource')
    res.status(200).sendFile(path.join(__dirname, '../Puzzles', '/styles','/pages','/fillin.css'))
})
app.get('/southPark',(req,res)=>{
    console.log('user hit the resourse')
    res.status(200).sendFile(path.join(__dirname+'/Pages','puzzleFiveMath.html'))
})
app.get('/math.css', (req, res) => {
    console.log('user hit the resource')
    res.status(200).sendFile(path.join(__dirname, '../Puzzles', '/styles','/pages','/math.css'))
})
app.get('/moveOn',(req,res)=>{
    console.log('user hit the resourse')
    res.status(200).sendFile(path.join(__dirname+'/Pages','puzzleSixHunt.html'))
})
app.get('/hunt.css', (req, res) => {
    console.log('user hit the resource')
    res.status(200).sendFile(path.join(__dirname, '../Puzzles', '/styles','/pages','/hunt.css'))
})
app.listen(5000,()=>{
    console.log('server is listening on port 5000....')
})
