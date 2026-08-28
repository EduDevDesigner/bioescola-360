const message = document.getElementById("track-message");


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
TRACK 0 — FOLHOSAS
===================================================== */

const folhosaAudioLeftButton =
    document.getElementById("folhosaAudioLeftButton");

const folhosaAudioRightButton =
    document.getElementById("folhosaAudioRightButton");

const audioFolhosas =
    document.getElementById("audioFolhosas");


/* =====================================================
TRACK 1 — TEMPEROS E ERVAS AROMÁTICAS
===================================================== */

const temperoAudioLeftButton =
    document.getElementById("temperoAudioLeftButton");

const temperoAudioRightButton =
    document.getElementById("temperoAudioRightButton");

const audioTemperos =
    document.getElementById("audioTemperos");


/* =====================================================
TRACK 2 — FRUTOS
===================================================== */

const frutoAudioLeftButton =
    document.getElementById("frutoAudioLeftButton");

const frutoAudioRightButton =
    document.getElementById("frutoAudioRightButton");

const audioFrutos =
    document.getElementById("audioFrutos");


/* =====================================================
TRACK 3 — FRUTAS
===================================================== */

const frutaAudioLeftButton =
    document.getElementById("frutaAudioLeftButton");

const frutaAudioRightButton =
    document.getElementById("frutaAudioRightButton");

const audioFrutas =
    document.getElementById("audioFrutas");


/* =====================================================
TRACK 4 — MEDICINAIS E AROMÁTICAS
===================================================== */

const medicinalAudioLeftButton =
    document.getElementById("medicinalAudioLeftButton");

const medicinalAudioRightButton =
    document.getElementById("medicinalAudioRightButton");

const audioMedicinais =
    document.getElementById("audioMedicinais");


/* =====================================================
TRACK 5 — PANC
===================================================== */

const pancAudioLeftButton =
    document.getElementById("pancAudioLeftButton");

const pancAudioRightButton =
    document.getElementById("pancAudioRightButton");

const audioPanc =
    document.getElementById("audioPanc");


/* =====================================================
MENU HAMBURGER
===================================================== */

const menuToggleButton =
    document.getElementById("menuToggleButton");

let menuOpen = false;


/* =====================================================
TRACK ATIVA
===================================================== */

let activeTrack = -1;


/* =====================================================
DROPDOWNS
===================================================== */

const dropdowns = [

    {
        button: folhosaAudioRightButton,
        menu: document.getElementById(
            "folhosaSpeciesMenu"
        )
    },

    {
        button: temperoAudioRightButton,
        menu: document.getElementById(
            "temperoSpeciesMenu"
        )
    },

    {
        button: frutoAudioRightButton,
        menu: document.getElementById(
            "frutoSpeciesMenu"
        )
    },

    {
        button: frutaAudioRightButton,
        menu: document.getElementById(
            "frutaSpeciesMenu"
        )
    },

    {
        button: medicinalAudioRightButton,
        menu: document.getElementById(
            "medicinalSpeciesMenu"
        )
    },

    {
        button: pancAudioRightButton,
        menu: document.getElementById(
            "pancSpeciesMenu"
        )
    }

];


/* =====================================================
TODOS OS BOTÕES DE INTERAÇÃO
===================================================== */

const interactionButtons = [

    folhosaAudioLeftButton,
    folhosaAudioRightButton,

    temperoAudioLeftButton,
    temperoAudioRightButton,

    frutoAudioLeftButton,
    frutoAudioRightButton,

    frutaAudioLeftButton,
    frutaAudioRightButton,

    medicinalAudioLeftButton,
    medicinalAudioRightButton,

    pancAudioLeftButton,
    pancAudioRightButton

];


/* =====================================================
ESCONDER BOTÕES
===================================================== */

function esconderBotoesInteracao() {

    interactionButtons.forEach(botao => {

        if (!botao) return;

        botao.style.display = "none";

    });

}


/* =====================================================
MOSTRAR BOTÕES DA TRACK
===================================================== */

