function getShortMessages(messages){
    return messages.map(obj => obj.message).filter(elem => elem.length < 50);
}

let myArr = [{message: 'Tempor quis esse consequat sunt ea eiusmod.'}, 
{message: 'Id culpa ad proident ad nulla laborum incididunt.',}, 
{message: 'Ullamco in ea et ad anim anim ullamco est.'},
{message: 'Est ut irure irure nisi.'},
];

console.log(getShortMessages(myArr));

module.exports = getShortMessages;