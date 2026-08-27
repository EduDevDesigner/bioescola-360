const message = document.getElementById("track-message");


/* =====================================================
SOM CLICK
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

const audioVeloci1 =
    document.getElementById("audioVeloci1");

const audioVeloci2 =
    document.getElementById("audioVeloci2");

const audioVelociRoar =
    document.getElementById("audioVelociRoar");

const velociGroup =
    document.getElementById("velociGroup");


/* =====================================================
TRACK 1 — TEMPEROS E ERVAS AROMÁTICAS
===================================================== */

const temperoAudioLeftButton =
    document.getElementById("temperoAudioLeftButton");

const temperoAudioRightButton =
    document.getElementById("temperoAudioRightButton");

const audioFauna1 =
    document.getElementById("audioFauna1");

const audioFauna2 =
    document.getElementById("audioFauna2");

const audioElefante =
    document.getElementById("audioElefante");

const faunaGroup =
    document.getElementById("faunaGroup");

const mamuteModel =
    document.getElementById("mamuteModel");


/* =====================================================
TRACK 2 — FRUTOS
===================================================== */

const frutoAudioLeftButton =
    document.getElementById("frutoAudioLeftButton");

const frutoAudioRightButton =
    document.getElementById("frutoAudioRightButton");

const audioVenus1 =
    document.getElementById("audioVenus1");

const audioVenus2 =
    document.getElementById("audioVenus2");

const venusGroup =
    document.getElementById("venusGroup");


/* =====================================================
TRACK 3 — FRUTAS
===================================================== */

const frutaAudioLeftButton =
    document.getElementById("frutaAudioLeftButton");

const frutaAudioRightButton =
    document.getElementById("frutaAudioRightButton");

const audioVogel1 =
    document.getElementById("audioVogel1");

const audioVogel2 =
    document.getElementById("audioVogel2");

const vogelherdGroup =
    document.getElementById("vogelherdGroup");


/* =====================================================
TRACK 4 — MEDICINAIS E AROMÁTICAS
===================================================== */

const medicinalAudioLeftButton =
    document.getElementById("medicinalAudioLeftButton");

const medicinalAudioRightButton =
    document.getElementById("medicinalAudioRightButton");

const audioColombo1 =
    document.getElementById("audioColombo1");

const audioColombo2 =
    document.getElementById("audioColombo2");

const colomboVideo =
    document.querySelector("#colomboVideo");


/* =====================================================
TRACK 5 — PANC
===================================================== */

const pancAudioLeftButton =
    document.getElementById("pancAudioLeftButton");

const pancAudioRightButton =
    document.getElementById("pancAudioRightButton");

const audioMona1 =
    document.getElementById("audioMona1");

const audioMona2 =
    document.getElementById("audioMona2");

const monalisaVideo =
    document.querySelector("#monalisaVideo");


/* =====================================================
MENU HAMBURGER
===================================================== */

const menuToggleButton =
    document.getElementById("menuToggleButton");

let menuOpen = false;


/* =====================================================
VARIÁVEIS
===================================================== */

let activeTrack = -1;

let folhosaActive = false;
let temperoActive = false;
let frutoActive = false;
let frutaActive = false;
let medicinalActive = false;
let pancActive = false;


/* =====================================================
FUNÇÕES DOS BOTÕES
===================================================== */

function ativarBotao(botao) {

    if (!botao) return;

    botao.classList.add("btn-active");

}


function desativarBotao(botao) {

    if (!botao) return;

    botao.classList.remove("btn-active");

}


/* =====================================================
RESET BOTÕES
===================================================== */

function resetarBotoesTrack(
    botaoEsquerdo,
    botaoDireito
) {

    desativarBotao(botaoEsquerdo);
    desativarBotao(botaoDireito);

}


/* =====================================================
CONTROLE DOS ÁUDIOS
===================================================== */

