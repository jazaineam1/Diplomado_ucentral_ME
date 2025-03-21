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
            margin: 5px;
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
        <h2>1. ¿Qué son las estructuras lógicas?</h2>
        <p>Las estructuras lógicas son herramientas que permiten tomar decisiones en un programa.</p>
    </div>

    <div class="slide">
        <h2>2. Tipos de estructuras lógicas</h2>
        <ul>
            <li>Estructuras de selección (if, switch)</li>
            <li>Estructuras de repetición (for, while)</li>
            <li>Estructuras de control de flujo</li>
        </ul>
    </div>

    <div class="slide">
        <h2>3. Estructura de selección</h2>
        <p>La estructura de selección permite ejecutar diferentes bloques de código según condiciones específicas.</p>
        <pre>
if (condición) {
    // código si la condición es verdadera
} else {
    // código si la condición es falsa
}
        </pre>
    </div>

    <div class="slide">
        <h2>4. Estructura de repetición</h2>
        <p>Las estructuras de repetición permiten ejecutar un bloque de código varias veces.</p>
        <pre>
for (inicialización; condición; incremento) {
    // código a repetir
}
        </pre>
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
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });

        document.getElementById('prevBtn').addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });
    </script>

</body>
</html>