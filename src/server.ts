import 'dotenv/config';
import express from 'express';

const app = express();
const SERVER_PORT = process.env.SERVER_PORT;

const users = [
	{ id: 1, name: 'Keira Holman', email: 'keira.holman@email.com' },
	{ id: 2, name: 'Tiffany Harding', email: 'tiffany.harding@email.com' },
	{ id: 3, name: 'Riya Pittman', email: 'riya.pittman@email.com' },
	{ id: 4, name: 'Liberty Kent', email: 'liberty.kent@email.com' }
];

app.use(express.json());

app.get('/users', (request, response) => {
	return response.json(users);
});
app.post('/users', (request, response) => {
	const { name, email } = request.body;
	const userWithTheSameEmail = users.find(user => user.email === email);

	if (userWithTheSameEmail) {
		return response.status(400).json({ error: 'Email is already in use!' });
	}

	const newUser = {
		id: users.length + 1,
		name,
		email
	};

	users.push(newUser);
	return response.status(201).json(newUser);
});

app.listen(SERVER_PORT, () => console.log(`Server port is now running at :${SERVER_PORT}...`));
