const textos = ["Sou um Dev Front-end", "Sou um Dev Back-end"]; // Array com os textos a serem alternados
        let index = 0; // Índice do texto atual
        const textoElement = document.getElementById("texto");

        function alternarTexto() {
            textoElement.textContent = textos[index]; // Define o texto atual

            // Atualiza o índice para o próximo texto
            index = (index + 1) % textos.length;

            // Chama a função novamente após um período de tempo (1000ms = 1 segundo)
            setTimeout(alternarTexto, 1000);
        }

        // Inicie a alternância de texto
        alternarTexto();