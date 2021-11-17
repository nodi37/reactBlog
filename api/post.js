const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    image: String,
    title: String,
    content: String,
    description: String,
    author: String,
    date: Date,
    published: Boolean
});

const Post = mongoose.model('post', postSchema);

async function save(image, title, content, description, author, published) {
    const tosave = new Post({
        image: image,
        title: title,
        content: content,
        description: description.slice(0,401),
        author: author,
        published: published
    })
    return await tosave.save();
}

async function update(id, toUpdate) {
    return await Post.findOneAndUpdate({_id: id}, toUpdate);
}

async function find(filter,skip,limit) {
    const posts = await Post.find(filter, null, {sort: {'_id': -1}}).skip(skip).limit(limit);
    const length = await Post.count(filter);
    return {length, posts}
}

async function findOne(filter) {
    return await Post.findOne(filter);
}

async function deleteOne(id){
    return await Post.deleteOne({_id: id})
}


exports.save = save;
exports.update = update;
exports.find = find;
exports.findOne = findOne;
exports.deleteOne = deleteOne;