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
      
        const direcion_html= document.getElementById("Direcion")
        const gamil_html = document.getElementById("gmail-contacto")
        const cellphone= document.getElementById("number_of_cellphone")
     
        direcion_html.textContent=direccion
        gamil_html.textContent=correo_constante
        cellphone.textContent=telefono


        const redes_social = document.querySelectorAll(".social-media .iconredes");
       
        const iconredessocial = [];
        data.data.Configuraciones.forEach(function(configuracion) {        
         iconredessocial.push(configuracion.Valor)
        
      });
      

      redes_social.forEach( function(categoria,index){
        categoria.href= iconredessocial[index];
        
      });
      
       
  
       
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
  
   

})