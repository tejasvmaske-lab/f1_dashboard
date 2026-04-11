fetch("https://api.jolpi.ca/ergast/f1/current.json")
    .then(res => res.json())
    .then(data => {
        const races = data.MRData.RaceTable.Races;
        const now = new Date();
        const nextRace = races.find(race => {
            return new Date(race.date + "T" + race.time) > now;
        });
        console.log(nextRace.raceName);
        console.log(nextRace.date);

        console.log(nextRace.FirstPractice);
        console.log(nextRace.SecondPractice);
        console.log(nextRace.ThirdPractice);
        console.log(nextRace.Qualifying);
        console.log(nextRace.Sprint); // may be undefined
        console.log(nextRace.date, nextRace.time); // race

        const events = [
            { name: "FP1", data: nextRace.FirstPractice },
            { name: "FP2", data: nextRace.SecondPractice },
            { name: "FP3", data: nextRace.ThirdPractice },
            { name: "Qualifying", data: nextRace.Qualifying },
            { name: "Sprint", data: nextRace.Sprint },
            { name: "Race", data: { date: nextRace.date, time: nextRace.time } }
        ];
        console.log(events);
        const validEvents = events.filter(event => event.data !== undefined);
        const eventList = validEvents.map(event => {
            return {
                name: event.name,
                date: new Date(event.data.date + "T" + event.data.time)
            };
        });
        console.log(eventList);
        const nowTime = new Date();
        const nextEvent = eventList.find(event => event.date > nowTime);
        console.log(nextEvent);
        document.getElementById("next_event").innerText = nextEvent.name;
        setInterval(() => {
            const now = new Date();
            const diff = nextEvent.date - now;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
            const minutes = Math.floor(diff / (1000 * 60)) % 60;
            const seconds = Math.floor(diff / 1000) % 60;
            document.getElementById("countdown").innerText = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
        }, 1000);
        document.getElementById("race_name").innerText = nextRace.raceName;
        document.getElementById("race_date").innerText = nextRace.date;
        document.getElementById("circuit_name").innerText = nextRace.Circuit.circuitName;
        document.getElementById("circuit_location").innerText = `${nextRace.Circuit.Location.locality}, ${nextRace.Circuit.Location.country}`;
    });

fetch("https://api.jolpi.ca/ergast/f1/current/driverStandings.json")
    .then(res => res.json())
    .then(data => {
        const d_standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        const tableBody = document.getElementById("standings_driver");

        // clear old data (good practice)
        tableBody.innerHTML = "";

        d_standings.forEach(driver => {
            const row = document.createElement("tr");
            const constructorId = driver.Constructors[0].constructorId;
            row.classList.add(`accent-${constructorId}`);

            if (driver.position == "1") {
                row.classList.add("gold");
            } else if (driver.position == "2") {
                row.classList.add("silver");
            } else if (driver.position == "3") {
                row.classList.add("bronze");
            }

            row.innerHTML = `
        <td>${driver.position}</td>
        <td>${driver.Driver.givenName} ${driver.Driver.familyName}</td>
        <td>${driver.Constructors[0].name}</td>
        <td>${driver.points}</td>
    `;

            tableBody.appendChild(row);
        });
    })

fetch("https://api.jolpi.ca/ergast/f1/current/constructorStandings.json")
    .then(res => res.json())
    .then(data => {
        const c_standings = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        const tableBody = document.getElementById("standings_constructor");

        // clear old data (good practice)
        tableBody.innerHTML = "";

        c_standings.forEach(constructor => {
            const row = document.createElement("tr");
            const constructorId = constructor.Constructor.constructorId;
            row.classList.add(`accent-${constructorId}`);

            if (constructor.position == "1") {
                row.classList.add("gold");
            } else if (constructor.position == "2") {
                row.classList.add("silver");
            } else if (constructor.position == "3") {
                row.classList.add("bronze");
            }

            row.innerHTML = `
        <td>${constructor.position}</td>
        <td>${constructor.Constructor.name}</td>
        <td>${constructor.points}</td>
    `;

            tableBody.appendChild(row);
        });
    })

