/* =====================================================
   BIOESCOLA 360°
   SISTEMA PRINCIPAL DE REALIDADE AUMENTADA
===================================================== */


/* =====================================================
   ELEMENTOS PRINCIPAIS
===================================================== */

const scene =
    document.getElementById("arScene");

const message =
    document.getElementById("track-message");

const loadingMessage =
    document.getElementById("loadingMessage");

const errorMessage =
    document.getElementById("errorMessage");

const errorText =
    document.getElementById("errorText");

const retryButton =
    document.getElementById("retryButton");

/* =====================================================
IMAGEM HTML — FOLHOSAS
===================================================== */

const folhosasImageContainer =
    document.getElementById(
        "folhosasImageContainer"
    );

const folhosasImage =
    document.getElementById(
        "folhosasImage"
    );

/* =====================================================
   ESTADO
===================================================== */

let activeTrack = -1;

let especieAtual = null;

let menuOpen = false;


/* =====================================================
   SOM DOS BOTÕES
===================================================== */

const clickSound =
    document.getElementById("clickSound");


function tocarClick() {

    if (!clickSound) {
        return;
    }

    clickSound.currentTime = 0;

    clickSound.play()
        .catch(() => {
            /*
                O áudio é opcional.
                Se o arquivo não existir,
                não interrompe a aplicação.
            */
        });

}


/* =====================================================
   ÁUDIOS DAS CATEGORIAS
===================================================== */

const audioFolhosas =
    document.getElementById("audioFolhosas");

const audioTemperos =
    document.getElementById("audioTemperos");

const audioFrutos =
    document.getElementById("audioFrutos");

const audioFrutas =
    document.getElementById("audioFrutas");

const audioMedicinais =
    document.getElementById("audioMedicinais");

const audioPanc =
    document.getElementById("audioPanc");


/* =====================================================
   BOTÕES DAS CATEGORIAS
===================================================== */

const folhosaAudioLeftButton =
    document.getElementById(
        "folhosaAudioLeftButton"
    );

const folhosaAudioRightButton =
    document.getElementById(
        "folhosaAudioRightButton"
    );


const temperoAudioLeftButton =
    document.getElementById(
        "temperoAudioLeftButton"
    );

const temperoAudioRightButton =
    document.getElementById(
        "temperoAudioRightButton"
    );


const frutoAudioLeftButton =
    document.getElementById(
        "frutoAudioLeftButton"
    );

const frutoAudioRightButton =
    document.getElementById(
        "frutoAudioRightButton"
    );


const frutaAudioLeftButton =
    document.getElementById(
        "frutaAudioLeftButton"
    );

const frutaAudioRightButton =
    document.getElementById(
        "frutaAudioRightButton"
    );


const medicinalAudioLeftButton =
    document.getElementById(
        "medicinalAudioLeftButton"
    );

const medicinalAudioRightButton =
    document.getElementById(
        "medicinalAudioRightButton"
    );


const pancAudioLeftButton =
    document.getElementById(
        "pancAudioLeftButton"
    );

const pancAudioRightButton =
    document.getElementById(
        "pancAudioRightButton"
    );


/* =====================================================
   MENU
===================================================== */

const menuToggleButton =
    document.getElementById(
        "menuToggleButton"
    );

const sideMenu =
    document.getElementById(
        "sideMenu"
    );


/* =====================================================
   CONTEÚDO DA ESPÉCIE
===================================================== */

const speciesContent =
    document.getElementById(
        "speciesContent"
    );

const speciesTitle =
    document.getElementById(
        "speciesTitle"
    );

const speciesVideo =
    document.getElementById(
        "speciesVideo"
    );

const closeSpeciesButton =
    document.getElementById(
        "closeSpeciesButton"
    );


/* =====================================================
   BOTÕES DO VÍDEO
===================================================== */

const btnHistoria =
    document.getElementById(
        "btnHistoria"
    );

