window.onload = () =>
{
    let NutriaTrite =[
        "../Img/cafeNutria.jpg",
        "../Img/DobleRechazo.jpg",
        "../Img/IntentaloOtraVez.jpg",
        "../Img/Nomegusta.jpg",
        "../Img/ACONQUEESASTENEMOS.jpg",
        "../Img/VENQUETEDOYPALLEVAR.jpg",
        "../Img/ultimaoportunidad.jpg"]
    let ContenidoParrago =[
        "No importa,me tomare un café mientras espero",
        "¡Ays! ¿Cómo has podido rechazarme otra vez?",
        "Ya no me gusta este juego",
        "¡Qué malo eres amor!",
        "¡Atrevete a decir que no otra vez!",
        "Ven que te doy para llevar por no decir que 'sí'",
        "Esta es tu última oportunidad ca-ri-ño",
        "¡Anda dime que si!por fi pleease"]
    let img = document.getElementById("imagenMostrar");
    let BotonNo = document.getElementById('BotonNo');
    let BotonSi = document.getElementById('BotonSi');
    let index = 0;
    let tamaño = 1;
    let Frase = document.getElementById('Frase');

    BotonNo.addEventListener('click',() =>
    {
        if(index < NutriaTrite.length)
        {
            tamaño = tamaño + 1;
            img.src = NutriaTrite[index];
            Frase.textContent = ContenidoParrago[index];
            BotonSi.style.fontSize = tamaño + 'em';
            index++;
        }
        else
        {
            img.src = "../Img/sad.jpg";
            Frase.textContent = ContenidoParrago[NutriaTrite.length];
            BotonNo.style.display='none';
        }
    })

    BotonSi.addEventListener('click',() =>
    {
        img.src = "../Img/besoNutria.jpg";
        BotonSi.style.display='none';
        BotonNo.style.display='none';
        Frase.innerHTML = "❤️Chiiiiiiiiiii! Me dijo que siiiiiiiiii!<b>Te amoooooooo</b>❤️";
        lanzarEfectos(300);
        lanzarEfectos2(50);
        playsound();
    })
}
function lanzarEfectos(cantidad)
{
    const contenedor = document.getElementById('contenedorEfectos');
    for (let i=0; i < cantidad; i++)
    {
        setTimeout(() =>
        {
            //Nutrias
            const nutria = document.createElement('img');
            nutria.src = '../Img/nutriaflor.png';
            nutria.classList = 'nutria';
            nutria.style.left = Math.random() * (window.innerWidth - 100) + "px";
            contenedor.appendChild(nutria);
            setTimeout(() => nutria.remove(),3000)//Nutrias
        
            const corazon = document.createElement("img");
            corazon.src = "../Img/heart.png"; 
            corazon.classList.add("corazon");
            corazon.style.left = Math.random() * (window.innerWidth - 50) + "px";
            contenedor.appendChild(corazon);
            setTimeout(() => corazon.remove(), 4000);
        },i * 200);
    }
}
function lanzarEfectos2(cantidad)
{
    const contenedor = document.getElementById('contenedorEfectos');
    for (let i=0; i < cantidad; i++)
    {
        setTimeout(() =>
        {const flor1 = document.createElement("img");
            flor1.src = "../Img/flor1.png"; 
            flor1.classList.add("corazon");
            flor1.style.left = Math.random() * (window.innerWidth - 100) + "px";
            contenedor.appendChild(flor1);
            setTimeout(() => flor1.remove(), 3000);

            const flor2 = document.createElement("img");
            flor2.src = "../Img/flor2.png"; 
            flor2.classList.add("corazon");
            flor2.style.left = Math.random() * (window.innerWidth - 70) + "px";
            contenedor.appendChild(flor2);
            setTimeout(() => flor1.remove(), 3000);

            const flor3 = document.createElement("img");
            flor3.src = "../Img/flor3.png"; 
            flor3.classList.add("corazon");
            flor3.style.left = Math.random() * (window.innerWidth - 30) + "px";
            contenedor.appendChild(flor3);
            setTimeout(() => flor1.remove(), 3000);

            const flor4 = document.createElement("img");
            flor4.src = "../Img/flor4.png"; 
            flor4.classList.add("corazon");
            flor4.style.left = Math.random() * (window.innerWidth - 50) + "px";
            contenedor.appendChild(flor4);
            setTimeout(() => flor1.remove(), 3500);
        },i * 400);
    }
}
function playsound()
{
    const MusicaFondo = new Audio('../Audio/Indila - Love Story (Lyrics).mp3');
    MusicaFondo.play();
    MusicaFondo.loop = true;
    MusicaFondo.volume = 0.05;
}