/* =====================================================
   MENSAGEM
===================================================== */

const message =
    document.getElementById("track-message");


/* =====================================================
   SOM DOS BOTÕES
===================================================== */

const clickSound =
    document.getElementById("clickSound");


function tocarClick() {

    if (!clickSound) return;

    clickSound.pause();

    clickSound.currentTime = 0;

    clickSound.play().catch(() => {});

}


/* =====================================================
   ÁUDIOS DAS 6 CATEGORIAS
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
   BOTÕES DAS TRACKS
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
   MENU HAMBURGER
===================================================== */

const menuToggleButton =
    document.getElementById(
        "menuToggleButton"
    );

let menuOpen = false;


/* =====================================================
   TRACK ATIVA
===================================================== */

let activeTrack = -1;


/* =====================================================
   CONTAINER ÚNICO DE VÍDEO
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
   ESPÉCIE ATUAL
===================================================== */

let especieAtual = null;


/* =====================================================
   DADOS DAS ESPÉCIES
   TODOS OS VÍDEOS SÃO WEBM
===================================================== */

const especies = {

    /* -------------------------------------------------
       ALFACE
    ------------------------------------------------- */

    alface: {

        nome:
            "ALFACE",

        historia:
            "Video/Alface.webm",

        caracteristicas:
            "Video/Alface_Caracteristicas_270.webm",

        curiosidades:
            "Video/Alface_Curiosidades_270.webm"

    },


    /* -------------------------------------------------
       COUVE-MANTEIGA
    ------------------------------------------------- */

    couve: {

        nome:
            "COUVE-MANTEIGA",

        historia:
            "Video/Couve.webm",

        caracteristicas:
            "Video/Couve_Caracteristicas_270.webm",

        curiosidades:
            "Video/Couve_Curiosidades_270.webm"

    },


    /* -------------------------------------------------
       RÚCULA
    ------------------------------------------------- */

    rucula: {

        nome:
            "RÚCULA",

        historia:
            "Video/Rucula.webm",

        caracteristicas:
            "Video/Rucula_Caracteristicas_270.webm",

        curiosidades:
            "Video/Rucula_Curiosidades_270.webm"

    }

};


/* =====================================================
   TODAS AS CATEGORIAS
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
   FECHAR TODOS OS DROPDOWNS
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
   ESCONDER BOTÕES DAS TRACKS
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
   PARAR TODOS OS ÁUDIOS
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
   TOCAR ÁUDIO DA CATEGORIA
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
       Para outros áudios
    ------------------------------------------------ */

    Object.values(categorias)
        .forEach(
            outraCategoria => {

                if (
                    outraCategoria.audio &&
                    outraCategoria.audio !== audio
                ) {

                    outraCategoria.audio.pause();

                    outraCategoria.audio.currentTime =
                        0;

                }


                if (
                    outraCategoria.button &&
                    outraCategoria.button !==
                        categoria.button
                ) {

                    outraCategoria.button.classList.remove(
                        "btn-active"
                    );

                }

            }
        );


    /* -----------------------------------------------
       Toca / pausa
    ------------------------------------------------ */

    if (audio.paused) {

        audio.play()
            .then(() => {

                categoria.button.classList.add(
                    "btn-active"
                );

            })
            .catch(error => {

                console.warn(
                    "Não foi possível reproduzir o áudio:",
                    error
                );

            });

    }

    else {

        audio.pause();

        audio.currentTime = 0;

        categoria.button.classList.remove(
            "btn-active"
        );

    }


    /* -----------------------------------------------
       Quando terminar
    ------------------------------------------------ */

    audio.onended = () => {

        categoria.button.classList.remove(
            "btn-active"
        );

    };

}


/* =====================================================
   EVENTOS "CONHEÇA"
===================================================== */

if (folhosaAudioLeftButton) {

    folhosaAudioLeftButton.addEventListener(
        "click",
        () => {

            if (activeTrack !== 0) return;

            tocarAudioCategoria(0);

        }
    );

}


