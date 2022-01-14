const h5 = document.getElementsByTagName('h5');
console.log(h5);

for(const items of h5){
    items.style.color = 'cyan';
}
document.getElementById('bags').style.backgroundColor = 'tomato';

const cards = document.getElementsByClassName('card');
for(const item of cards){
    item.style.borderRadius = '30px';
}
const handleClick = () =>{
    console.log('button clicked');
}
const buttons = document.getElementsByClassName('panda-button');

for (const item of buttons){
    item.addEventListener('click',handleClick);
}

document.getElementById('subscription').addEventListener('dblclick',()=>{
    document.getElementById('subscription').style.backgroundColor = 'magenta';
})
const images = document.getElementsByTagName('img');
for(const image of images){
    image.addEventListener('mouseenter',()=>{
        image.setAttribute('src','images/categories/watch.png');
    })
}