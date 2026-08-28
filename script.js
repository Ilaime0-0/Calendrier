/* ══════════════════════════════════════════════
   CALENDRIER ACADÉMIQUE
   ══════════════════════════════════════════════ */


const calendarDays =
    document.getElementById("calendarDays");

const monthYear =
    document.getElementById("monthYear");

const prevMonth =
    document.getElementById("prevMonth");

const nextMonth =
    document.getElementById("nextMonth");


let currentDate =
    new Date(2026, 7, 1);



/* ══════════════════════════════════════════════
   TES ÉVÉNEMENTS
   ══════════════════════════════════════════════ */

const events = {


    /* ───────────────
       AOÛT
       ─────────────── */

    "2026-08-30": [

        {
            title: "Math & statistiques",
            time: "Cours",
            location: "",
            type: "study"
        }

    ],



    "2026-08-31": [

        {
            title:
                "ECON 60801 — Séminaire de macroéconomie internationale",
            time:
                "8h30 – 11h30",
            location:
                "LGR, Accra",
            type:
                "econ60801"
        }

    ],



    /* ───────────────
       SEPTEMBRE
       ─────────────── */


    "2026-09-01": [

        {
            title:
                "ECON 60803",
            time:
                "12h00 – 15h00",
            location:
                "Decelles, Forestville",
            type:
                "econ60803"
        }

    ],



    "2026-09-02": [

        {
            title:
                "ECON 60804",
            time:
                "8h30 – 11h30",
            location:
                "LGR, MNP - LGR",
            type:
                "econ60804"
        }

    ],



    "2026-09-04": [

        {
            title:
                "Test obligatoire",
            time:
                "10h00 – 11h00",
            location:
                "",
            type:
                "exam"
        }

    ],



    "2026-09-08": [

        {
            title:
                "ECON 60803",
            time:
                "12h00 – 15h00",
            location:
                "LGR, Fonds Cogeco - LGR",
            type:
                "econ60803"
        }

    ],



    "2026-09-09": [

        {
            title:
                "ECON 60804",
            time:
                "8h30 – 11h30",
            location:
                "LGR, MNP - LGR",
            type:
                "econ60804"
        }

    ],



    "2026-09-15": [

        {
            title:
                "ECON 60803",
            time:
                "12h00 – 15h00",
            location:
                "LGR, Fonds Cogeco - LGR",
            type:
                "econ60803"
        }

    ],



    "2026-09-16": [

        {
            title:
                "ECON 60804",
            time:
                "8h30 – 11h30",
            location:
                "LGR, MNP - LGR",
            type:
                "econ60804"
        }

    ],



    "2026-09-21": [

        {
            title:
                "ECON 60801",
            time:
                "8h30 – 11h30",
            location:
                "LGR, Accra",
            type:
                "econ60801"
        }

    ],



    "2026-09-22": [

        {
            title:
                "ECON 60803",
            time:
                "12h00 – 15h00",
            location:
                "LGR, Fonds Cogeco - LGR",
            type:
                "econ60803"
        }

    ],



    "2026-09-23": [

        {
            title:
                "ECON 60804",
            time:
                "8h30 – 11h30",
            location:
                "LGR, MNP - LGR",
            type:
                "econ60804"
        }

    ],



    "2026-09-25": [

        {
            title:
                "ECON 60801",
            time:
                "12h00 – 15h00",
            location:
                "LGR, KPMG - LGR",
            type:
                "econ60801"
        }

    ],



    "2026-09-28": [

        {
            title:
                "ECON 60801",
            time:
                "8h30 – 11h30",
            location:
                "LGR, Accra",
            type:
                "econ60801"
        }

    ],



    "2026-09-29": [

        {
            title:
                "ECON 60803",
            time:
                "12h00 – 15h00",
            location:
                "Decelles, Forestville",
            type:
                "econ60803"
        }

    ],



    /* ───────────────
       OCTOBRE
       ─────────────── */


    "2026-10-06": [

        {
            title:
                "ECON 60801",
            time:
                "8h30 – 11h30",
            location:
                "LGR, Accra",
            type:
                "econ60801"
        }

    ],



    "2026-10-07": [

        {
            title:
                "ECON 60804",
            time:
                "8h30 – 11h30",
            location:
                "LGR, MNP - LGR",
            type:
                "econ60804"
        }

    ],



    "2026-10-13": [

        {
            title:
                "ECON 60803",
            time:
                "12h00 – 15h00",
            location:
                "Decelles, Forestville",
            type:
                "econ60803"
        }

    ],



    "2026-10-14": [

        {
            title:
                "ECON 60804",
            time:
                "8h30 – 11h30",
            location:
                "LGR, MNP - LGR",
            type:
                "econ60804"
        }

    ],



    "2026-10-15": [

        {
            title:
                "ECON 60801",
            time:
                "8h30 – 11h30",
            location:
                "LGR, Accra",
            type:
                "econ60801"
        }

    ],



    "2026-10-26": [

        {
            title:
                "ECON 60801",
            time:
                "8h30 – 11h30",
            location:
                "LGR, Accra",
            type:
                "econ60801"
        }

    ],



    "2026-10-27": [

        {
            title:
                "ECON 60803 — Intratrimestriel",
            time:
                "12h00 – 15h00",
            location:
                "À communiquer",
            type:
                "exam"
        }

    ],



    "2026-10-28": [

        {
            title:
                "ECON 60804 — Intratrimestriel",
            time:
                "8h30 – 11h30",
            location:
                "À communiquer",
            type:
                "exam"
        }

    ],



    /* ───────────────
       NOVEMBRE
       ─────────────── */


    "2026-11-02": [

        {
            title:
                "ECON 60801",
            time:
                "8h30 – 11h30",
            location:
                "LGR, Accra",
            type:
                "econ60801"
        }

    ],



    "2026-11-03": [

        {
            title:
                "ECON 60803",
            time:
                "12h00 – 15h00",
            location:
                "LGR, Fonds Cogeco - LGR",
            type:
                "econ60803"
        }

    ],



    "2026-11-04": [

        {
            title:
                "ECON 60804",
            time:
                "8h30 – 11h30",
            location:
                "LGR, MNP - LGR",
            type:
                "econ60804"
        }

    ],



    "2026-11-09": [

        {
            title:
                "ECON 60801",
            time:
                "8h30 – 11h30",
            location:
                "LGR, Accra",
            type:
                "econ60801"
        },

        {
            title:
                "ATEL 66219",
            time:
                "18h45",
            location:
                "Virtuel, À distance",
            type:
                "study"
        }

    ],



    "2026-11-10": [

        {
            title:
                "ECON 60803",
            time:
                "12h00 – 15h00",
            location:
                "LGR, Fonds Cogeco - LGR",
            type:
                "econ60803"
        }

    ],



    "2026-11-11": [

        {
            title:
                "ECON 60804",
            time:
                "8h30 – 11h30",
            location:
                "LGR, MNP - LGR",
            type:
                "econ60804"
        }

    ],



    "2026-11-16": [

        {
            title:
                "ECON 60801",
            time:
                "8h30 – 11h30",
            location:
                "LGR, Accra",
            type:
                "econ60801"
        }

    ],



    "2026-11-17": [

        {
            title:
                "ECON 60803",
            time:
                "12h00 – 15h00",
            location:
                "LGR, Fonds Cogeco - LGR",
            type:
                "econ60803"
        }

    ],



    "2026-11-18": [

        {
            title:
                "ECON 60804",
            time:
                "8h30 – 11h30",
            location:
                "LGR, MNP - LGR",
            type:
                "econ60804"
        }

    ],



    "2026-11-23": [

        {
            title:
                "ECON 60801",
            time:
                "8h30 – 11h30",
            location:
                "LGR, Accra",
            type:
                "econ60801"
        }

    ],



    "2026-11-24": [

        {
            title:
                "ECON 60803",
            time:
                "12h00 – 15h00",
            location:
                "LGR, Fonds Cogeco - LGR",
            type:
                "econ60803"
        }

    ],



    "2026-11-25": [

        {
            title:
                "ECON 60804",
            time:
                "8h30 – 11h30",
            location:
                "LGR, MNP - LGR",
            type:
                "econ60804"
        }

    ],



    "2026-11-30": [

        {
            title:
                "ECON 60801",
            time:
                "8h30 – 11h30",
            location:
                "LGR, Accra",
            type:
                "econ60801"
        }

    ],



    /* ───────────────
       DÉCEMBRE
       ─────────────── */


    "2026-12-01": [

        {
            title:
                "ECON 60803",
            time:
                "12h00 – 15h00",
            location:
                "LGR, Fonds Cogeco - LGR",
            type:
                "econ60803"
        }

    ],



    "2026-12-02": [

        {
            title:
                "ECON 60804",
            time:
                "8h30 – 11h30",
            location:
                "LGR, MNP - LGR",
            type:
                "econ60804"
        }

    ],



    "2026-12-04": [

        {
            title:
                "ECON 60803 — Examen final",
            time:
                "9h00",
            location:
                "À communiquer",
            type:
                "exam"
        }

    ],



    "2026-12-14": [

        {
            title:
                "ECON 60801 — Examen final",
            time:
                "18h30",
            location:
                "À communiquer",
            type:
                "exam"
        }

    ],



    "2026-12-15": [

        {
            title:
                "ECON 60804 — Examen final",
            time:
                "18h30",
            location:
                "À communiquer",
            type:
                "exam"
        }

    ]

};