const btnCaracteristicas =
    document.getElementById(
        "btnCaracteristicas"
    );

const btnCuriosidades =
    document.getElementById(
        "btnCuriosidades"
    );


/* =====================================================
   DADOS DAS ESPÉCIES
===================================================== */

const especies = {


    /* -------------------------------------------------
       ALFACE
    ------------------------------------------------- */

    alface: {

        nome:
            "ALFACE",

        historia:
            "./Video/Alface.webm",

        caracteristicas:
            "./Video/Alface_Caracteristicas_270.webm",

        curiosidades:
            "./Video/Alface_Curiosidades_270.webm"

    },


    /* -------------------------------------------------
       COUVE
    ------------------------------------------------- */

    couve: {

        nome:
            "COUVE-MANTEIGA",

        historia:
            "./Video/Couve.webm",

        caracteristicas:
            "./Video/Couve_Caracteristicas_270.webm",

        curiosidades:
            "./Video/Couve_Curiosidades_270.webm"

    },


    /* -------------------------------------------------
       RÚCULA
    ------------------------------------------------- */

    rucula: {

        nome:
            "RÚCULA",

        historia:
            "./Video/Rucula.webm",

        caracteristicas:
            "./Video/Rucula_Caracteristicas_270.webm",

        curiosidades:
            "./Video/Rucula_Curiosidades_270.webm"

    },


    /* -------------------------------------------------
       COENTRO
    ------------------------------------------------- */

    coentro: {

        nome:
            "COENTRO",

        historia:
            "./Video/Coentro.webm",

        caracteristicas:
            "./Video/Coentro_Caracteristicas_270.webm",

        curiosidades:
            "./Video/Coentro_Curiosidades_270.webm"

    },


    /* -------------------------------------------------
       TOMATE
    ------------------------------------------------- */

    tomate: {

        nome:
            "TOMATE",

        historia:
            "./Video/Tomate.webm",

        caracteristicas:
            "./Video/Tomate_Caracteristicas_270.webm",

        curiosidades:
            "./Video/Tomate_Curiosidades_270.webm"

    },


    /* -------------------------------------------------
       ABACAXI
    ------------------------------------------------- */

    abacaxi: {

        nome:
            "ABACAXI",

        historia:
            "./Video/Abacaxi.webm",

        caracteristicas:
            "./Video/Abacaxi_Caracteristicas_270.webm",

        curiosidades:
            "./Video/Abacaxi_Curiosidades_270.webm"

    }

};


/* =====================================================
   CATEGORIAS
===================================================== */

const categorias = {


    0: {

        audio:
            audioFolhosas,

        button:
            folhosaAudioLeftButton

    },


    1: {

        audio:
            audioTemperos,

        button:
            temperoAudioLeftButton

    },


    2: {

        audio:
            audioFrutos,

        button:
            frutoAudioLeftButton

    },


    3: {

        audio:
            audioFrutas,

        button:
            frutaAudioLeftButton

    },


    4: {

        audio:
            audioMedicinais,

        button:
            medicinalAudioLeftButton

    },


    5: {

        audio:
            audioPanc,

        button:
            pancAudioLeftButton

    }

};


/* =====================================================
   DROPDOWNS
===================================================== */

const dropdowns = [


    {

        button:
            folhosaAudioRightButton,

        menu:
            document.getElementById(
                "folhosaSpeciesMenu"
            ),

        track:
            0

    },


    {

        button:
            temperoAudioRightButton,

        menu:
            document.getElementById(
                "temperoSpeciesMenu"
            ),

        track:
            1

    },


    {

        button:
            frutoAudioRightButton,

        menu:
            document.getElementById(
                "frutoSpeciesMenu"
            ),

        track:
            2

    },


    {

        button:
            frutaAudioRightButton,

        menu:
            document.getElementById(
                "frutaSpeciesMenu"
            ),

        track:
            3

    },


    {

        button:
            medicinalAudioRightButton,

        menu:
            document.getElementById(
                "medicinalSpeciesMenu"
            ),

        track:
            4

    },


    {

        button:
            pancAudioRightButton,

        menu:
            document.getElementById(
                "pancSpeciesMenu"
            ),

        track:
            5

    }

];


