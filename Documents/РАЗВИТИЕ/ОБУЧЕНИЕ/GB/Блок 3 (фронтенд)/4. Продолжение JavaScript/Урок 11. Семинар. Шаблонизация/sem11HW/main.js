const url = '/data.js';

async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
};

document.addEventListener('DOMContentLoaded', async (e) => {
    const data = await getData(url);
    const gridEl = document.querySelector('.featured-items-grid');
    data.forEach(element => {
        gridEl.insertAdjacentHTML('beforeend', `
             <a href="#">
                <div class="item">
                    <img class="img-grid" src="${element.img}" alt="img">
                    <div class="items-info">
                        <h3>${element.title}</h3>
                        <p class="grid-item-par">${element.info}</p>
                        <span class="grid-item-coast">$${element.price}</span>
                    </div>
                </div>
            </a>
            `)
    })
})