if (temperoAudioLeftButton) {

    temperoAudioLeftButton.addEventListener(
        "click",
        () => {

            if (activeTrack !== 1) return;

            tocarAudioCategoria(1);

        }
    );

}


if (frutoAudioLeftButton) {

    frutoAudioLeftButton.addEventListener(
        "click",
        () => {

            if (activeTrack !== 2) return;

            tocarAudioCategoria(2);

        }
    );

}


if (frutaAudioLeftButton) {

    frutaAudioLeftButton.addEventListener(
        "click",
        () => {

            if (activeTrack !== 3) return;

            tocarAudioCategoria(3);

        }
    );

}


if (medicinalAudioLeftButton) {

    medicinalAudioLeftButton.addEventListener(
        "click",
        () => {

            if (activeTrack !== 4) return;

            tocarAudioCategoria(4);

        }
    );

}


if (pancAudioLeftButton) {

    pancAudioLeftButton.addEventListener(
        "click",
        () => {

            if (activeTrack !== 5) return;

            tocarAudioCategoria(5);

        }
    );

}


/* =====================================================
   BOTÃO "ESPÉCIES"
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


                /* Fecha os outros */

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


                /* Abre / fecha o atual */

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
       Começa pela História
    ------------------------------------------------ */

    trocarVideo(
        dados.historia,
        btnHistoria
    );

}


/* =====================================================
   TROCAR VÍDEO WEBM
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


    /* -----------------------------------------------
       Ativa botão
    ------------------------------------------------ */

    if (botao) {

        botao.classList.add(
            "btn-ativo"
        );

    }


    /* -----------------------------------------------
       Para vídeo anterior
    ------------------------------------------------ */

    speciesVideo.pause();


    /* -----------------------------------------------
       Remove vídeo anterior
    ------------------------------------------------ */

    speciesVideo.removeAttribute(
        "src"
    );


    speciesVideo.load();


    /* -----------------------------------------------
       Define vídeo WEBM
    ------------------------------------------------ */

    speciesVideo.src =
        videoSrc;


    /* -----------------------------------------------
       Configurações
    ------------------------------------------------ */

    speciesVideo.preload =
        "metadata";

    speciesVideo.playsInline =
        true;

    speciesVideo.setAttribute(
        "playsinline",
        ""
    );

    speciesVideo.setAttribute(
        "webkit-playsinline",
        ""
    );


    /* -----------------------------------------------
       Carrega novo vídeo
    ------------------------------------------------ */

    speciesVideo.load();


    /* -----------------------------------------------
       Reproduz
    ------------------------------------------------ */

    const promessa =
        speciesVideo.play();


    if (promessa) {

        promessa.catch(
            error => {

                console.warn(
                    "Reprodução do vídeo:",
                    error
                );

            }
        );

    }

}


/* =====================================================
   BOTÃO HISTÓRIA
===================================================== */

if (btnHistoria) {

    btnHistoria.addEventListener(
        "click",
        () => {

            const especie =
                obterEspecieAtual();


            if (!especie) return;


            trocarVideo(
                especie.historia,
                btnHistoria
            );

        }
    );

}


/* =====================================================
   BOTÃO CARACTERÍSTICAS
===================================================== */

if (btnCaracteristicas) {

    btnCaracteristicas.addEventListener(
        "click",
        () => {

            const especie =
                obterEspecieAtual();


            if (!especie) return;


            trocarVideo(
                especie.caracteristicas,
                btnCaracteristicas
            );

        }
    );

}


/* =====================================================
   BOTÃO CURIOSIDADES
===================================================== */

if (btnCuriosidades) {

    btnCuriosidades.addEventListener(
        "click",
        () => {

            const especie =
                obterEspecieAtual();


            if (!especie) return;


            trocarVideo(
                especie.curiosidades,
                btnCuriosidades
            );

        }
    );

}