function controlarAudio(
    audioAtual,
    audioOposto,
    botaoAtual,
    botaoOposto
) {

    if (!audioAtual || !audioOposto) return;


    audioOposto.pause();

    audioOposto.currentTime = 0;

    desativarBotao(botaoOposto);


    if (audioAtual.paused) {

        audioAtual.play().catch(() => {});

        ativarBotao(botaoAtual);

    }

    else {

        audioAtual.pause();

        audioAtual.currentTime = 0;

        desativarBotao(botaoAtual);

    }


    audioAtual.onended = function () {

        desativarBotao(botaoAtual);

    };

}


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
ESCONDER BOTÕES DE INTERAÇÃO
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

    /* Primeiro esconde todos */

    esconderBotoesInteracao();


    /* =============================================
    TRACK 0 — FOLHOSAS
    ============================================= */

    if (index === 0) {

        if (folhosaAudioLeftButton) {

            folhosaAudioLeftButton.style.display = "block";

        }

        if (folhosaAudioRightButton) {

            folhosaAudioRightButton.style.display = "block";

        }

    }


    /* =============================================
    TRACK 1 — TEMPEROS
    ============================================= */

    if (index === 1) {

        if (temperoAudioLeftButton) {

            temperoAudioLeftButton.style.display = "block";

        }

        if (temperoAudioRightButton) {

            temperoAudioRightButton.style.display = "block";

        }

    }


    /* =============================================
    TRACK 2 — FRUTOS
    ============================================= */

    if (index === 2) {

        if (frutoAudioLeftButton) {

            frutoAudioLeftButton.style.display = "block";

        }

        if (frutoAudioRightButton) {

            frutoAudioRightButton.style.display = "block";

        }

    }


    /* =============================================
    TRACK 3 — FRUTAS
    ============================================= */

    if (index === 3) {

        if (frutaAudioLeftButton) {

            frutaAudioLeftButton.style.display = "block";

        }

        if (frutaAudioRightButton) {

            frutaAudioRightButton.style.display = "block";

        }

    }


    /* =============================================
    TRACK 4 — MEDICINAIS
    ============================================= */

    if (index === 4) {

        if (medicinalAudioLeftButton) {

            medicinalAudioLeftButton.style.display = "block";

        }

        if (medicinalAudioRightButton) {

            medicinalAudioRightButton.style.display = "block";

        }

    }


    /* =============================================
    TRACK 5 — PANC
    ============================================= */

    if (index === 5) {

        if (pancAudioLeftButton) {

            pancAudioLeftButton.style.display = "block";

        }

        if (pancAudioRightButton) {

            pancAudioRightButton.style.display = "block";

        }

    }

}


/* =====================================================
SOM EM TODOS OS BOTÕES
===================================================== */

document.querySelectorAll("button").forEach(botao => {

    botao.addEventListener("click", () => {

        tocarClick();

    });

});


/* =====================================================
DROPDOWN — ESPÉCIES
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
ABRIR DROPDOWN
===================================================== */

dropdowns.forEach(dropdown => {

    if (!dropdown.button || !dropdown.menu) return;


    dropdown.button.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();


            /* =========================================
            FECHA OS OUTROS DROPDOWNS
            ========================================= */

            dropdowns.forEach(outro => {

                if (outro !== dropdown && outro.menu) {

                    outro.menu.classList.remove("open");

                }

            });


            /* =========================================
            ABRE / FECHA O DROPDOWN ATUAL
            ========================================= */

            dropdown.menu.classList.toggle("open");

        }
    );

});


/* =====================================================
FECHAR DROPDOWN AO CLICAR FORA
===================================================== */

document.addEventListener("click", () => {

    dropdowns.forEach(dropdown => {

        if (dropdown.menu) {

            dropdown.menu.classList.remove("open");

        }

    });

});


/* =====================================================
TARGETS MINDAR
===================================================== */

const targets =
    document.querySelectorAll(
        "[mindar-image-target]"
    );


targets.forEach((target, index) => {


    /* =================================================
    TARGET ENCONTRADO
    ================================================= */

    target.addEventListener(
        "targetFound",
        () => {


            /* =========================================
            REGISTRA O TRACK
            ========================================= */

            registrarTrack(index);


            activeTrack = index;


            /* =========================================
            ESCONDE MENSAGEM DE TRACKING
            ========================================= */

            if (message) {

                message.classList.add("hidden");

            }


            /* =========================================
            MOSTRA MENU HAMBURGER
            ========================================= */

            if (menuToggleButton) {

                menuToggleButton.style.display = "block";

            }


            /* =========================================
            MOSTRA OS BOTÕES DA TRACK
            ========================================= */

            mostrarBotoesTrack(index);


            /* =========================================
            FECHA TODOS OS DROPDOWNS
            ========================================= */

            dropdowns.forEach(dropdown => {

                if (dropdown.menu) {

                    dropdown.menu.classList.remove("open");

                }

            });

        }
    );


    /* =================================================
    TARGET PERDIDO
    ================================================= */

    target.addEventListener(
        "targetLost",
        () => {


            activeTrack = -1;


            /* =========================================
            MOSTRA MENSAGEM DE TRACKING
            ========================================= */

            if (message) {

                message.classList.remove("hidden");

            }


            /* =========================================
            ESCONDE BOTÕES
            ========================================= */

            esconderBotoesInteracao();


            /* =========================================
            FECHA DROPDOWNS
            ========================================= */

            dropdowns.forEach(dropdown => {

                if (dropdown.menu) {

                    dropdown.menu.classList.remove("open");

                }

            });


            /* =========================================
            FECHA MENU HAMBURGER
            ========================================= */

            menuOpen = false;


            document.body.classList.remove(
                "menu-open"
            );


            if (menuToggleButton) {

                menuToggleButton.innerHTML = "☰";

                menuToggleButton.style.display = "none";

            }


            /* =========================================
            RESET ESTADOS
            ========================================= */

            folhosaActive = false;
            temperoActive = false;
            frutoActive = false;
            frutaActive = false;
            medicinalActive = false;
            pancActive = false;


            /* =========================================
            RESET BOTÕES
            ========================================= */

            resetarBotoesTrack(
                folhosaAudioLeftButton,
                folhosaAudioRightButton
            );


            resetarBotoesTrack(
                temperoAudioLeftButton,
                temperoAudioRightButton
            );


            resetarBotoesTrack(
                frutoAudioLeftButton,
                frutoAudioRightButton
            );


            resetarBotoesTrack(
                frutaAudioLeftButton,
                frutaAudioRightButton
            );


            resetarBotoesTrack(
                medicinalAudioLeftButton,
                medicinalAudioRightButton
            );


            resetarBotoesTrack(
                pancAudioLeftButton,
                pancAudioRightButton
            );


            /* =========================================
            PARA TODOS OS ÁUDIOS
            ========================================= */

            document
                .querySelectorAll("audio")
                .forEach(audio => {

                    audio.pause();

                    audio.currentTime = 0;

                });

        }
    );

});


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

                menuToggleButton.innerHTML = "✕";

            }

            else {

                document.body.classList.remove(
                    "menu-open"
                );

                menuToggleButton.innerHTML = "☰";

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


            controlarAudio(
                audioVeloci1,
                audioVeloci2,
                folhosaAudioLeftButton,
                folhosaAudioRightButton
            );

        }
    );

}