function mostrarBotoesTrack(index) {

    esconderBotoesInteracao();


    /* TRACK 0 — FOLHOSAS */

    if (index === 0) {

        folhosaAudioLeftButton.style.display =
            "block";

        folhosaAudioRightButton.style.display =
            "block";

    }


    /* TRACK 1 — TEMPEROS */

    if (index === 1) {

        temperoAudioLeftButton.style.display =
            "block";

        temperoAudioRightButton.style.display =
            "block";

    }


    /* TRACK 2 — FRUTOS */

    if (index === 2) {

        frutoAudioLeftButton.style.display =
            "block";

        frutoAudioRightButton.style.display =
            "block";

    }


    /* TRACK 3 — FRUTAS */

    if (index === 3) {

        frutaAudioLeftButton.style.display =
            "block";

        frutaAudioRightButton.style.display =
            "block";

    }


    /* TRACK 4 — MEDICINAIS */

    if (index === 4) {

        medicinalAudioLeftButton.style.display =
            "block";

        medicinalAudioRightButton.style.display =
            "block";

    }


    /* TRACK 5 — PANC */

    if (index === 5) {

        pancAudioLeftButton.style.display =
            "block";

        pancAudioRightButton.style.display =
            "block";

    }

}


/* =====================================================
DESATIVAR BOTÃO
===================================================== */

function desativarBotao(botao) {

    if (!botao) return;

    botao.classList.remove("btn-active");

}


/* =====================================================
ATIVAR BOTÃO
===================================================== */

function ativarBotao(botao) {

    if (!botao) return;

    botao.classList.add("btn-active");

}


/* =====================================================
TOCAR / PARAR ÁUDIO DO BOTÃO CONHEÇA
===================================================== */

function controlarAudioConheca(
    audio,
    botao
) {

    if (!audio || !botao) return;


    /*
    Para todos os outros áudios
    */

    document.querySelectorAll("audio").forEach(
        outroAudio => {

            if (
                outroAudio !== audio &&
                outroAudio.id !== "clickSound"
            ) {

                outroAudio.pause();
                outroAudio.currentTime = 0;

            }

        }
    );


    /*
    Se estiver parado, toca
    */

    if (audio.paused) {

        audio.play().catch(() => {});

        ativarBotao(botao);

    }

    /*
    Se estiver tocando, pausa
    */

    else {

        audio.pause();

        audio.currentTime = 0;

        desativarBotao(botao);

    }


    /*
    Ao terminar, remove o destaque
    */

    audio.onended = function () {

        desativarBotao(botao);

    };

}


/* =====================================================
SOM EM TODOS OS BOTÕES
===================================================== */

document.querySelectorAll("button").forEach(
    botao => {

        botao.addEventListener(
            "click",
            () => {

                tocarClick();

            }
        );

    }
);


/* =====================================================
TARGETS MINDAR
===================================================== */

const targets =
    document.querySelectorAll(
        "[mindar-image-target]"
    );


targets.forEach(
    (target, index) => {


        /* =============================================
        TARGET ENCONTRADO
        ============================================= */

        target.addEventListener(
            "targetFound",
            () => {


                registrarTrack(index);


                activeTrack = index;


                /*
                Esconde mensagem
                */

                if (message) {

                    message.classList.add(
                        "hidden"
                    );

                }


                /*
                Mostra menu
                */

                if (menuToggleButton) {

                    menuToggleButton.style.display =
                        "block";

                }


                /*
                Mostra os dois botões
                */

                mostrarBotoesTrack(index);


                /*
                Fecha dropdowns
                */

                fecharTodosDropdowns();

            }
        );


        /* =============================================
        TARGET PERDIDO
        ============================================= */

        target.addEventListener(
            "targetLost",
            () => {


                activeTrack = -1;


                /*
                Mostra mensagem
                */

                if (message) {

                    message.classList.remove(
                        "hidden"
                    );

                }


                /*
                Esconde botões
                */

                esconderBotoesInteracao();


                /*
                Fecha dropdowns
                */

                fecharTodosDropdowns();


                /*
                Fecha menu
                */

                menuOpen = false;


                document.body.classList.remove(
                    "menu-open"
                );


                if (menuToggleButton) {

                    menuToggleButton.innerHTML =
                        "☰";

                    menuToggleButton.style.display =
                        "none";

                }


                /*
                Para todos os áudios
                */

                pararTodosAudios();


                /*
                Remove iluminação dos botões
                */

                interactionButtons.forEach(
                    botao => {

                        desativarBotao(botao);

                    }
                );

            }
        );

    }
);


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
FECHAR TODOS OS DROPDOWNS
===================================================== */