/* ══════════════════════════════════════════════
   NOMS DES MOIS
   ══════════════════════════════════════════════ */

const monthNames = [

    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre"

];



/* ══════════════════════════════════════════════
   AFFICHER LE CALENDRIER
   ══════════════════════════════════════════════ */

function renderCalendar() {


    calendarDays.innerHTML = "";


    const year =
        currentDate.getFullYear();


    const month =
        currentDate.getMonth();


    monthYear.textContent =
        monthNames[month] +
        " " +
        year;



    const firstDay =
        new Date(
            year,
            month,
            1
        );


    const lastDay =
        new Date(
            year,
            month + 1,
            0
        );


    let startingDay =
        firstDay.getDay();


    if (startingDay === 0) {

        startingDay = 6;

    } else {

        startingDay =
            startingDay - 1;

    }


    const daysInMonth =
        lastDay.getDate();



    /* JOURS DU MOIS PRÉCÉDENT */

    const previousLastDay =
        new Date(
            year,
            month,
            0
        ).getDate();


    for (
        let i = startingDay - 1;
        i >= 0;
        i--
    ) {


        const day =
            document.createElement("div");


        day.className =
            "day other-month";


        const number =
            document.createElement("div");


        number.className =
            "day-number";


        number.textContent =
            previousLastDay - i;


        day.appendChild(number);


        calendarDays.appendChild(day);

    }



    /* JOURS DU MOIS ACTUEL */

    for (
        let dayNumber = 1;
        dayNumber <= daysInMonth;
        dayNumber++
    ) {


        createCalendarDay(
            year,
            month,
            dayNumber
        );

    }



    /* JOURS DU MOIS SUIVANT */

    const totalCells =
        calendarDays.children.length;


    const remaining =
        (7 - (totalCells % 7)) % 7;


    for (
        let i = 1;
        i <= remaining;
        i++
    ) {


        const day =
            document.createElement("div");


        day.className =
            "day other-month";


        const number =
            document.createElement("div");


        number.className =
            "day-number";


        number.textContent =
            i;


        day.appendChild(number);


        calendarDays.appendChild(day);

    }

}



