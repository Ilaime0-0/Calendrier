const calendarDays = document.getElementById("calendarDays");
const monthYear = document.getElementById("monthYear");

const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let currentDate = new Date(2026, 7, 1);


/* ═══════════════════════════════════════
   TES ACTIVITÉS
   ═══════════════════════════════════════ */

const events = {

    "2026-08-30": [
        {
            title: "Math & statistiques · cours",
            type: "course"
        }
    ],

    "2026-08-31": [
        {
            title: "Séminaire de macroéconomie internationale · 8h30–11h30",
            type: "course"
        }
    ],

    "2026-09-01": [
        {
            title: "Cours · 12h00–15h00",
            type: "course"
        }
    ],

    "2026-09-02": [
        {
            title: "Cours · 8h30–11h30",
            type: "course"
        }
    ],

    "2026-09-04": [
        {
            title: "Test obligatoire · 10h00–11h00",
            type: "exam"
        }
    ]

};


/* ═══════════════════════════════════════
   NOMS DES MOIS
   ═══════════════════════════════════════ */

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


/* ═══════════════════════════════════════
   AFFICHER LE CALENDRIER
   ═══════════════════════════════════════ */

function renderCalendar() {

    calendarDays.innerHTML = "";

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    monthYear.textContent = monthNames[month] + " " + year;

    const firstDay = new Date(year, month, 1);

    const lastDay = new Date(year, month + 1, 0);

    let startingDay = firstDay.getDay();

    /*
       JavaScript :
       dimanche = 0
       lundi = 1
       mardi = 2
       etc.

       On transforme pour que lundi soit le premier jour.
    */

    if (startingDay === 0) {
        startingDay = 6;
    } else {
        startingDay = startingDay - 1;
    }


    /* ═══════════════════════════════════════
       JOURS DU MOIS PRÉCÉDENT
       ═══════════════════════════════════════ */

    const previousLastDay =
        new Date(year, month, 0).getDate();

    for (let i = startingDay - 1; i >= 0; i--) {

        const dayNumber = previousLastDay - i;

        const day = document.createElement("div");

        day.classList.add("day", "other-month");

        const number = document.createElement("div");

        number.classList.add("day-number");

        number.textContent = dayNumber;

        day.appendChild(number);

        calendarDays.appendChild(day);
    }


    /* ═══════════════════════════════════════
       JOURS DU MOIS ACTUEL
       ═══════════════════════════════════════ */

    const daysInMonth = lastDay.getDate();

    for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {

        const day = document.createElement("div");

        day.classList.add("day");


        /* Numéro du jour */

        const number = document.createElement("div");

        number.classList.add("day-number");

        number.textContent = dayNumber;

        day.appendChild(number);


        /* Date complète */

        const monthString =
            String(month + 1).padStart(2, "0");

        const dayString =
            String(dayNumber).padStart(2, "0");

        const dateKey =
            year + "-" + monthString + "-" + dayString;


        /* ═══════════════════════════════════════
           AUJOURD'HUI
           ═══════════════════════════════════════ */

        const today = new Date();

        if (
            dayNumber === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {

            day.classList.add("today");
        }


        /* ═══════════════════════════════════════
           ACTIVITÉS
           ═══════════════════════════════════════ */

        if (events[dateKey]) {

            events[dateKey].forEach(function(event) {

                const eventElement =
                    document.createElement("div");

                eventElement.classList.add(
                    "event",
                    event.type
                );

                eventElement.textContent =
                    event.title;

                day.appendChild(eventElement);

            });
        }


        calendarDays.appendChild(day);
    }


    /* ═══════════════════════════════════════
       JOURS DU MOIS SUIVANT
       ═══════════════════════════════════════ */

    const totalCells =
        calendarDays.children.length;

    const remaining =
        (7 - (totalCells % 7)) % 7;

    for (let i = 1; i <= remaining; i++) {

        const day = document.createElement("div");

        day.classList.add("day", "other-month");

        const number = document.createElement("div");

        number.classList.add("day-number");

        number.textContent = i;

        day.appendChild(number);

        calendarDays.appendChild(day);
    }
}


/* ═══════════════════════════════════════
   MOIS PRÉCÉDENT
   ═══════════════════════════════════════ */

prevMonth.addEventListener("click", function() {

    currentDate.setMonth(
        currentDate.getMonth() - 1
    );

    renderCalendar();

});


/* ═══════════════════════════════════════
   MOIS SUIVANT
   ═══════════════════════════════════════ */

nextMonth.addEventListener("click", function() {

    currentDate.setMonth(
        currentDate.getMonth() + 1
    );

    renderCalendar();

});


/* ═══════════════════════════════════════
   LANCER LE CALENDRIER
   ═══════════════════════════════════════ */

renderCalendar();
