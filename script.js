// =========================
// ANIMAÇÃO AO ROLAR
// =========================

const elementos = document.querySelectorAll(
    ".conteudo-pedido, .titulo-lembrancas, .foto-bloco, .conteudo-final"
);

const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("aparecer");

                observador.unobserve(entrada.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

elementos.forEach((elemento) => {
    observador.observe(elemento);
});


// =========================
// EFEITO NAS FOTOS
// =========================

const fotos = document.querySelectorAll(
    ".foto-container img"
);

fotos.forEach((foto) => {

    foto.addEventListener("mouseenter", () => {
        foto.style.transform = "scale(1.05)";
    });

    foto.addEventListener("mouseleave", () => {
        foto.style.transform = "scale(1)";
    });

});


// =========================
// BOTÕES PRINCIPAIS
// =========================

const btnSim = document.getElementById("btnSim");
const btnNao = document.getElementById("btnNao");
const resposta = document.getElementById("resposta");


// =========================
// SEU WHATSAPP
// =========================

const numeroWhatsApp = "SEU_NUMERO_AQUI";


// =========================
// PERGUNTAS
// =========================

const perguntas = [

    "Tem certeza que você não quer? 🥲",

    "Você realmente não quer ser meu amigo? 😔",

    "Mas nem uma chance? 🥺",

    "Você tem certeza mesmo? 😢",

    "Nem podemos tentar ser amigos? 🥲",

    "Então você realmente prefere dizer não? 😔"

];

let etapa = 0;


// =========================
// SIM ORIGINAL
// =========================

btnSim.addEventListener("click", () => {

    const mensagem =
        "Aceitei ser seu amigo! 🤝";

    const mensagemCodificada =
        encodeURIComponent(mensagem);

    window.location.href =
        `https://wa.me/${+554991186063}?text=${mensagemCodificada}`;

});


// =========================
// NÃO ORIGINAL
// =========================

btnNao.addEventListener("click", () => {

    etapa = 0;

    mostrarPergunta();

});


// =========================
// MOSTRAR PERGUNTA
// =========================

function mostrarPergunta() {

    resposta.innerHTML = `

        <div class="pergunta-extra">

            <strong>
                ${perguntas[etapa]}
            </strong>

            <div class="botoes-resposta">

                <button
                    class="btn sim"
                    id="simExtra"
                >
                    SIM
                </button>

                <button
                    class="btn nao"
                    id="naoExtra"
                >
                    NÃO
                </button>

            </div>

        </div>

    `;


    // Esconde os botões originais

    btnSim.style.display = "none";
    btnNao.style.display = "none";


    const simExtra =
        document.getElementById("simExtra");

    const naoExtra =
        document.getElementById("naoExtra");


    // =========================
    // SIM DA PERGUNTA
    // =========================

    simExtra.addEventListener("click", () => {

        mostrarRespostaTriste();

    });


    // =========================
    // NÃO DA PERGUNTA
    // =========================

    naoExtra.addEventListener("click", () => {

        etapa++;

        if (etapa >= perguntas.length) {

            mostrarMotivo();

            return;

        }

        mostrarPergunta();

    });

}


// =========================
// RESPOSTA TRISTE
// =========================

function mostrarRespostaTriste() {

    resposta.innerHTML = `

        <div class="mensagem-triste">

            <strong>
                Então você realmente não quer ser meu amigo... 🥲
            </strong>

            <br><br>

            Tudo bem, eu respeito sua decisão.

            <br>

            Só fiquei um pouquinho triste. 😔

            <br><br>

            Mas eu ainda queria saber o que você pensa.

            <div class="botoes-resposta">

                <button
                    class="btn sim"
                    id="motivoSim"
                >
                    CONTAR O MOTIVO
                </button>

            </div>

        </div>

    `;


    const motivoSim =
        document.getElementById("motivoSim");


    motivoSim.addEventListener("click", () => {

        mostrarMotivo();

    });

}


// =========================
// PEDIR O MOTIVO
// =========================

function mostrarMotivo() {

    resposta.innerHTML = `

        <div class="motivo">

            <strong>
                Posso saber o motivo? 🥲
            </strong>

            <p>
                Quero entender sua decisão.
                Se quiser, escreva aqui o que você pensa.
            </p>

            <textarea
                id="motivoTexto"
                placeholder="Escreva o motivo aqui..."
                rows="5"
            ></textarea>

            <button
                class="btn sim"
                id="enviarMotivo"
            >
                ENVIAR RESPOSTA
            </button>

        </div>

    `;


    const enviarMotivo =
        document.getElementById("enviarMotivo");


    enviarMotivo.addEventListener("click", () => {

        const campo =
            document.getElementById("motivoTexto");


        const motivo =
            campo.value.trim();


        if (motivo === "") {

            alert(
                "Escreva alguma coisa antes de enviar. 😅"
            );

            campo.focus();

            return;

        }


        enviarMotivoWhatsApp(motivo);

    });

}


// =========================
// ENVIAR MOTIVO
// =========================

function enviarMotivoWhatsApp(motivo) {

    const mensagem =
        `Resposta sobre o pedido de amizade 🥲\n\nMotivo informado:\n${motivo}`;


    const mensagemCodificada =
        encodeURIComponent(mensagem);


    window.location.href =
        `https://wa.me/${+554991186063}?text=${mensagemCodificada}`;

}
