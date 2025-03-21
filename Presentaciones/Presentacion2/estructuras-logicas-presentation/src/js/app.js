<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>M1 - Clase 3 - Estructuras Lógicas</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .slide {
            display: none;
            padding: 20px;
            text-align: center;
        }
        .active {
            display: block;
        }
        .navigation {
            margin-top: 20px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <div class="slide active">
        <h1>M1 - Clase 3 - Estructuras Lógicas</h1>
        <p>Introducción a las estructuras lógicas en programación.</p>
    </div>

    <div class="slide">
        <h2>¿Qué son las Estructuras Lógicas?</h2>
        <p>Las estructuras lógicas son fundamentales en la programación, ya que permiten tomar decisiones y controlar el flujo de un programa.</p>
    </div>

    <div class="slide">
        <h2>Estructuras de Control</h2>
        <ul>
            <li>Condicionales (if, else)</li>
            <li>Bucles (for, while)</li>
            <li>Switch case</li>
        </ul>
    </div>

    <div class="slide">
        <h2>Condicionales</h2>
        <p>Las estructuras condicionales permiten ejecutar diferentes bloques de código según se cumplan o no ciertas condiciones.</p>
        <pre>
if (condición) {
    // código si la condición es verdadera
} else {
    // código si la condición es falsa
}
        </pre>
    </div>

    <div class="slide">
        <h2>Bucles</h2>
        <p>Los bucles permiten repetir un bloque de código varias veces.</p>
        <pre>
for (inicialización; condición; incremento) {
    // código a repetir
}
        </pre>
    </div>

    <div class="slide">
        <h2>Ejemplo Práctico</h2>
        <p>Veamos un ejemplo de cómo usar estructuras lógicas en un programa simple.</p>
        <pre>
let numero = 5;
if (numero > 0) {
    console.log("El número es positivo");
} else {
    console.log("El número es negativo o cero");
}
        </pre>
    </div>

    <div class="navigation">
        <button id="prevBtn" onclick="changeSlide(-1)">Anterior</button>
        <button id="nextBtn" onclick="changeSlide(1)">Siguiente</button>
    </div>

    <script>
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');

        function changeSlide(direction) {
            slides[currentSlide].classList.remove('active');
            currentSlide += direction;

            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            } else if (currentSlide >= slides.length) {
                currentSlide = 0;
            }

            slides[currentSlide].classList.add('active');
        }
    </script>
</body>
</html>