/* =====================================================
   ESCONDER BOTÕES
===================================================== */

function esconderBotoesInteracao() {

    dropdowns.forEach(
        dropdown => {

            if (dropdown.button) {

                dropdown.button.style.display =
                    "none";

            }

        }
    );


    Object.values(categorias)
        .forEach(
            categoria => {

                if (categoria.button) {

                    categoria.button.style.display =
                        "none";

                }

            }
        );

}


/* =====================================================
   MOSTRAR BOTÕES DA TRACK
===================================================== */

function mostrarBotoesTrack(index) {

    esconderBotoesInteracao();


    const dropdown =
        dropdowns[index];

    const categoria =
        categorias[index];


    if (
        categoria &&
        categoria.button
    ) {

        categoria.button.style.display =
            "block";

    }


    if (
        dropdown &&
        dropdown.button
    ) {

        dropdown.button.style.display =
            "block";

    }

}


/* =====================================================
   FECHAR DROPDOWNS
===================================================== */

function fecharTodosDropdowns() {

    dropdowns.forEach(
        dropdown => {

            if (dropdown.menu) {

                dropdown.menu.classList.remove(
                    "open"
                );

            }

        }
    );

}


/* =====================================================
   PARAR ÁUDIOS
===================================================== */

function pararTodosAudios() {

    document
        .querySelectorAll("audio")
        .forEach(
            audio => {

                audio.pause();

                audio.currentTime = 0;

            }
        );

}


/* =====================================================
   ÁUDIO DA CATEGORIA
===================================================== */

function tocarAudioCategoria(index) {

    const categoria =
        categorias[index];


    if (
        !categoria ||
        !categoria.audio ||
        !categoria.button
    ) {

        return;

    }


    const audio =
        categoria.audio;


    /* -----------------------------------------------
       Para os demais áudios
    ------------------------------------------------ */

    Object.values(categorias)
        .forEach(
            outra => {

                if (
                    outra.audio &&
                    outra.audio !== audio
                ) {

                    outra.audio.pause();

                    outra.audio.currentTime =
                        0;

                }


                if (
                    outra.button &&
                    outra.button !==
                        categoria.button
                ) {

                    outra.button.classList.remove(
                        "btn-active"
                    );

                }

            }
        );


    /* -----------------------------------------------
       Tocar / pausar
    ------------------------------------------------ */

    if (audio.paused) {

        audio.play()
            .then(() => {

                categoria.button.classList.add(
                    "btn-active"
                );

            })
            .catch(
                error => {

                    console.warn(
                        "Áudio não disponível:",
                        error
                    );

                }
            );

    }

    else {

        audio.pause();

        audio.currentTime =
            0;

        categoria.button.classList.remove(
            "btn-active"
        );

    }


    audio.onended =
        () => {

            categoria.button.classList.remove(
                "btn-active"
            );

        };

}


/* =====================================================
   EVENTOS DOS BOTÕES CONHEÇA
===================================================== */

const botoesConheca = [

    {
        button: folhosaAudioLeftButton,
        track: 0
    },

    {
        button: temperoAudioLeftButton,
        track: 1
    },

    {
        button: frutoAudioLeftButton,
        track: 2
    },

    {
        button: frutaAudioLeftButton,
        track: 3
    },

    {
        button: medicinalAudioLeftButton,
        track: 4
    },

    {
        button: pancAudioLeftButton,
        track: 5
    }

];


botoesConheca.forEach(
    item => {

        if (!item.button) {
            return;
        }


        item.button.addEventListener(
            "click",
            () => {

                if (
                    activeTrack !==
                    item.track
                ) {

                    return;

                }


                tocarAudioCategoria(
                    item.track
                );

            }
        );

    }
);