/* ══════════════════════════════════════════════
   CRÉER UNE CASE
   ══════════════════════════════════════════════ */

function createCalendarDay(
    year,
    month,
    dayNumber
) {


    const day =
        document.createElement("div");


    day.className =
        "day";


    const number =
        document.createElement("div");


    number.className =
        "day-number";


    number.textContent =
        dayNumber;


    day.appendChild(number);



    const dateKey =
        year +
        "-" +
        String(month + 1).padStart(2, "0") +
        "-" +
        String(dayNumber).padStart(2, "0");



    /* AUJOURD'HUI */

    const today =
        new Date();


    if (

        dayNumber === today.getDate() &&

        month === today.getMonth() &&

        year === today.getFullYear()

    ) {

        day.classList.add("today");

    }



    /* ÉVÉNEMENTS */

    if (events[dateKey]) {


        events[dateKey].forEach(
            function(event) {


                const eventElement =
                    document.createElement("div");


                eventElement.className =
                    "event " +
                    event.type;


                /*
                   LE SYMBOLE
                */

                eventElement.textContent =
                    "ྀི𓊆❤︎𓊇ྀི";


                day.appendChild(
                    eventElement
                );

            }
        );

    }



    /* CLIC SUR LA DATE */

    day.addEventListener(
        "click",
        function() {

            openModal(
                dateKey,
                dayNumber,
                month,
                year
            );

        }
    );


    calendarDays.appendChild(day);

}