function fecharTodosDropdowns() {

    dropdowns.forEach(dropdown => {

        if (dropdown.menu) {

            dropdown.menu.classList.remove(
                "open"
            );

        }

    });

}


/* =====================================================
MENU HAMBURGER
===================================================== */

if (menuToggleButton) {

    menuToggleButton.addEventListener(
        "click",
        () => {


            menuOpen = !menuOpen;


            if (menuOpen) {

                document.body.classList.add(
                    "menu-open"
                );

                menuToggleButton.innerHTML =
                    "✕";


                /*
                O menu sanduíche não esconde
                os botões das tracks.
                */

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
TRACK 0 — FOLHOSAS
===================================================== */

if (folhosaAudioLeftButton) {

    folhosaAudioLeftButton.addEventListener(
        "click",
        () => {


            if (activeTrack !== 0) return;


            controlarAudioConheca(
                audioFolhosas,
                folhosaAudioLeftButton
            );

        }
    );

}


/* =====================================================
TRACK 1 — TEMPEROS
===================================================== */

if (temperoAudioLeftButton) {

    temperoAudioLeftButton.addEventListener(
        "click",
        () => {


            if (activeTrack !== 1) return;


            controlarAudioConheca(
                audioTemperos,
                temperoAudioLeftButton
            );

        }
    );

}


/* =====================================================
TRACK 2 — FRUTOS
===================================================== */

if (frutoAudioLeftButton) {

    frutoAudioLeftButton.addEventListener(
        "click",
        () => {


            if (activeTrack !== 2) return;


            controlarAudioConheca(
                audioFrutos,
                frutoAudioLeftButton
            );

        }
    );

}


/* =====================================================
TRACK 3 — FRUTAS
===================================================== */

if (frutaAudioLeftButton) {

    frutaAudioLeftButton.addEventListener(
        "click",
        () => {


            if (activeTrack !== 3) return;


            controlarAudioConheca(
                audioFrutas,
                frutaAudioLeftButton
            );

        }
    );

}


/* =====================================================
TRACK 4 — MEDICINAIS
===================================================== */

if (medicinalAudioLeftButton) {

    medicinalAudioLeftButton.addEventListener(
        "click",
        () => {


            if (activeTrack !== 4) return;


            controlarAudioConheca(
                audioMedicinais,
                medicinalAudioLeftButton
            );

        }
    );

}


/* =====================================================
TRACK 5 — PANC
===================================================== */

if (pancAudioLeftButton) {

    pancAudioLeftButton.addEventListener(
        "click",
        () => {


            if (activeTrack !== 5) return;


            controlarAudioConheca(
                audioPanc,
                pancAudioLeftButton
            );

        }
    );

}


/* =====================================================
DROPDOWN — ESPÉCIES
===================================================== */

dropdowns.forEach(
    (dropdown, index) => {


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


                /*
                Garante que apenas a track ativa
                possa abrir seu dropdown.
                */

                if (
                    activeTrack !== index
                ) {

                    return;

                }


                /*
                Fecha os outros dropdowns
                */

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


                /*
                Abre ou fecha o dropdown atual
                */

                dropdown.menu.classList.toggle(
                    "open"
                );

            }
        );

    }
);


/* =====================================================
IMPEDIR FECHAMENTO AO CLICAR NO DROPDOWN
===================================================== */

document
    .querySelectorAll(
        ".species-dropdown"
    )
    .forEach(menu => {

        menu.addEventListener(
            "click",
            event => {

                event.stopPropagation();

            }
        );

    });


/* =====================================================
FECHAR DROPDOWN AO CLICAR FORA
===================================================== */

document.addEventListener(
    "click",
    () => {

        fecharTodosDropdowns();

    }
);


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


const totalTracks = 6;


function registrarTrack(index) {


    if (
        visitedTracks.has(index)
    ) {

        return;

    }


    visitedTracks.add(index);


    if (progressCount) {

        progressCount.innerText =
            visitedTracks.size;

    }


    if (
        visitedTracks.size >=
        totalTracks
    ) {

        mostrarMensagemFinal();

    }

}


/* =====================================================
BOTÃO FINAL
===================================================== */

function mostrarMensagemFinal() {

    if (finalButtonTop) {

        finalButtonTop.style.display =
            "block";

    }

}

if (finalButtonTop) {

    finalButtonTop.addEventListener(
        "click",
        () => {

            window.location.href =
                "quiz.html";

        }
    );

}