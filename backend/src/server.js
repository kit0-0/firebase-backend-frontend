import express from 'express';

const users ={
    'LzbFytMdMkUexgCC7Oa5BXRjjy42':{
        name: 'rahul',
        bio : 'I am a web developer',
    },
    'HgmKMxRT7jaH5QspcbdM6yHQZwA2':{
        name: 'sachin',
        bio : 'I am evil genius',
    }
}

const app = express();
app.use(express.json());

app.get('/users/:userId', (req, res) => {
    const { userId } = req.params;
    const user = users[userId];
    if(user){
        res.json(user);
    }else{
        res.status(404).json({error: 'User not found'});
    }
})

app.post('/users', (req, res) => {
    const {id , userInfo} = req.body;
    users[id] = userInfo;
    res.sendStatus(200);
})

app.put('/users/:userId', (req, res) => {
    const { userId } = req.params;
const {updates}= req.body;
const user = users[userId];
if(user){
    const updatedUser = {
        ...user,
        ...updates,
    }
    users[userId] = updatedUser;
    res.json(updatedUser);
} else {
    res.status(404).json({error: 'User not found'});
}
})

app.delete('/users/:userId', (req, res) => {
    const { userId } = req.params;
    const user = users[userId];
    if(user){
        delete users[userId];
        res.sendStatus(200);
    }else{
        res.status(404).json({error: 'User not found'});
    }
})

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
})