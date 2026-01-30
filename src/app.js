const express = require("express");

const app = express();
app.use(express.json());

// Rota raiz (health check)
app.get("/", (req, res) => {
    res.status(200).json({ message: "API em execução" });
});

let users = [
    { id: 1, name: "João", email: "joao@email.com" },
    { id: 2, name: "Maria", email: "maria@email.com" }
];

// READ - listar todos
app.get("/users", (req, res) => {
    res.status(200).json(users);
});

// READ - buscar por id
app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.status(200).json(user);
});

// CREATE
app.post("/users", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "Nome e email são obrigatórios" });
    }

    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name,
        email
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

// UPDATE / UPSERT
app.put("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const { name, email } = req.body;

    let user = users.find(u => u.id === id);

    if (!user) {
        const newUser = { id, name, email };
        users.push(newUser);
        return res.status(201).json({
            message: "Usuário criado (upsert)",
            user: newUser
        });
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    res.status(200).json(user);
});

// DELETE
app.delete("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Usuário não encontrado" });
    }

    users.splice(index, 1);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
