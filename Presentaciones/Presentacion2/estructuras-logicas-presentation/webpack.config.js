<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>M1 - Clase 3 - Estructuras Lógicas</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .slide {
            display: none;
            padding: 20px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            margin: 20px auto;
            max-width: 800px;
        }
        .active {
            display: block;
        }
        .navigation {
            text-align: center;
            margin-top: 20px;
        }
        button {
            padding: 10px 20px;
            margin: 5px;
            border: none;
            background-color: #007BFF;
            color: white;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>

    <div class="slide active">
        <h1>M1 - Clase 3 - Estructuras Lógicas</h1>
        <p>Bienvenidos a la clase sobre estructuras lógicas en programación.</p>
    </div>

    <div class="slide">
        <h2>1. Introducción a las Estructuras Lógicas</h2>
        <p>Las estructuras lógicas son fundamentales para el control del flujo de un programa.</p>
    </div>

    <div class="slide">
        <h2>2. Estructuras de Control</h2>
        <h3>2.1. Condicionales</h3>
        <p>Las estructuras condicionales permiten ejecutar diferentes bloques de código según ciertas condiciones.</p>
        <pre><code>if (condición) {
    // código a ejecutar si la condición es verdadera
} else {
    // código a ejecutar si la condición es falsa
}</code></pre>
    </div>

    <div class="slide">
        <h3>2.2. Switch</h3>
        <p>La estructura switch es una alternativa a múltiples if-else.</p>
        <pre><code>switch (expresión) {
    case valor1:
        // código
        break;
    case valor2:
        // código
        break;
    default:
        // código
}</code></pre>
    </div>

    <div class="slide">
        <h2>3. Bucles</h2>
        <h3>3.1. Bucle For</h3>
        <p>El bucle for se utiliza para repetir un bloque de código un número específico de veces.</p>
        <pre><code>for (inicialización; condición; incremento) {
    // código a ejecutar
}</code></pre>
    </div>

    <div class="slide">
        <h3>3.2. Bucle While</h3>
        <p>El bucle while repite un bloque de código mientras una condición sea verdadera.</p>
        <pre><code>while (condición) {
    // código a ejecutar
}</code></pre>
    </div>

    <div class="slide">
        <h2>4. Operadores Lógicos</h2>
        <p>Los operadores lógicos permiten combinar condiciones.</p>
        <ul>
            <li><strong>AND (&&)</strong>: Verdadero si ambas condiciones son verdaderas.</li>
            <li><strong>OR (||)</strong>: Verdadero si al menos una condición es verdadera.</li>
            <li><strong>NOT (!)</strong>: Invierte el valor de verdad de una condición.</li>
        </ul>
    </div>

    <div class="navigation">
        <button id="prevBtn">Anterior</button>
        <button id="nextBtn">Siguiente</button>
    </div>

    <script>
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }

        document.getElementById('nextBtn').addEventListener('click', () => {
            if (currentSlide < slides.length - 1) {
                currentSlide++;
                showSlide(currentSlide);
            }
        });

        document.getElementById('prevBtn').addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                showSlide(currentSlide);
            }
        });
    </script>

</body>
</html>