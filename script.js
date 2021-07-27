const body = document.body;



fetch ("http://api.weatherapi.com/v1/current.json?key=30bdfa813d494db085810910212607&q=Cordoba, Argentina&aqi=no&lang=es")
    .then (response => response.json())
    .then (json => {
        console.log(json);
        let lugar= json.location.name;
        let temperatura = json.current.temp_c;
        let sensacionTermica = json.current.feelslike_c;
        let condición= json.current.condition.text;
        let codigo= json.current.condition.code;

        const textoClima = document.getElementById("textoClima");
        textoClima.innerHTML=lugar + "</br>" + "T: " + temperatura + " °C " + "</br>" + " ST: " + sensacionTermica + "</br>" + condición;

        obtenerImagenSegunCondicion(codigo);
        })

        function obtenerImagenSegunCondicion(codigo){
            const url = "./img/clima/" + codigo + ".jpg"
            body.style.backgroundImage="url(" +url+ ")";
            body.style.backgroundSize="cover";

            //falta hacer el fondo responsive
            }
        