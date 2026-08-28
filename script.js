const calendarDays = document.getElementById("calendarDays");
const monthYear = document.getElementById("monthYear");

const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let currentDate = new Date(2026, 7, 1);


/* ══════════════════════════════════════════════
   TES ACTIVITÉS
   ══════════════════════════════════════════════ */

const events = {

    /* DIMANCHE 30 AOÛT */

    "2026-08-30": [
        {
            title: "Math & statistiques · cours",
            type: "course"
        }
    ],


    /* LUNDI 31 AOÛT */

    "2026-08-31": [
        {
            title: "Séminaire de macroéconomie internationale · 8h30–11h30",
            type: "course"
        }
    ],


    /* MARDI 1 SEPTEMBRE */

    "2026-09-01": [
        {
            title: "Cours · 12h00–15h00",
            type: "course"
        }
    ],


    /* MERCREDI 2 SEPTEMBRE */

    "2026-09-02": [
        {
            title: "Cours · 8h30–11h30",
            type: "course"
        }
    ],


    /* VENDREDI 4 SEPTEMBRE */

    "2026-09-04": [
        {
            title: "Test obligatoire · 10h00–11h00",
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