/* ══════════════════════════════════════════════
   MODAL
   ══════════════════════════════════════════════ */

const eventModal =
    document.getElementById("eventModal");


const closeModal =
    document.getElementById("closeModal");


const modalDate =
    document.getElementById("modalDate");


const modalEvents =
    document.getElementById("modalEvents");



function openModal(
    dateKey,
    dayNumber,
    month,
    year
) {


    const date =
        new Date(
            year,
            month,
            dayNumber
        );


    const weekdayNames = [

        "dimanche",
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi"

    ];


    modalDate.textContent =

        weekdayNames[date.getDay()] +

        " " +

        dayNumber +

        " " +

        monthNames[month] +

        " " +

        year;



    modalEvents.innerHTML = "";



    if (!events[dateKey]) {


        modalEvents.innerHTML = `

            <div class="modal-event study">

                <h4>
                    ♡ Aucune activité prévue
                </h4>

                <p>
                    Cette journée est libre.
                </p>

            </div>

        `;

    } else {


        events[dateKey].forEach(
            function(event) {


                const item =
                    document.createElement("div");


                item.className =
                    "modal-event " +
                    event.type;



                let html =

                    "<h4>" +

                    event.title +

                    "</h4>";



                if (event.time) {

                    html +=

                        "<p>♡ " +

                        event.time +

                        "</p>";

                }



                if (event.location) {

                    html +=

                        "<p>⌂ " +

                        event.location +

                        "</p>";

                }



                item.innerHTML =
                    html;


                modalEvents.appendChild(
                    item
                );

            }
        );

    }



    eventModal.classList.add(
        "active"
    );

}



/* ══════════════════════════════════════════════
   FERMER
   ══════════════════════════════════════════════ */

closeModal.addEventListener(
    "click",
    function() {

        eventModal.classList.remove(
            "active"
        );

    }
);



eventModal.addEventListener(
    "click",
    function(event) {

        if (
            event.target === eventModal
        ) {

            eventModal.classList.remove(
                "active"
            );

        }

    }
);



/* ══════════════════════════════════════════════
   MOIS PRÉCÉDENT
   ══════════════════════════════════════════════ */

prevMonth.addEventListener(
    "click",
    function() {


        currentDate.setMonth(
            currentDate.getMonth() - 1
        );


        renderCalendar();

    }
);



/* ══════════════════════════════════════════════
   MOIS SUIVANT
   ══════════════════════════════════════════════ */

nextMonth.addEventListener(
    "click",
    function() {


        currentDate.setMonth(
            currentDate.getMonth() + 1
        );


        renderCalendar();

    }
);



/* ══════════════════════════════════════════════
   LANCER
   ══════════════════════════════════════════════ */

renderCalendar();