import bcrypt from 'bcryptjs'

const users = [
    {
        name : 'Admin user',
        email : 'admin@example.com',
        password : bcrypt.hashSync('tegar123',10),
        isAdmin: true
    },
    {
        name : 'Tegar Akmal',
        email : 'tegar@example.com',
        password : bcrypt.hashSync('tegar123',10),
    },
    {
        name : 'Jane Doe',
        email : 'Jane@example.com',
        password : bcrypt.hashSync('tegar123',10),
    },
]

export default users 