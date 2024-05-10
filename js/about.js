document.addEventListener("DOMContentLoaded", function () {
    
    async function fetchData1(){
  
        const apiUrl2 = 'https://www.alfaperu.net/api/UsuariosValidar.php';
        const data2 = {
            "IdFiscal": "20123456789",
            "Usuario": "CARLOS",
            "Clave": "123456789",
        }
        const miHeaders3 = {
          'Content-Type': 'application/json',
    
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
        const direccion= data.data.UsuarioEmpresa[0].Direccion
        const telefono = data.data.UsuarioEmpresa[0].TelefonoTienda
        const correo_constante= data.data.UsuarioEmpresa[0].CorreoTienda
        const direcion_html= document.getElementById("dicrecion-contacto")
        const gamil_html = document.getElementById("gmail-contacto")
        const cellphone= document.getElementById("number_of_cellphone")
        direcion_html.textContent=direccion
        gamil_html.textContent=correo_constante
        cellphone.textContent=telefono

        console.log(direccion)
        const redes_social = document.querySelectorAll(".social-media .iconredes");
       
        const iconredessocial = [];
        data.data.Configuraciones.forEach(function(configuracion) {        
         iconredessocial.push(configuracion.Valor)
        
      });
     
      redes_social.forEach( function(categoria,index){
        categoria.href= iconredessocial[index];
        
      });
      
        const redes_social2 = document.querySelector(".social-media .iconredes");


        const contenido_tienda = data.data.UsuarioEmpresa[0].NosotrosTienda
        const nombre_empresa = data.data.UsuarioEmpresa[0].NombreEmpresa
        const InfoEmpresa = document.getElementById("contenido-negocio")
        const Nombre_Empresa = document.getElementById("Nombre_empresa")
        const Logo_icono=document.getElementById("img_Logo")
     
        const logo_empresa = data.data.UsuarioEmpresa[0].Logo
        if(logo_empresa!==null){
  
          Logo_icono.src=logo_empresa
        }
        InfoEmpresa.textContent= contenido_tienda
        Nombre_Empresa.textContent=nombre_empresa
  
       
     } )}

     fetchData1()
     async function MarcaData2(){
        const apiUrl3 = 'https://www.alfaperu.net/api/fei/MarcasListar.php';

      const data2 = {
          "IDEmpresa": 1    
      }
      const miHeaders3 = {
        'Content-Type': 'application/json',
        'Key': '7c18612c-e156-11ee-9e04-4cbabe8b7fdb'
      };
    
    await fetch(apiUrl3,{
      method:'POST',
      headers:new Headers(miHeaders3),
      body:JSON.stringify(data2)
    }).then(response=>{
     if(!response.ok){
      throw new Error('La solicitud no es exitosa')
     }
     return response.json()
    }).then(data => {
      
      
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
    } )}
    MarcaData2()
    

async function categoria_listar(){
  const apiUrl3 = 'https://www.alfaperu.net/api/fei/CategoriasListar.php/';

  const data2 = {
    "IDEmpresa": 1,
    "ObtenerSubCategorias": 1
}
  const miHeaders3 = {
    'Content-Type': 'application/json',
    'Key': '7c18612c-e156-11ee-9e04-4cbabe8b7fdb'
  };
  await fetch(apiUrl3,{
    method:'POST',
    headers:new Headers(miHeaders3),
    body:JSON.stringify(data2)
  }).then(response=>{
   if(!response.ok){
    throw new Error('La solicitud no es exitosa')
   }
   return response.json()
  }).then(data => {
    var nombresCategorias = [];
 console.log(data)
 let subcategoria = []
// Assuming data is defined and has a property Categorias which is an array

data.data.Categorias.forEach(function(categoria) {
 
  nombresCategorias.push(categoria.Nombre);
});
data.data.Categorias.forEach(function(categoria) {
  
  subcategoria.push(categoria.SubCategorias);
});




 const categoriaoptgrop = document.querySelectorAll('.cate-item-head');
 categoriaoptgrop.forEach( function(categoriagroup,index){
  categoriagroup.label = nombresCategorias[index];
  
});
// LLENAR  CATEGORIA 
const nombresCategorias = [];

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

  } )




}
categoria_listar()

})