/* =====================================================
   EVENTOS DOS DROPDOWNS
===================================================== */

dropdowns.forEach(
    dropdown => {

        if (
            !dropdown.button ||
            !dropdown.menu
        ) {

            return;

        }


        dropdown.button.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                if (
                    activeTrack !==
                    dropdown.track
                ) {

                    return;

                }


                dropdowns.forEach(
                    outro => {

                        if (
                            outro !== dropdown &&
                            outro.menu
                        ) {

                            outro.menu.classList.remove(
                                "open"
                            );

                        }

                    }
                );


                dropdown.menu.classList.toggle(
                    "open"
                );

            }
        );

    }
);


/* =====================================================
   SELEÇÃO DE ESPÉCIE
===================================================== */

document
    .querySelectorAll(".species-btn")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();


                    const especie =
                        button.dataset.species;


                    fecharTodosDropdowns();


                    abrirEspecie(
                        especie
                    );

                }
            );

        }
    );


/* =====================================================
   ABRIR ESPÉCIE
===================================================== */

function abrirEspecie(especie) {

    const dados =
        especies[especie];


    /* -----------------------------------------------
       Verifica se existe
    ------------------------------------------------ */

    if (!dados) {

        console.warn(
            "Espécie não cadastrada:",
            especie
        );

        return;

    }


    /* -----------------------------------------------
       Guarda espécie atual
    ------------------------------------------------ */

    especieAtual =
        especie;


    /* -----------------------------------------------
       Título
    ------------------------------------------------ */

    if (speciesTitle) {

        speciesTitle.innerText =
            dados.nome;

    }


    /* -----------------------------------------------
       Mostra container
    ------------------------------------------------ */

    if (speciesContent) {

        speciesContent.style.display =
            "block";


        speciesContent.setAttribute(
            "aria-hidden",
            "false"
        );

    }


    /* -----------------------------------------------
       NÃO INICIA NENHUM VÍDEO AUTOMATICAMENTE
       
       O vídeo permanece parado até o usuário
       clicar em um dos três botões.
    ------------------------------------------------ */

    if (speciesVideo) {

        speciesVideo.pause();

        speciesVideo.removeAttribute(
            "src"
        );

        speciesVideo.load();

    }


    /* -----------------------------------------------
       Remove estado ativo dos botões
    ------------------------------------------------ */

    document
        .querySelectorAll(
            ".species-video-buttons button"
        )
        .forEach(
            btn => {

                btn.classList.remove(
                    "btn-ativo"
                );

            }
        );

}


/* =====================================================
   TROCAR VÍDEO
===================================================== */

function trocarVideo(
    videoSrc,
    botao
) {

    if (
        !speciesVideo ||
        !videoSrc
    ) {

        return;

    }


    document
        .querySelectorAll(
            ".species-video-buttons button"
        )
        .forEach(
            btn => {

                btn.classList.remove(
                    "btn-ativo"
                );

            }
        );


    if (botao) {

        botao.classList.add(
            "btn-ativo"
        );

    }


    speciesVideo.pause();


    speciesVideo.removeAttribute(
        "src"
    );


    speciesVideo.load();


    speciesVideo.src =
        videoSrc;


    speciesVideo.load();


    const promessa =
        speciesVideo.play();


    if (promessa) {

        promessa.catch(
            error => {

                console.warn(
                    "O vídeo não iniciou automaticamente:",
                    error
                );

            }
        );

    }

}


/* =====================================================
   BOTÕES DO VÍDEO
===================================================== */

if (btnHistoria) {

    btnHistoria.addEventListener(
        "click",
        () => {

            const dados =
                obterEspecieAtual();

            if (!dados) {
                return;
            }

            trocarVideo(
                dados.historia,
                btnHistoria
            );

        }
    );

}