if (folhosaAudioRightButton) {

    folhosaAudioRightButton.addEventListener(
        "click",
        () => {

            if (activeTrack !== 0) return;


            controlarAudio(
                audioVeloci2,
                audioVeloci1,
                folhosaAudioRightButton,
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


            controlarAudio(
                audioFauna1,
                audioFauna2,
                temperoAudioLeftButton,
                temperoAudioRightButton
            );

        }
    );

}


if (temperoAudioRightButton) {

    temperoAudioRightButton.addEventListener(
        "click",
        () => {

            if (activeTrack !== 1) return;


            controlarAudio(
                audioFauna2,
                audioFauna1,
                temperoAudioRightButton,
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


            controlarAudio(
                audioVenus1,
                audioVenus2,
                frutoAudioLeftButton,
                frutoAudioRightButton
            );

        }
    );

}


if (frutoAudioRightButton) {

    frutoAudioRightButton.addEventListener(
        "click",
        () => {

            if (activeTrack !== 2) return;


            controlarAudio(
                audioVenus2,
                audioVenus1,
                frutoAudioRightButton,
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


            controlarAudio(
                audioVogel1,
                audioVogel2,
                frutaAudioLeftButton,
                frutaAudioRightButton
            );

        }
    );

}


if (frutaAudioRightButton) {

    frutaAudioRightButton.addEventListener(
        "click",
        () => {

            if (activeTrack !== 3) return;


            controlarAudio(
                audioVogel2,
                audioVogel1,
                frutaAudioRightButton,
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


            controlarAudio(
                audioColombo1,
                audioColombo2,
                medicinalAudioLeftButton,
                medicinalAudioRightButton
            );

        }
    );

}


if (medicinalAudioRightButton) {

    medicinalAudioRightButton.addEventListener(
        "click",
        () => {

            if (activeTrack !== 4) return;


            controlarAudio(
                audioColombo2,
                audioColombo1,
                medicinalAudioRightButton,
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


            controlarAudio(
                audioMona1,
                audioMona2,
                pancAudioLeftButton,
                pancAudioRightButton
            );

        }
    );

}


if (pancAudioRightButton) {

    pancAudioRightButton.addEventListener(
        "click",
        () => {

            if (activeTrack !== 5) return;


            controlarAudio(
                audioMona2,
                audioMona1,
                pancAudioRightButton,
                pancAudioLeftButton
            );

        }
    );

}


/* =====================================================
CONTADOR DE TRACKS
===================================================== */

const progressCount =
    document.getElementById("progressCount");


const finalButtonTop =
    document.getElementById("finalButtonTop");


const visitedTracks =
    new Set();


const totalTracks = 6;


function registrarTrack(index) {


    if (visitedTracks.has(index)) {

        return;

    }


    visitedTracks.add(index);


    if (progressCount) {

        progressCount.innerText =
            visitedTracks.size;

    }


    if (
        visitedTracks.size >= totalTracks
    ) {

        mostrarMensagemFinal();

    }

}


function mostrarMensagemFinal() {

    if (finalButtonTop) {

        finalButtonTop.style.display =
            "block";

    }

}


/* =====================================================
BOTÃO DO QUIZ
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