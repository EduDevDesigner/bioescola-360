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
    document.getElementById("speciesContent");

const speciesTitle =
    document.getElementById("speciesTitle");

const speciesVideo =
    document.getElementById("speciesVideo");

const speciesWebm =
    document.getElementById("speciesWebm");

const speciesMp4 =
    document.getElementById("speciesMp4");


/* =====================================================
BOTÕES DOS VÍDEOS
===================================================== */

const btnHistoria =
    document.getElementById("btnHistoria");

const btnCaracteristicas =
    document.getElementById("btnCaracteristicas");

const btnCuriosidades =
    document.getElementById("btnCuriosidades");


/* =====================================================
ESPÉCIE ATUAL
===================================================== */

let especieAtual = null;


/* =====================================================
BANCO DE ESPÉCIES
===================================================== */

const especies = {

    alface: {

        nome: "ALFACE",

        historia: {

            webm: "Video/Alface.webm",

            mp4: "Video/Alface_Historia.mp4"

        },

        caracteristicas: {

            webm: "Video/Alface_Caracteristicas_270.webm",

            mp4: "Video/Alface_Caracteristicas.mp4"

        },

        curiosidades: {

            webm: "Video/Alface_Curiosidades_270.webm",

            mp4: "Video/Alface_Curiosidades.mp4"

        }

    },


    couve: {

        nome: "COUVE-MANTEIGA",

        historia: {

            webm: "Video/Couve.webm",

            mp4: "Video/Couve_Historia.mp4"

        },

        caracteristicas: {

            webm: "Video/Couve_Caracteristicas_270.webm",

            mp4: "Video/Couve_Caracteristicas.mp4"

        },

        curiosidades: {

            webm: "Video/Couve_Curiosidades_270.webm",

            mp4: "Video/Couve_Curiosidades.mp4"

        }

    },


    rucula: {

        nome: "RÚCULA",

        historia: {

            webm: "Video/Rucula.webm",

            mp4: "Video/Rucula_Historia.mp4"

        },

        caracteristicas: {

            webm: "Video/Rucula_Caracteristicas_270.webm",

            mp4: "Video/Rucula_Caracteristicas.mp4"

        },

        curiosidades: {

            webm: "Video/Rucula_Curiosidades_270.webm",

            mp4: "Video/Rucula_Curiosidades.mp4"

        }

    }

};


/* =====================================================
ABRIR ESPÉCIE
===================================================== */

function abrirEspecie(especie) {

    const dados = especies[especie];

    if (!dados) {

        console.warn(
            "Espécie não cadastrada:",
            especie
        );

        return;

    }


    especieAtual = especie;


    speciesTitle.innerText =
        dados.nome;


    speciesContent.style.display =
        "block";

    speciesContent.setAttribute(
        "aria-hidden",
        "false"
    );


    /*
       Começa pela História
    */

    trocarVideo(
        dados.historia,
        btnHistoria
    );

}


/* =====================================================
TROCAR VÍDEO
===================================================== */

function trocarVideo(fontes, botao) {

    if (!fontes) return;


    /*
       Para o vídeo atual
    */

    speciesVideo.pause();


    /*
       Remove o estado ativo
       dos três botões
    */

    document
        .querySelectorAll(
            ".species-video-buttons button"
        )
        .forEach(btn => {

            btn.classList.remove(
                "btn-ativo"
            );

        });


    /*
       Ativa o botão escolhido
    */

    if (botao) {

        botao.classList.add(
            "btn-ativo"
        );

    }


    /*
       Atualiza as duas fontes
    */

    speciesWebm.src =
        fontes.webm;

    speciesMp4.src =
        fontes.mp4;


    /*
       Recarrega o mesmo player
    */

    speciesVideo.load();


    /*
       Reproduz
    */

    speciesVideo.play()
        .catch(error => {

            console.log(
                "O navegador bloqueou a reprodução:",
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

        if (!especieAtual) return;

        trocarVideo(
            especies[especieAtual].historia,
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

        if (!especieAtual) return;

        trocarVideo(
            especies[especieAtual].caracteristicas,
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

        if (!especieAtual) return;

        trocarVideo(
            especies[especieAtual].curiosidades,
            btnCuriosidades
        );

    }
);


/* =====================================================
QUANDO O VÍDEO TERMINAR
===================================================== */

speciesVideo.addEventListener(
    "ended",
    () => {

        document
            .querySelectorAll(
                ".species-video-buttons button"
            )
            .forEach(btn => {

                btn.classList.remove(
                    "btn-ativo"
                );

            });

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
           Limpa as fontes do player.
           Isso ajuda a liberar o recurso.
        */

        speciesWebm.src = "";

        speciesMp4.src = "";

        speciesVideo.load();

    }


    especieAtual = null;


    document
        .querySelectorAll(
            ".species-video-buttons button"
        )
        .forEach(btn => {

            btn.classList.remove(
                "btn-ativo"
            );

        });

}