if (btnCaracteristicas) {

    btnCaracteristicas.addEventListener(
        "click",
        () => {

            const dados =
                obterEspecieAtual();

            if (!dados) {
                return;
            }

            trocarVideo(
                dados.caracteristicas,
                btnCaracteristicas
            );

        }
    );

}


if (btnCuriosidades) {

    btnCuriosidades.addEventListener(
        "click",
        () => {

            const dados =
                obterEspecieAtual();

            if (!dados) {
                return;
            }

            trocarVideo(
                dados.curiosidades,
                btnCuriosidades
            );

        }
    );

}


/* =====================================================
   OBTER ESPÉCIE
===================================================== */

function obterEspecieAtual() {

    if (!especieAtual) {

        return null;

    }


    return especies[
        especieAtual
    ];

}


/* =====================================================
   FECHAR ESPÉCIE
===================================================== */

function fecharConteudoEspecie() {

    if (!speciesContent) {
        return;
    }


    speciesContent.style.display =
        "none";


    speciesContent.setAttribute(
        "aria-hidden",
        "true"
    );


    if (speciesVideo) {

        speciesVideo.pause();

        speciesVideo.removeAttribute(
            "src"
        );

        speciesVideo.load();

    }


    especieAtual =
        null;


    document
        .querySelectorAll(
            ".species-video-buttons button"
        )
        .forEach(
            button => {

                button.classList.remove(
                    "btn-ativo"
                );

            }
        );

}


if (closeSpeciesButton) {

    closeSpeciesButton.addEventListener(
        "click",
        fecharConteudoEspecie
    );

}


/* =====================================================
   ERRO DE VÍDEO
===================================================== */

if (speciesVideo) {

    speciesVideo.addEventListener(
        "error",
        () => {

            console.error(
                "Erro ao carregar vídeo:",
                speciesVideo.currentSrc
            );

        }
    );

}


/* =====================================================
   TRACKS
===================================================== */

const targets =
    document.querySelectorAll(
        "[mindar-image-target]"
    );


/* =====================================================
   TRACK ENCONTRADA
===================================================== */

targets.forEach(
    (target, index) => {


        target.addEventListener(
            "targetFound",
            () => {

                if (index === 0) {
                 mostrarImagemFolhosas();
                }
                
                console.log(
                    "TRACK ENCONTRADA:",
                    index
                );


                activeTrack =
                    index;


                if (message) {

                    message.classList.add(
                        "hidden"
                    );

                }


                mostrarBotoesTrack(
                    index
                );


                fecharTodosDropdowns();


                fecharConteudoEspecie();


                registrarTrack(
                    index
                );

            }
        );


        /* =================================================
           TRACK PERDIDA
        ================================================== */

        target.addEventListener(
            "targetLost",
            () => {

                if (index === 0) {
                    esconderImagemFolhosas();
                }
                
                console.log(
                    "TRACK PERDIDA:",
                    index
                );


                if (
                    activeTrack ===
                    index
                ) {

                    activeTrack =
                        -1;

                }


                if (message) {

                    message.classList.remove(
                        "hidden"
                    );

                }


                esconderBotoesInteracao();


                fecharTodosDropdowns();


                fecharConteudoEspecie();


                pararTodosAudios();


                menuOpen =
                    false;


                document.body.classList.remove(
                    "menu-open"
                );


                if (menuToggleButton) {

                    menuToggleButton.innerHTML =
                        "☰";

                    menuToggleButton.style.display =
                        "none";

                }

            }
        );

    }
);


/* =====================================================
   MENU
===================================================== */

if (menuToggleButton) {

    menuToggleButton.addEventListener(
        "click",
        () => {

            menuOpen =
                !menuOpen;


            if (menuOpen) {

                document.body.classList.add(
                    "menu-open"
                );


                menuToggleButton.innerHTML =
                    "✕";


                fecharTodosDropdowns();

            }

            else {

                document.body.classList.remove(
                    "menu-open"
                );


                menuToggleButton.innerHTML =
                    "☰";

            }

        }
    );

}


