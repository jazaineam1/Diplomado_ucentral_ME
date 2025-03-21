#f4f4f4;
            margin: 0;
            padding: 0;
        }
        .slide {
            display: none;
            padding: 20px;
            background-color: white;
            border: 1px solid #ccc;
            margin: 20px;
            border-radius: 5px;
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
            <li>Condicionales</li>
            <li>Bucles</li>
            <li>Switch</li>
        </ul>
    </div>

    <div class="slide">
        <h2>3. Estructuras condicionales</h2>
        <p>Las estructuras condicionales permiten ejecutar diferentes bloques de código según ciertas condiciones.</p>
        <pre>
if (condición) {
    // código si la condición es verdadera
} else {
    // código si la condición es falsa
}
        </pre>
    </div>

    <div class="slide">
        <h2>4. Estructuras de bucle</h2>
        <p>Los bucles permiten repetir un bloque de código múltiples veces.</p>
        <pre>
for (inicialización; condición; incremento) {
    // código a repetir
}
        </pre>
    </div>

    <div class="navigation">
        <button onclick="prevSlide()">Anterior</button>
        <button onclick="nextSlide()">Siguiente</button>
    </div>

    <script>
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
    </script>
</body>
</html>
```

### Instructions to Customize:
1. **Content**: Replace the placeholder text with the actual content from your PDF.
2. **Styling**: You can modify the CSS styles to match your desired presentation theme.
3. **Functionality**: The JavaScript code allows you to navigate through the slides. You can enhance it further if needed.

Feel free to ask if you need help with specific sections or additional features!