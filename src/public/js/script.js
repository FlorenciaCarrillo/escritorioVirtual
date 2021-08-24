const body = document.body;



// clima
fetch ("https://api.weatherapi.com/v1/current.json?key=30bdfa813d494db085810910212607&q=Cordoba, Argentina&aqi=no&lang=es")
    .then (response => response.json())
    .then (json => {
        console.log(json);
        let lugar= json.location.name;
        let temperatura = json.current.temp_c;
        let sensacionTermica = json.current.feelslike_c;
        let condición= json.current.condition.text;
        let codigo= json.current.condition.code;
        let esDia= json.current.is_day;
        let icono= json.current.condition.icon;

        const textoClima = document.getElementById("textoClima");
        textoClima.innerHTML=lugar + "</br>" + "T: " + temperatura + " °C " + "</br>" + " ST: " + sensacionTermica + "</br>" + condición + "<img src='" + icono + "' style='width: 100px;'></img>";

        obtenerImagenSegunCondicion(codigo, esDia);
        })

        function obtenerImagenSegunCondicion(codigo, esDia){
            let momento="";
            if(esDia==0){
                momento="noche";
            }
            else momento="dia";
            const url = "./img/clima/" + momento + "/" + codigo + ".jpg"
            body.style.backgroundImage="url(" +url+ ")";
            body.style.backgroundSize="cover";

            //falta hacer el fondo responsive
            }
        

//reloj

const actualizarHora = () =>{
    const time= new Date();
    let hora = agregarCeros(time.getHours());
    let minutos = agregarCeros(time.getMinutes());
    let segundos = agregarCeros(time.getSeconds());
    

    document.querySelector(".hora").textContent = hora;
    document.querySelector(".minutos").textContent = minutos;
    document.querySelector(".segundos").textContent = segundos;
}
const agregarCeros = n => { 
    if (n.toString().length < 2) return "0".concat(n);
    return n;
}
setInterval(actualizarHora,1000);

// noticias
var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=3871e612140c4b26b5148ee9d33415d8';
var req = new Request(url);

fetch(req)
    .then (response => response.json())
    .then (json => { 
        
        let news= json.articles;
        console.log(news);
        const slideContainer = document.getElementById("carouselnoticiasimagenes");
        let listaSlides="";
        for ( let i=0; i<news.length; i++) {
            
            const article=news[i];
            let active="";
            if(i===0){
                
                active="active";
            }

            let slideCarousel= `

            <div class="carousel-item ${active}">
            <img src="${article.urlToImage}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>${article.title}</h5>
              <p>${article.description}</p>
            </div>
          </div>
            `      
            listaSlides+= slideCarousel;     
            
        }
        console.log(listaSlides);
        slideContainer.innerHTML= listaSlides;
       
    })

    function mostrarNoticias(){
        const widgetNoticias = document.getElementById("widgetNoticias");
        const botonNoticias = document.getElementById("botonNoticias");
        if (widgetNoticias.style.display=="none")
        {
            widgetNoticias.style.display="block";
            botonNoticias.classList.add("active");

        }
        else
        {
            widgetNoticias.style.display="none";
            botonNoticias.classList.remove("active");
        }
    }

    function cerrarNoticias(){
        const widgetNoticias = document.getElementById("widgetNoticias");
        const botonCerrarNoticias = document.getElementById("botonCerrarNoticias");
        const botonNoticias = document.getElementById("botonNoticias");
      
        widgetNoticias.style.display="none";
        botonNoticias.classList.remove("active");
        botonCerrarNoticias.style.visibility="hidden";
        
    }

    function obtenerTareas(){
        fetch("/api/tareas")
        .then (response => response.json())
        .then (json => {
            console.log(json);

        

        })
    }

