const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const _ = require('lodash');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/reactblog', {});

require('dotenv').config();

app.use(cors({origin: 'https://blog.nbtb.eu'}));
app.set('trust proxy', true);
app.use(bodyParser.json({
    limit: "200mb"
}));

const {
    save,
    update,
    find,
    findOne,
    deleteOne
} = require("./post");

const {
    register,
    login,
    verifyToken
} = require("./user");

app.get('/', (req, res)=>{
    res.redirect('https://blog.nbtb.eu');
})

//ROUTES:
app.post('/login', async (req, res) => {
    const {
        email,
        password
    } = req.body;
    const ip = req.ip
    login(ip, email, password).then(token=>res.json({
        token: token
    })).catch((err) => {
        res.status(401).json({error: err});
    })
})

app.post('/', verifyToken, async (req, res) => {
    const {
        image,
        title,
        content,
        description
    } = (JSON.parse(JSON.stringify(req.body)));
    const author = "Here will be author from auth";
    const published = false;
    const saved = await save(image, title, content, description, author, published);
    res.json({
        'id': saved.id
    });
})

//SENDS ALL PUBLISHED POSTS
app.post('/allposts', async (req, res) => {
    const {
        skip,
        limit
    } = req.body;

    if (isNaN(limit - skip) || (limit - skip != 5)) {
        console.log("Skip limit error => app.post(/allposts) route!");
        res.sendStatus(404)
    } else {
        const filter = {
            published: true
        }
        const toSend = await find(filter, skip, limit);
        res.json(toSend);
    }
})

//SENDS ALL POSTS
app.post('/posts', verifyToken, async (req, res) => {
    const {
        skip,
        limit
    } = req.body;
    const toSend = await find({}, skip, limit);
    res.json(toSend);
});

app.post('/search', async (req, res) => {
    const searchKw = req.body.searchKw;
    if (searchKw.length > 0) {
        const filter = {
            published: true,
            $or: [{
                    title: {
                        "$regex": searchKw,
                        "$options": "i"
                    }
                },
                {
                    content: {
                        "$regex": searchKw,
                        "$options": "i"
                    }
                },
                {
                    description: {
                        "$regex": searchKw,
                        "$options": "i"
                    }
                }
            ]
        }
        skip = 0;
        limit = 15;
        const toSend = await find(filter, 0, 10);
        res.json(toSend);
    }
});

app.post('/:postid', verifyToken, async (req, res) => {
    const id = req.params.postid;
    const {
        image,
        title,
        content,
        description
    } = (JSON.parse(JSON.stringify(req.body)));
    const toUpdate = {
        image: image,
        title: title,
        content: content,
        description: description.slice(0, 401),
        published: false
    }
    const saved = await update(id, toUpdate);
    res.json({
        'id': saved.id
    });
});

app.patch('/:postid', verifyToken, async (req, res) => {
    const date = new Date();
    const id = req.params.postid;
    const {
        publish
    } = (JSON.parse(JSON.stringify(req.body)))
    const author = "Admin"; //Author from auth.
    const toUpdate = {
        published: publish,
        date: date,
        author: author
    }
    const saved = await update(id, toUpdate);
    res.sendStatus(200); //I will change something here :D
});

app.get('/:postid', verifyToken, async (req, res) => {
    const id = req.params.postid;
    if (id.length != 24) {
        res.sendStatus(404)
    } else {
        const filter = {
            _id: id
        }
        const toSend = await findOne(filter)
        res.json(toSend)
    }
});

app.get('/:y/:m/:d/:title', async (req, res) => {
    const {
        y,
        m,
        d,
        title
    } = req.params;
    const tDate = new Date(y, m, d)
    if (isNaN(tDate.getDay()) || title.length < 1) {
        res.sendStatus(404);
    } else {
        const filter = {
            published: true,
            date: {
                $gte: new Date(y, m - 1, d, 0, 0, 0),
                $lt: new Date(y, m - 1, d, 23, 59, 59)
            },
            title: {
                "$regex": _.lowerCase(title),
                "$options": "i"
            }
        }
        const toSend = await findOne(filter);
        if (toSend && (_.lowerCase(toSend.title) === _.lowerCase(title))) {
            res.json(toSend);
        } else {
            res.sendStatus(404);
        }
    }
});

app.delete('/:postid', verifyToken, async (req, res) => {
    const id = req.params.postid;
    const toSend = await deleteOne(id);
    console.log(`User ${res.locals.username} deleted post id: ${id}`);
    res.json(toSend)
});

//END:
app.listen(process.env.PORT, () => {
    console.log("Server started");
});

app.use(function (req, res) {
    res.sendStatus(404);
});