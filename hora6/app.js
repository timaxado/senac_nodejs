const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const posts = [
    { id: 1, title: 'Primeira Postagem', content: 'Este é o conteúdo do primeiro post. ', author: 'Tiago' },
    { id: 2, title: 'Segundo Post', content: 'Este é o conteúdo do segundo post.', author: 'Rodrigo' },
    { id: 3, title: 'Terceiro Post', content: 'Este é o conteúdo do terceiro post.', author: 'Magdalena' }
];

//rota para obter todos os posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

//rota para obter um post específico pelo ID
app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('Post não encontrado');
    }
});

//Start do servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});