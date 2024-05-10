// index.js


document.addEventListener("DOMContentLoaded", function () {

 
  var nombresCategorias = [];
async function fetchData1(){
  
  const apiUrl2 = 'https://www.alfaperu.net/api/fei/CategoriasListar.php/';
  const data2 = {
    IDEmpresa:1,
    ObtenerSubCategorias:1
  }
  const miHeaders3 = {
    'Content-Type': 'application/json',
    'Key': '7c18612c-e156-11ee-9e04-4cbabe8b7fdb'
  };

await fetch(apiUrl2,{
  method:'POST',
  headers:new Headers(miHeaders3),
  body:JSON.stringify(data2)
}).then(response=>{
 if(!response.ok){
  throw new Error('La solicitud no es exitosa')
 }
 return response.json()
}).then(data => {


  

data.data.Categorias.forEach(function(categoria) { 
     if (categoria.SubCategorias !== null) {
      var nuevoElementoLi = document.createElement('li');
      const cortarsubcategoria = categoria.SubCategorias;
      nuevoElementoLi.textContent = categoria.Nombre;
      nuevoElementoLi.href = 'shop.html'; // Agregar el atributo href
      nuevoElementoLi.style.marginLeft = '15px';
      nuevoElementoLi.style.fontFamily = 'sans-serif';
      nuevoElementoLi.style.fontSize = '16px';
     // Pseudo-elemento ::after para agregar el símbolo ">"
     
    var arrowElement = document.createElement('span');
    arrowElement.classList.add('arrow');
    arrowElement.textContent = '>'; // Contenido del símbolo ">"
    arrowElement.style.marginLeft = '140px';
    nuevoElementoLi.appendChild(arrowElement); //
    var arraysubcategoria = cortarsubcategoria.split("~");
    for (var i = 0; i < arraysubcategoria.length; i++) {
      arraysubcategoria[i] = arraysubcategoria[i].split("|"); // Puedes usar el delimitador que necesites aquí
  }


    var dropMenuDiv = document.createElement('div');
    dropMenuDiv.className = 'cat-left-drop-menu'; 
    var innerDiv = document.createElement('div');
    innerDiv.className = 'cat-left-drop-menu-left';
    //Crear y agregar elementos <div> internos
    arraysubcategoria.forEach(function(elemento) {
        // Crear un nuevo elemento <div> interno
      
        // Crear un nuevo enlace <a> para este elemento
        var innerLink = document.createElement('a');
        innerLink.className = 'menu-item-heading';
        innerLink.href = '#'; // Puedes establecer el href adecuado
        innerLink.textContent = elemento[1]; // Puedes establecer el texto adecuado
        // Agregar el enlace como hijo del div interno
        innerDiv.appendChild(innerLink);
        // Agregar el div interno al menú desplegable
        dropMenuDiv.appendChild(innerDiv);
    });
      nuevoElementoLi.appendChild(dropMenuDiv); 
      var ulCategoriaPrincipal1 = document.getElementById('categoria-principal-1');
      // Verificar si se encontró el elemento ul
      if (ulCategoriaPrincipal1) {
          // Agregar el nuevo elemento li al ul encontrado
          ulCategoriaPrincipal1.appendChild(nuevoElementoLi);
      } else {
          // Si no se encontró el elemento ul, mostrar un mensaje de error
          console.error('No se encontró el elemento ul con el id "categoria-principal-1".');
      }
  }else {
    nombresCategorias.push(categoria.Nombre);
  }


 } 

)

 const imgCat = []
 data.data.Categorias.forEach(function(categoria){
   imgCat.push(categoria.Imagen)
 } )
   
 
 const categoriaoptgrop = document.querySelectorAll('.cate-item-head');
 categoriaoptgrop.forEach( function(categoriagroup,index){
  categoriagroup.label = nombresCategorias[index];
  
});


var linkElements = document.querySelectorAll('.categorias-1');
// Iteramos sobre cada elemento y cambiamos su texto
linkElements.forEach(function(linkElement, index) {
 
  if(index < 8 ){
   linkElement.textContent += nombresCategorias[index];
  }
});
 const categoriaImg = document.querySelectorAll(".img-cat")
 
 categoriaImg.forEach((element,index)=>{
  if (imgCat[index] !== null) {
    element.src = imgCat[index];
  }
  
 
}

)

}
)
}

fetchData1()



async function DataValidarUsuario(){
  const apiUrl = 'https://www.alfaperu.net/api/UsuariosValidar.php';  
  const data = {
    "IdFiscal": "20123456789",
    "Usuario": "CARLOS",
    "Clave": "123456789",
  };
  
  const miHeaders = {
    'Content-Type': 'application/json',
  };
  
  
  await fetch(apiUrl,{
    method:'POST',
    headers:new Headers(miHeaders),
    body:JSON.stringify(data)
  }).then(response=>{
   if(!response.ok){
    throw new Error('La solicitud no es exitosa')
   }
   
   return response.json()
  }).then(data => {

    const Direccion= document.getElementById("direcion-tienda")
    const Correo=document.getElementById("correo-tienda");
    const telefono=document.getElementById("telefono-tienda")
    const ArrayCorreo = []
    const arrayPhone = []
    const ArrayDirecion = []
   
    data.data.UsuarioEmpresa.forEach(function(categoria) {
      ArrayCorreo.push(categoria.CorreoTienda)
      arrayPhone.push(categoria.TelefonoTienda)
      ArrayDirecion.push(categoria.Direccion)
    } )
    
      Direccion.textContent=ArrayDirecion[0]
      Correo.textContent=ArrayCorreo[0]
      telefono.textContent=arrayPhone[0]
  }  )

}
 DataValidarUsuario()







//ITEMS LISTAR
async function fetchData2() {
const carritoAdd = document.querySelectorAll(".electronic .primary-img");




  const apiUrl2 = 'https://www.alfaperu.net/api/fei/ItemsListar.php';
  const data2 = {
    "IDEmpresa": 1,
    "MasVendidos": 0,
    "CategoriasFiltro": "1, 2, 3"
  }
  const miHeaders3 = {
    'Content-Type': 'application/json',
    'Key': '7c18612c-e156-11ee-9e04-4cbabe8b7fdb'
  };

await fetch(apiUrl2,{
  method:'POST',
  headers:new Headers(miHeaders3),
  body:JSON.stringify(data2)
}).then(response=>{
 if(!response.ok){
  throw new Error('La solicitud no es exitosa')
 }
 return response.json()
}).then(data => {
  const categoriasArrayimg = [];
  const categoriatitulo = []
  const precioarray=[]


  data.data.Items.forEach(function(categoria) {
    
    categoriasArrayimg.push(categoria.Imagen);
    categoriatitulo.push(categoria.Descripcion)
    precioarray.push(categoria.PrecioVenta)
    
  });
 const categoria_gneral=[];
  var categorias = {};
  
// Iterar sobre cada elemento del arreglo "Items"
data.data.Items.forEach(function(categoria) {
  
    // Obtener el nombre de la categoría
    var nombreCategoria = categoria.Categoria.trim(); // Eliminar espacios en blanco alrededor del nombre
   
    // Verificar si el arreglo de la categoría ya existe en el objeto "categorias"
    if (!categorias[nombreCategoria]) {
        // Si no existe, crear un nuevo arreglo para esa categoría
        categorias[nombreCategoria] = [];
    }
    categoria_gneral.push(categoria.Categoria)
    // Agregar el elemento actual al arreglo correspondiente de esa categoría
    categorias[nombreCategoria].push(categoria);
   
});  

const categoriasUnicas = [...new Set(categoria_gneral)];
 const agua_1 = categoriasUnicas[0];
 const titulo_1 = document.getElementById("primer_Titulo")
 const titulo_2 = document.getElementById("segunto_titulo")
 const titulo_3=document.getElementById("tercer_titulo")
  titulo_1.textContent=categoriasUnicas[0]
  titulo_2.textContent=categoriasUnicas[1]
  titulo_3.textContent=categoriasUnicas[2]
  
 



  const primer_list = document.getElementById("display-1-1");
  const second_list = document.getElementById("display-2-1");
  const tre_list= document.getElementById("display-3-1")

  // Crear un contenedor div para todos los productos
  const productosContainer = document.createElement("div");
  productosContainer.className = "dinamic owl-carousel";
 const productContainersecond= document.createElement("div")
 productContainersecond.className = "dinamic owl-carousel"
  const tercercontainer = document.createElement("div")
tercercontainer.className=" dinamic  owl-carousel"
  // Supongamos que categorias es un objeto con las categorías y sus productos
  for (const categoria in categorias) {
      categorias[categoria].forEach(producto => {
        
        if (producto.Categoria.trim() === categoriasUnicas[0].trim()) {
          const divCol12 = document.createElement("div");
          divCol12.className = "col-12";
          const defaultImagePath = "img/product/mediam/12bg.jpg";
          // Crear la estructura interna con los datos del producto
          divCol12.innerHTML = `
          <div class="single-product">
              <div class="label_new">
                  <span class="new">new</span>
              </div>
              <div class="sale-off">
                  <span class="sale-percent">20%</span>
              </div>
              <div class="product-img">
                  <a href="#">
                  <img class="primary-img" src="${producto.Imagen !== null && producto.Imagen !== undefined ? producto.Imagen : defaultImagePath}" alt="Product">
                      <img class="secondary-img" src="img/product/mediam/12bg.jpg" alt="Product">
                  </a>
              </div>
              <div class="product-description">
                  <h5><a href="#" class="name-list">${producto.Descripcion}</a></h5>
                  <div class="price-box">
                      <span class="price precio-1">${producto.PrecioVenta}</span>
                      <span class="old-price">1000</span>
                  </div>
                  <span class="rating">
                      ${'⭐'.repeat(producto.rating)}${'⭐'.repeat(5 - producto.rating)}
                  </span>
              </div>
              <div class="product-action">
                  <div class="button-group">
                      <div class="product-button">
                          <button><i class="fa fa-shopping-cart">Agregar a carrito</i></button>
                      </div>
                      <div class="product-button-2">
                          <a href="#" data-bs-toggle="tooltip" title="Wishlist"><i class="fa fa-heart-o"></i></a>
                          <a href="#" data-bs-toggle="tooltip" title="Compare"><i class="fa fa-signal"></i></a>
                          <a href="#" class="modal-view" data-bs-toggle="modal" data-bs-target="#productModal"><i class="fa fa-search-plus"></i></a>
                      </div>
                  </div>
              </div>
            </div>
          `;
  
          // Agregar el elemento div creado al contenedor principal
          productosContainer.appendChild(divCol12);
        
            }

           if(producto.Categoria.trim() === categoriasUnicas[1].trim()){  
            const divCol12 = document.createElement("div");
           divCol12.className = "col-12";
           const defaultImagePath = "img/product/mediam/12bg.jpg";
           // Crear la estructura interna con los datos del producto
           divCol12.innerHTML = `
           <div class="single-product">
               <div class="label_new">
                   <span class="new">new</span>
               </div>
               <div class="sale-off">
                   <span class="sale-percent">20%</span>
               </div>
               <div class="product-img">
                   <a href="#">
                   <img class="primary-img" src="${producto.Imagen !== null && producto.Imagen !== undefined ? producto.Imagen : defaultImagePath}" alt="Product">
                       <img class="secondary-img" src="img/product/mediam/12bg.jpg" alt="Product">
                   </a>
               </div>
               <div class="product-description">
                   <h5><a href="#" class="name-list">${producto.Descripcion}</a></h5>
                   <div class="price-box">
                       <span class="price precio-1">${producto.PrecioVenta}</span>
                       <span class="old-price">1000</span>
                   </div>
                   <span class="rating">
                       ${'⭐'.repeat(producto.rating)}${'⭐'.repeat(5 - producto.rating)}
                   </span>
               </div>
               <div class="product-action">
                   <div class="button-group">
                       <div class="product-button">
                           <button><i class="fa fa-shopping-cart">Agregar a carrito</i></button>
                       </div>
                       <div class="product-button-2">
                           <a href="#" data-bs-toggle="tooltip" title="Wishlist"><i class="fa fa-heart-o"></i></a>
                           <a href="#" data-bs-toggle="tooltip" title="Compare"><i class="fa fa-signal"></i></a>
                           <a href="#" class="modal-view" data-bs-toggle="modal" data-bs-target="#productModal"><i class="fa fa-search-plus"></i></a>
                       </div>
                   </div>
               </div>
             </div>
           `;
   
           // Agregar el elemento div creado al contenedor principal
           productContainersecond.appendChild(divCol12);
          

           }
          // Crear el elemento div para cada producto
          
          if (producto.Categoria.trim() === categoriasUnicas[2].trim()) {
            const divCol12 = document.createElement("div");
            divCol12.className = "col-12";
            const defaultImagePath = "img/product/mediam/12bg.jpg";
            // Crear la estructura interna con los datos del producto
            divCol12.innerHTML = `
            <div class="single-product">
                <div class="label_new">
                    <span class="new">new</span>
                </div>
                <div class="sale-off">
                    <span class="sale-percent">20%</span>
                </div>
                <div class="product-img">
                    <a href="#">
                    <img class="primary-img" src="${producto.Imagen !== null && producto.Imagen !== undefined ? producto.Imagen : defaultImagePath}" alt="Product">
                        <img class="secondary-img" src="img/product/mediam/12bg.jpg" alt="Product">
                    </a>
                </div>
                <div class="product-description">
                    <h5><a href="#" class="name-list">${producto.Descripcion}</a></h5>
                    <div class="price-box">
                        <span class="price precio-1">${producto.PrecioVenta}</span>
                        <span class="old-price">1000</span>
                    </div>
                    <span class="rating">
                        ${'⭐'.repeat(producto.rating)}${'⭐'.repeat(5 - producto.rating)}
                    </span>
                </div>
                <div class="product-action">
                    <div class="button-group">
                        <div class="product-button">
                            <button><i class="fa fa-shopping-cart">Agregar a carrito</i></button>
                        </div>
                        <div class="product-button-2">
                            <a href="#" data-bs-toggle="tooltip" title="Wishlist"><i class="fa fa-heart-o"></i></a>
                            <a href="#" data-bs-toggle="tooltip" title="Compare"><i class="fa fa-signal"></i></a>
                            <a href="#" class="modal-view" data-bs-toggle="modal" data-bs-target="#productModal"><i class="fa fa-search-plus"></i></a>
                        </div>
                    </div>
                </div>
              </div>
            `;
    
            // Agregar el elemento div creado al contenedor principal
            tercercontainer.appendChild(divCol12);
          } 
        
      });
  }
  

  primer_list.appendChild(productosContainer);
  second_list.appendChild(productContainersecond)
  tre_list.appendChild(tercercontainer)


  initCarrousel(".dinamic")
 initCarrousel(".danimic2")
  



 const Masvendido = document.querySelector(".masvendido");
 const productMasvendido = document.createElement("div");
 productMasvendido.className = "dinamic3";
 
 let row = null; // Variable para almacenar la fila actual
 let count = 0; // Contador para realizar un seguimiento de los elementos en cada fila
 
 for (const categoria in categorias) {
   categorias[categoria].forEach(producto => {
     if (count % 4 === 0) {
       // Si el contador es divisible por 4, crea una nueva fila
       row = document.createElement("div");
       row.className = "row";
       productMasvendido.appendChild(row);
     }
   const ra="img/product/small/1.jpg"
     const divCol3 = document.createElement("div");
     divCol3.className = "col-12";
    
     // Crear la estructura interna con los datos del producto
     divCol3.innerHTML = `
     <div class="single-product">
       <div class="product-img">
         <a href="#">
           <img class="primary-img" src="${producto.Imagen !== null && producto.Imagen !== undefined ? producto.Imagen :ra}" alt="Product">
         </a>
       </div>
       <div class="product-description">
         <h5><a href="#" class="titulomasvendido">${producto.Descripcion}</a></h5>
         <div class="price-box">
           <span class="price pricemasvendido">${producto.PrecioVenta}</span>
           <span class="old-price">$120.00</span>
         </div>
         <span class="rating">
           <i class="fa fa-star"></i>
           <i class="fa fa-star"></i>
           <i class="fa fa-star"></i>
           <i class="fa fa-star"></i>
           <i class="fa fa-star-o"></i>
         </span>
       </div>
     </div>
     `;
 
     // Agregar el elemento div creado a la fila actual
     row.appendChild(divCol3);
 
     count++; // Incrementar el contador
   });
 }
 
 // Agregar el contenedor principal al elemento "Masvendido"
 Masvendido.appendChild(productMasvendido);

 // Función para inicializar el carousel
 masvendido(".dinamic3");
 
 

}
)



}
fetchData2()

 

async function Marcas(){
  const apiUrl4 = 'https://www.alfaperu.net/api/fei/MarcasListar.php/';  

  const data4 = {
    "IDEmpresa": 1    
  };
  
  const miHeaders4 = {
    'Content-Type': 'application/json',
    'Key': '7c18612c-e156-11ee-9e04-4cbabe8b7fdb'
  };
  await fetch(apiUrl4,{
    method:'POST',
    headers:new Headers(miHeaders4),
    body:JSON.stringify(data4)
  }).then(response=>{
   if(!response.ok){
    throw new Error('La solicitud no es exitosa')
   }
   
   return response.json()
  }).then(data => {
    //const MarcasMostrar = document.querySelector(".")

   
    const Marcas = document.querySelector(".marcas")
 
    const MarcasProducto = document.createElement("div");
    MarcasProducto.className = "dinamic4";
    
    data.data.Marcas.forEach(function(categoria) {
       
       const divCol3 = document.createElement("div");
       divCol3.className = "col-lg-12";
      const Marcaimagendefault="img/brand/1.png"
       // Crear la estructura interna con los datos del producto
       divCol3.innerHTML = `
       <div class="single-brand-logo">
       <a href="#"><img src="${categoria.Imagen !== null && categoria.Imagen !== undefined ? categoria.Imagen :Marcaimagendefault}" alt=""></a>
   </div>
       `;
   
       // Agregar el elemento div creado a la fila actual
       MarcasProducto.appendChild(divCol3);
       
       
  }); 
  Marcas.appendChild(MarcasProducto)
 
MisMarcas(".dinamic4")

  } 
  


)

}
 Marcas();






});