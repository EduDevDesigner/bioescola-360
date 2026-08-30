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
DADOS DAS ESPÉCIES
===================================================== */

/*
   Aqui ficará o conteúdo de cada espécie.

   Adicionar uma espécie posteriormente
   não exige criar um novo <video>.
*/

const especies = {

    alface: {

        nome:
            "ALFACE",

        historia: {

            webm:
                "Video/Alface.webm",

            mp4:
                "Video/Alface_Historia.mp4"

        },

        caracteristicas: {

            webm:
                "Video/Alface_Caracteristicas_270.webm",

            mp4:
                "Video/Alface_Caracteristicas.mp4"

        },

        curiosidades: {

            webm:
                "Video/Alface_Curiosidades_270.webm",

            mp4:
                "Video/Alface_Curiosidades.mp4"

        }

    },


    couve: {

        nome:
            "COUVE-MANTEIGA",

        historia: {

            webm:
                "Couve.webm",

            mp4:
                "Couve_Historia.mp4"

        },

        caracteristicas: {

            webm:
                "Couve_Caracteristicas_270.webm",

            mp4:
                "Couve_Caracteristicas.mp4"

        },

        curiosidades: {

            webm:
                "Couve_Curiosidades_270.webm",

            mp4:
                "Couve_Curiosidades.mp4"

        }

    },


    rucula: {

        nome:
            "RÚCULA",

        historia: {

            webm:
                "Rucula.webm",

            mp4:
                "Rucula_Historia.mp4"

        },

        caracteristicas: {

            webm:
                "Rucula_Caracteristicas_270.webm",

            mp4:
                "Rucula_Caracteristicas.mp4"

        },

        curiosidades: {

            webm:
                "Rucula_Curiosidades_270.webm",

            mp4:
                "Rucula_Curiosidades.mp4"

        }

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
ESCONDER BOTÕES DAS TRACKS
===================================================== */

function esconderBotoesInteracao() {

    dropdowns.forEach(
        dropdown => {

            if (
                dropdown.button
            ) {

                dropdown.button.style.display =
                    "none";

            }

        }
    );


    Object.values(categorias)
        .forEach(categoria => {

            if (categoria.button) {

                categoria.button.style.display =
                    "none";

            }

        });

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
        .forEach(audio => {

            audio.pause();

            audio.currentTime = 0;

        });

}


/* =====================================================
CONHEÇA
===================================================== */

function tocarAudioCategoria(
    index
) {

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


    Object.values(categorias)
        .forEach(outro => {

            if (
                outro.audio &&
                outro.audio !== audio
            ) {

                outro.audio.pause();

                outro.audio.currentTime = 0;

            }


            if (
                outro.button &&
                outro.button !== categoria.button
            ) {

                outro.button.classList.remove(
                    "btn-active"
                );

            }

        });


    if (audio.paused) {

        audio.play()
            .catch(() => {});

        categoria.button.classList.add(
            "btn-active"
        );

    }

    else {

        audio.pause();

        audio.currentTime = 0;

        categoria.button.classList.remove(
            "btn-active"
        );

    }


    audio.onended = () => {

        categoria.button.classList.remove(
            "btn-active"
        );

    };

}


/* =====================================================
EVENTOS "CONHEÇA"
===================================================== */

folhosaAudioLeftButton.addEventListener(
    "click",
    () => {

        if (activeTrack !== 0) return;

        tocarAudioCategoria(0);

    }
);


temperoAudioLeftButton.addEventListener(
    "click",
    () => {

        if (activeTrack !== 1) return;

        tocarAudioCategoria(1);

    }
);


frutoAudioLeftButton.addEventListener(
    "click",
    () => {

        if (activeTrack !== 2) return;

        tocarAudioCategoria(2);

    }
);


frutaAudioLeftButton.addEventListener(
    "click",
    () => {

        if (activeTrack !== 3) return;

        tocarAudioCategoria(3);

    }
);


medicinalAudioLeftButton.addEventListener(
    "click",
    () => {

        if (activeTrack !== 4) return;

        tocarAudioCategoria(4);

    }
);


pancAudioLeftButton.addEventListener(
    "click",
    () => {

        if (activeTrack !== 5) return;

        tocarAudioCategoria(5);

    }
);


/* =====================================================
BOTÃO ESPÉCIES
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
    .forEach(button => {


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

    });


/* =====================================================
ABRIR ESPÉCIE
===================================================== */

function abrirEspecie(
    especie
) {

    const dados =
        especies[especie];


    if (!dados) {

        console.warn(
            "Espécie não cadastrada:",
            especie
        );

        return;

    }


    speciesTitle.innerText =
        dados.nome;


    speciesContent.style.display =
        "block";


    speciesContent.setAttribute(
        "aria-hidden",
        "false"
    );


    /*
       Começa automaticamente
       pela HISTÓRIA.
    */

    trocarVideo(
        dados.historia,
        btnHistoria
    );

}


/* =====================================================
TROCAR VÍDEO
===================================================== */

function trocarVideo(
    fontes,
    botao
) {

    if (
        !speciesVideo ||
        !fontes
    ) {

        return;

    }


    /*
       Remove estado ativo
    */

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


    /*
       Ativa botão
    */

    if (botao) {

        botao.classList.add(
            "btn-ativo"
        );

    }


    /*
       Interrompe o vídeo atual
    */

    speciesVideo.pause();


    /*
       Libera o arquivo anterior
       antes de carregar o próximo.

       Isso evita manter vários vídeos
       ocupando memória.
    */

    speciesVideo.removeAttribute(
        "src"
    );


    speciesVideo.load();


    /*
       Define somente o arquivo
       solicitado pelo usuário.
    */

    speciesVideo.src =
        fontes.mp4 || fontes.webm;


    /*
       Configuração
    */

    speciesVideo.preload =
        "none";


    /*
       Carrega/reproduz somente agora.
    */

    speciesVideo.load();


    speciesVideo.play()
        .catch(error => {

            console.log(
                "Reprodução:",
                error
            );

        });

}


/* =====================================================
BOTÃO HISTÓRIA
===================================================== */

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


/* =====================================================
BOTÃO CARACTERÍSTICAS
===================================================== */

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


/* =====================================================
BOTÃO CURIOSIDADES
===================================================== */

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


/* =====================================================
ESPÉCIE ATUAL
===================================================== */

let especieAtual =
    null;


/*
   Guardamos a espécie selecionada.
*/

function selecionarEspecie(
    especie
) {

    especieAtual =
        especie;

}


function obterEspecieAtual() {

    if (!especieAtual) {

        return null;

    }


    return especies[
        especieAtual
    ];

}


/*
   Substitui a função abrirEspecie
   para também armazenar a seleção.
*/

function abrirEspecie(
    especie
) {

    const dados =
        especies[especie];


    if (!dados) {

        console.warn(
            "Espécie não cadastrada:",
            especie
        );

        return;

    }


    selecionarEspecie(
        especie
    );


    speciesTitle.innerText =
        dados.nome;


    speciesContent.style.display =
        "block";


    speciesContent.setAttribute(
        "aria-hidden",
        "false"
    );


    trocarVideo(
        dados.historia,
        btnHistoria
    );

}


/* =====================================================
QUANDO O VÍDEO TERMINA
===================================================== */

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


/* =====================================================
FECHAR CONTAINER
===================================================== */

function fecharConteudoEspecie() {

    if (!speciesContent) return;


    speciesContent.style.display =
        "none";


    speciesContent.setAttribute(
        "aria-hidden",
        "true"
    );


    if (speciesVideo) {

        speciesVideo.pause();

        /*
           Remove a fonte para liberar
           o recurso do vídeo.
        */

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


        target.addEventListener(
            "targetFound",
            () => {

                activeTrack =
                    index;


                if (message) {

                    message.classList.add(
                        "hidden"
                    );

                }


                if (menuToggleButton) {

                    menuToggleButton.style.display =
                        "block";

                }


                mostrarBotoesTrack(
                    index
                );


                fecharTodosDropdowns();


                fecharConteudoEspecie();

            }
        );


        target.addEventListener(
            "targetLost",
            () => {

                if (
                    activeTrack === index
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
REGISTRAR TRACK
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