/* =====================================================
   CONTADOR
===================================================== */

const progressCount =
    document.getElementById(
        "progressCount"
    );


const finalButtonTop =
    document.getElementById(
        "finalButtonTop"
    );


const visitedTracks =
    new Set();


const totalTracks =
    6;


function registrarTrack(index) {

    if (
        visitedTracks.has(index)
    ) {

        return;

    }


    visitedTracks.add(
        index
    );


    if (progressCount) {

        progressCount.innerText =
            visitedTracks.size;

    }


    if (
        visitedTracks.size >=
        totalTracks
    ) {

        if (finalButtonTop) {

            finalButtonTop.style.display =
                "block";

        }

    }

}


/* =====================================================
   BOTÃO QUIZ
===================================================== */

if (finalButtonTop) {

    finalButtonTop.addEventListener(
        "click",
        () => {

            window.location.href =
                "quiz.html";

        }
    );

}


/* =====================================================
   CLIQUE DOS BOTÕES
===================================================== */

document
    .querySelectorAll("button")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                tocarClick
            );

        }
    );


/* =====================================================
   EVENTOS DO MINDAR
===================================================== */

if (scene) {


    /* -------------------------------------------------
       MINDAR PRONTO
    ------------------------------------------------- */

    scene.addEventListener(
        "arReady",
        () => {

            console.log(
                "MindAR iniciado com sucesso."
            );


            if (loadingMessage) {

                loadingMessage.style.display =
                    "none";

            }

        }
    );


    /* -------------------------------------------------
       MINDAR ERRO
    ------------------------------------------------- */

    scene.addEventListener(
        "arError",
        event => {

            console.error(
                "Erro do MindAR:",
                event
            );


            if (loadingMessage) {

                loadingMessage.style.display =
                    "none";

            }


            if (errorMessage) {

                errorMessage.style.display =
                    "flex";

            }


            if (errorText) {

                errorText.innerText =
                    "Não foi possível iniciar a câmera.\n\n" +
                    "Verifique se o navegador possui permissão para usar a câmera.";

            }

        }
    );


    /* -------------------------------------------------
       CÂMERA PRONTA
    ------------------------------------------------- */

    scene.addEventListener(
        "camera-init",
        () => {

            console.log(
                "Câmera inicializada."
            );


            if (loadingMessage) {

                loadingMessage.style.display =
                    "none";

            }

        }
    );


    /* -------------------------------------------------
       ERRO DE CÂMERA
    ------------------------------------------------- */

    scene.addEventListener(
        "camera-error",
        event => {

            console.error(
                "Erro de câmera:",
                event
            );


            if (loadingMessage) {

                loadingMessage.style.display =
                    "none";

            }


            if (errorMessage) {

                errorMessage.style.display =
                    "flex";

            }


            if (errorText) {

                errorText.innerText =
                    "O navegador não conseguiu acessar a câmera.\n\n" +
                    "Verifique a permissão da câmera.";

            }

        }
    );

}


/* =====================================================
   BOTÃO TENTAR NOVAMENTE
===================================================== */

if (retryButton) {

    retryButton.addEventListener(
        "click",
        () => {

            window.location.reload();

        }
    );

}


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

esconderBotoesInteracao();


console.log(
    "BIOESCOLA 360° carregado."
);

console.log(
    "Targets encontrados:",
    targets.length
);

/*-------------------------------------------------------------*/
/* =====================================================
MOSTRAR IMAGEM FOLHOSAS
===================================================== */

function mostrarImagemFolhosas() {

    if (!folhosasImageContainer) {
        return;
    }

    folhosasImageContainer.style.display =
        "block";
}


/* =====================================================
ESCONDER IMAGEM FOLHOSAS
===================================================== */

function esconderImagemFolhosas() {

    if (!folhosasImageContainer) {
        return;
    }

    folhosasImageContainer.style.display =
        "none";
}