/* =====================================================
   OBTER ESPÉCIE ATUAL
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
   QUANDO O VÍDEO TERMINA
===================================================== */

if (speciesVideo) {

    speciesVideo.addEventListener(
        "ended",
        () => {

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
    );

}


/* =====================================================
   ERRO NO VÍDEO
===================================================== */

if (speciesVideo) {

    speciesVideo.addEventListener(
        "error",
        () => {

            console.error(
                "Erro ao carregar o vídeo WebM:",
                speciesVideo.currentSrc
            );

        }
    );

}


/* =====================================================
   FECHAR CONTAINER DA ESPÉCIE
===================================================== */

function fecharConteudoEspecie() {

    if (!speciesContent) {
        return;
    }


    /* -----------------------------------------------
       Esconde
    ------------------------------------------------ */

    speciesContent.style.display =
        "none";


    speciesContent.setAttribute(
        "aria-hidden",
        "true"
    );


    /* -----------------------------------------------
       Para e libera vídeo
    ------------------------------------------------ */

    if (speciesVideo) {

        speciesVideo.pause();


        speciesVideo.removeAttribute(
            "src"
        );


        speciesVideo.load();

    }


    /* -----------------------------------------------
       Limpa espécie
    ------------------------------------------------ */

    especieAtual =
        null;


    /* -----------------------------------------------
       Remove estado dos botões
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
   SOM DOS BOTÕES
===================================================== */

document
    .querySelectorAll("button")
    .forEach(
        botao => {

            botao.addEventListener(
                "click",
                tocarClick
            );

        }
    );


/* =====================================================
   TRACKS MINDAR
===================================================== */

const targets =
    document.querySelectorAll(
        "[mindar-image-target]"
    );


targets.forEach(
    (target, index) => {


        /* ---------------------------------------------
           TRACK ENCONTRADA
        ---------------------------------------------- */

        target.addEventListener(
            "targetFound",
            () => {

                activeTrack =
                    index;


                /* Mensagem */

                if (message) {

                    message.classList.add(
                        "hidden"
                    );

                }


                /* Menu */

                if (menuToggleButton) {

                    menuToggleButton.style.display =
                        "block";

                }


                /* Botões */

                mostrarBotoesTrack(
                    index
                );


                /* Fecha dropdown */

                fecharTodosDropdowns();


                /* Fecha espécie anterior */

                fecharConteudoEspecie();

            }
        );


        /* ---------------------------------------------
           TRACK PERDIDA
        ---------------------------------------------- */

        target.addEventListener(
            "targetLost",
            () => {

                if (
                    activeTrack === index
                ) {

                    activeTrack =
                        -1;

                }


                /* Mensagem */

                if (message) {

                    message.classList.remove(
                        "hidden"
                    );

                }


                /* Esconde botões */

                esconderBotoesInteracao();


                /* Fecha dropdowns */

                fecharTodosDropdowns();


                /* Fecha vídeo */

                fecharConteudoEspecie();


                /* Para áudios */

                pararTodosAudios();


                /* Fecha menu */

                menuOpen =
                    false;


                document.body.classList.remove(
                    "menu-open"
                );


                /* Esconde botão menu */

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
   MENU HAMBURGER
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
   CONTADOR DE TRACKS
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


/* =====================================================
   REGISTRAR TRACK
===================================================== */

function registrarTrack(index) {

    if (
        visitedTracks.has(index)
    ) {

        return;

    }


    visitedTracks.add(
        index
    );


    /* Atualiza contador */

    if (progressCount) {

        progressCount.innerText =
            visitedTracks.size;

    }


    /* Libera botão final */

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
   REGISTRAR TRACKS VISITADAS
===================================================== */

targets.forEach(
    (target, index) => {

        target.addEventListener(
            "targetFound",
            () => {

                registrarTrack(
                    index
                );

            }
        );

    }
);


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