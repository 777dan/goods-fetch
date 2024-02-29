window.onload = () => {
    fetch('goods.json')
        .then((response) => { return response.json(); })
        .then((goods) => { insertBooks(goods); });
}

function insertBooks(books) {
    var str = `<div class="row">`;
    for (var i = 0; i < books.length; i++) {
        str += `<div class="bookWrap col-3">`;
        str += `<div class="mb-3"><img src="${books[i].imageCover}" /></div>`;
        str += `<h4>${books[i].name}</h4>`;
        str += `<p>${books[i].description}</p>`;
        str += `<p>${books[i].price}</p>`;
        str += `<p>${books[i].stocked}</p>`;
        str += `</div>`;
    }
    str += `</div>`;
    document.getElementById("books").innerHTML = str;
}
