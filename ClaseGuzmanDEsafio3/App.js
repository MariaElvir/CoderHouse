const contenedor = document.getElementById('product-contenedor');

licores.forEach(Licor => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML =`
       <div class="card-image">
        <img src="${Licor.img}">
        <span class="card-title">${Licor.nombre}</span>
        <a class="btn-floating halfway-fab wabes-effect waves-light red" id=""><i class="material-icons">add_shopping_cart</i></a>
      </div>
      <div class="card-content">
          <p>${Licor.desc}</p>
          <p>${Licor.talle}</p>
          <p>${Licor.precio}</p>
      </div>
    `;
    contenedor.appendChild(div);
})