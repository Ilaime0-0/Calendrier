const calendarDays = document.getElementById("calendarDays");
const monthYear = document.getElementById("monthYear");

const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let currentDate = new Date(2026, 7, 1);


/* ══════════════════════════════════════════════
   TES ACTIVITÉS
   ══════════════════════════════════════════════ */

/* ══════════════════════════════════════════════
   COURS + EXAMENS — AUTOMNE 2026
   ══════════════════════════════════════════════ */

const events = {

    /* ══════════════════════════════════════════
       AOÛT
       ══════════════════════════════════════════ */

    "2026-08-31": [
        {
            title: "ECON 60801 · Séminaire de macro — 8h30–11h30",
            type: "course"
        }
    ],


    /* ══════════════════════════════════════════
       SEPTEMBRE
       ══════════════════════════════════════════ */

    "2026-09-01": [
        {
            title: "ECON 60803 · 12h00–15h00",
            type: "course"
        }
    ],

    "2026-09-02": [
        {
            title: "ECON 60804 · 8h30–11h30",
            type: "course"
        }
    ],

    "2026-09-08": [
        {
            title: "ECON 60803 · 12h00–15h00",
            type: "course"
        }
    ],

    "2026-09-09": [
        {
            title: "ECON 60804 · 8h30–11h30",
            type: "course"
        }
    ],

    "2026-09-15": [
        {
            title: "ECON 60803 · 12h00–15h00",
            type: "course"
        }
    ],

    "2026-09-16": [
        {
            title: "ECON 60804 · 8h30–11h30",
            type: "course"
        }
    ],

    "2026-09-21": [
        {
            title: "ECON 60801 · 8h30–11h30",
            type: "course"
        }
    ],

    "2026-09-22": [
        {
            title: "ECON 60803 · 12h00–15h00",
            type: "course"
        }
    ],

    "2026-09-23": [
        {
            title: "ECON 60804 · 8h30–11h30",
            type: "course"
        }
    ],

    "2026-09-25": [
        {
            title: "ECON 60801 · 12h00–15h00",
            type: "course"
        }
    ],

    "2026-09-28": [
        {
            title: "ECON 60801 · 8h30–11h30",
            type: "course"
        }
    ],

    "2026-09-29": [
        {
            title: "ECON 60803 · 12h00–15h00",
            type: "course"
        }
    ],


    /* ══════════════════════════════════════════
       OCTOBRE
       ══════════════════════════════════════════ */

    "2026-10-06": [
        {
            title: "ECON 60801 · 8h30–11h30",
            type: "course"
        }
    ],

    "2026-10-07": [
        {
            title: "ECON 60804 · 8h30–11h30",
            type: "course"
        }
    ],

    "2026-10-13": [
        {
            title: "ECON 60803 · 12h00–15h00",
            type: "course"
        }
    ],

    "2026-10-14": [
        {
            title: "ECON 60804 · 8h30–11h30",
            type: "course"
        }
    ],

    "2026-10-15": [
        {
            title: "ECON 60801 · 8h30–11h30",
            type: "course"
        }
    ],

    "2026-10-26": [
        {
            title: "ECON 60801 · 8h30–11h30",
            type: "course"
        }
    ],

    "2026-10-27": [
        {
            title: "ECON 60803 · INTRATRIMESTRIEL · 12h00",
            type: "exam"
        }
    ],

    "2026-10-28": [
        {
            title: "ECON 60804 · INTRATRIMESTRIEL · 8h30",
            type: "exam"
        }
    ],


    /* ══════════════════════════════════════════
       NOVEMBRE
       ══════════════════════════════════════════ */

    "2026-11-02": [
        {
            title: "ECON 60801 · 8h30–11h30",
            type: "course"
        }
    ],

    "2026-11-03": [
        {
            title: "ECON 60803 · 12h00–15h00",
            type: "course"
        }
    ],

    "2026-11-04": [
        {
            title: "ECON 60804 · 8h30–11h30",
            type: "course"
        }
    ],

    "2026-11-09": [
        {
            title: "ECON 60801 · 8h30–11h30",
            type: "course"
        },
        {
            title: "ATEL 66219 · 18h45–21h45 · Virtuel",
            type: "course"
        }
    ],

    "2026-11-10": [
        {
            title: "ECON 60803 · 12h00–15h00",
            type: "course"
        }
    ],

    "2026-11-11": [
        {
            title: "ECON 60804 · 8h30–11h30",
            type: "course"
        }
    ],

    "2026-11-16": [
        {
            title: "ECON 60801 · 8h30–11h30",
            type: "course"
        }
    ],

    "2026-11-17": [
        {
            title: "ECON 60803 · 12h00–15h00",
            type: "course"
        }
    ],

    "2026-11-18": [
        {
            title: "ECON 60804 · 8h30–11h30",
            type: "course"
        }
    ],

    "2026-11-23": [
        {
            title: "ECON 60801 · 8h30–11h30",
            type: "course"
        }
    ],

    "2026-11-24": [
        {
            title: "ECON 60803 · 12h00–15h00",
            type: "course"
        }
    ],

    "2026-11-25": [
        {
            title: "ECON 60804 · 8h30–11h30",
            type: "course"
        }
    ],

    "2026-11-30": [
        {
            title: "ECON 60801 · 8h30–11h30",
            type: "course"
        }
    ],


    /* ══════════════════════════════════════════
       DÉCEMBRE
       ══════════════════════════════════════════ */

    "2026-12-01": [
        {
            title: "ECON 60803 · 12h00–15h00",
            type: "course"
        }
    ],

    "2026-12-02": [
        {
            title: "ECON 60804 · 8h30–11h30",
            type: "course"
        }
    ],


    /* ══════════════════════════════════════════
       EXAMENS FINAUX
       ══════════════════════════════════════════ */

    "2026-12-04": [
        {
            title: "EXAMEN FINAL · ECON 60803 · 9h00",
            type: "exam"
        }
    ],

    "2026-12-14": [
        {
            title: "EXAMEN FINAL · ECON 60801 · 18h30",
            type: "exam"
        }
    ],

    "2026-12-15": [
        {
            title: "EXAMEN FINAL · ECON 60804 · 18h30",
            type: "exam"
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

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    monthYear.textContent =
        monthNames[month] + " " + year;


    const firstDay =
        new Date(year, month, 1);

    const lastDay =
        new Date(year, month + 1, 0);

    let startingDay =
        firstDay.getDay();


    /* Lundi = premier jour de la semaine */

    if (startingDay === 0) {
        startingDay = 6;
    } else {
        startingDay = startingDay - 1;
    }


    const daysInMonth =
        lastDay.getDate();


    /* ══════════════════════════════════════════
       JOURS DU MOIS PRÉCÉDENT
       ══════════════════════════════════════════ */

    const previousLastDay =
        new Date(year, month, 0).getDate();

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


    /* ══════════════════════════════════════════
       JOURS DU MOIS ACTUEL
       ══════════════════════════════════════════ */

    for (
        let dayNumber = 1;
        dayNumber <= daysInMonth;
        dayNumber++
    ) {

        const day =
            document.createElement("div");

        day.className =
            "day";


        /* Numéro du jour */

        const number =
            document.createElement("div");

        number.className =
            "day-number";

        number.textContent =
            dayNumber;

        day.appendChild(number);


        /* Date complète */

        const dateKey =
            year +
            "-" +
            String(month + 1).padStart(2, "0") +
            "-" +
            String(dayNumber).padStart(2, "0");


        /* ══════════════════════════════════════
           AUJOURD'HUI
           ══════════════════════════════════════ */

        const today =
            new Date();

        if (
            dayNumber === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {

            day.classList.add("today");
        }


        /* ══════════════════════════════════════
           ACTIVITÉS
           ══════════════════════════════════════ */

        if (events[dateKey]) {

            events[dateKey].forEach(function(event) {

                const eventElement =
                    document.createElement("div");

                eventElement.className =
                    "event " + event.type;

                eventElement.textContent =
                    event.title;

                day.appendChild(eventElement);

            });
        }


        calendarDays.appendChild(day);
    }


    /* ══════════════════════════════════════════
       JOURS DU MOIS SUIVANT
       ══════════════════════════════════════════ */

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
   LANCER LE CALENDRIER
   ══════════════════════════════════════════════ */

renderCalendar();
