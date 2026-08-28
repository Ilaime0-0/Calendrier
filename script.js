```javascript
const calendarDays = document.getElementById("calendarDays");
const monthYear = document.getElementById("monthYear");

const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let currentDate = new Date();

/* ──────────────────────────────────────────────
   TES ACTIVITÉS
   ────────────────────────────────────────────── */

const events = {

    "2026-08-30": [
        {
            title: "Math & statistiques",
            type: "course"
        }
    ],

    "2026-08-31": [
        {
            title: "Séminaire de macro",
            type: "course"
        },
        {
            title: "Consolidation des notes",
            type: "study"
        }
    ],

    "2026-09-01": [
        {
            title: "Préparation du cours",
            type: "study"
        },
        {
            title: "Exercices",
            type: "exercise"
        }
    ],

    "2026-09-02": [
        {
            title: "Cours",
            type: "course"
        },
        {
            title: "Consolidation",
            type: "study"
        }
    ],

    "2026-09-04": [
        {
            title: "Test obligatoire",
            type: "exam"
        }
    ]

};


/* ──────────────────────────────────────────────
   MOIS
   ────────────────────────────────────────────── */

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


/* ──────────────────────────────────────────────
   AFFICHER LE CALENDRIER
   ────────────────────────────────────────────── */

function renderCalendar() {

    calendarDays.innerHTML = "";

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    monthYear.textContent =
        `${monthNames[month]} ${year}`;

    const firstDay =
        new Date(year, month, 1);

    const lastDay =
        new Date(year, month + 1, 0);

    let startingDay =
        firstDay.getDay();

    /* On commence la semaine le lundi */

    startingDay =
        startingDay === 0
        ? 6
        : startingDay - 1;

    const daysInMonth =
        lastDay.getDate();

    /* Jours du mois précédent */

    const previousLastDay =
        new Date(year, month, 0).getDate();

    for (
        let i = startingDay - 1;
        i >= 0;
        i--
    ) {

        const dayNumber =
            previousLastDay - i;

        const day =
            createDay(dayNumber, true);

        calendarDays.appendChild(day);
    }


    /* Jours du mois actuel */

    for (
        let dayNumber = 1;
        dayNumber <= daysInMonth;
        dayNumber++
    ) {

        const day =
            createDay(dayNumber, false);

        calendarDays.appendChild(day);
    }


    /* Jours du mois suivant */

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
            createDay(i, true);

        calendarDays.appendChild(day);
    }
}


/* ──────────────────────────────────────────────
   CRÉER UNE JOURNÉE
   ────────────────────────────────────────────── */

function createDay(dayNumber, otherMonth) {

    const day =
        document.createElement("div");

    day.classList.add("day");

    if (otherMonth) {

        day.classList.add("other-month");

        const number =
            document.createElement("div");

        number.classList.add("day-number");

        number.textContent =
            dayNumber;

        day.appendChild(number);

        return day;
    }


    const year =
        currentDate.getFullYear();

    const month =
        String(
            currentDate.getMonth() + 1
        ).padStart(2, "0");

    const dateKey =
        `${year}-${month}-${String(dayNumber).padStart(2, "0")}`;


    /* Numéro du jour */

    const number =
        document.createElement("div");

    number.classList.add("day-number");

    number.textContent =
        dayNumber;

    day.appendChild(number);


    /* Aujourd'hui */

    const today =
        new Date();

    if (
        dayNumber === today.getDate() &&
        currentDate.getMonth() === today.getMonth() &&
        currentDate.getFullYear() === today.getFullYear()
    ) {

        day.classList.add("today");
    }


    /* Activités */

    if (events[dateKey]) {

        events[dateKey].forEach(event => {

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


    return day;
}


/* ──────────────────────────────────────────────
   BOUTON MOIS PRÉCÉDENT
   ────────────────────────────────────────────── */

prevMonth.addEventListener(
    "click",
    () => {

        currentDate.setMonth(
            currentDate.getMonth() - 1
        );

        renderCalendar();

    }
);


/* ──────────────────────────────────────────────
   BOUTON MOIS SUIVANT
   ────────────────────────────────────────────── */

nextMonth.addEventListener(
    "click",
    () => {

        currentDate.setMonth(
            currentDate.getMonth() + 1
        );

        renderCalendar();

    }
);


/* Afficher le calendrier */

renderCalendar();
```
