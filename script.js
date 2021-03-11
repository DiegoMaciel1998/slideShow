const images = [
   {'id': '1' , 'url':'./img/image1.jpg'},
    { 'id': '2', 'url': './img/image2.jpg' },
    { 'id': '3', 'url': './img/image3.jpg' },
    { 'id': '4', 'url': './img/image4.jpg' },
    { 'id': '5', 'url': './img/image5.jpg' },
    { 'id': '6', 'url': './img/image6.jpg' },
    { 'id': '7', 'url': './img/image7.jpg' },

]

const containerItems = document.getElementById('container-items')

const laodImages = (images,containerItems) => {
    images.forEach((image) => {
        
        containerItems.innerHTML += `
        <div class="item">
            <img src="${image.url}"
        </div>
            `
    });
}

laodImages(images,containerItems)

let items = document.querySelectorAll('.item')

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');

}

const next = () => {
    const lastItem = items[items.length - 1]
    containerItems.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item');

}



document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
