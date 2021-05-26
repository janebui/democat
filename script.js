// votedemocat.com, last updated 8/20/2020
// Jane Bui ( janebuidesign@gmail.com )

const form = document.querySelector('form'); // grabs zipcode search form
const input = document.querySelector('#zip'); // grabs zipcode inputted by user
let blurb = document.querySelector('#blurb'); // text that appears after user searches zips
let results = []; // array to store results of matching political districts
let resultsCounty = []; // array to store results of matching counties
let zipcode = 0;
let str = ""; // output string
let county = ""; // output county
let elections = document.querySelector('#elections'); // output of statewide elections
let proplist = document.querySelector('#props'); // output of propositions
let list = document.querySelector('#list'); // output of local results

function processZip(e) {
    e.preventDefault();
    zipcode = input.value;
    zipcode = zipcode.trim();

    if ((zipcode.length == 5) && parseInt(zipcode)) {
        zipcode = parseInt(zipcode);

        searchZips(zipcode, CD, "CD");
        searchZips(zipcode, AD, "AD");
        searchZips(zipcode, SD, "SD");
        searchLocalZips(zipcode);

        if (!results.length) {
            return blurb.textContent = "Zip Code not found. Please try again.";
        } else {
            str = `<h5>${zipcode}</h5><p>Note: Some zip codes may overlap with multiple districts, so simply vote for the one that is on your ballot.</p>`
            // Propagate local candidates list (CD,AD,SD)
            str += results.map(item =>
                `
            <h3>${item[1]}-${item[2]} | ${item[0].name}</h3>
            <h4>${item[0].locality}</h4>
            ${item[0].description}
            `
            ).join(""); // join bc innerHTML takes str not arr

            // Propagate local candidates list (County, Municipal)
            resultsCounty.forEach(function (element) {
                str += `<hr><h5>${element[0]}</h5>`
                element[2].forEach(function (position) {
                    str += `<h3>${position.position} | ${position.name}</h3>
                    ${position.description}
                    `
                });
                if (element[3]) {
                    // if county has Democrat website with endorsements, provide link
                    str += `<h3>Municipal, School, and Other Districts</h3>
                Please refer to the <a href="${element[3]}" target="_blank">${element[0]} Democrats website</a> for more local candidates and measures.
                `;
                }
            });

            list.innerHTML = str; // output results

            // reset results and failure blurb
            results = [];
            resultsCounty = [];
            blurb.textContent = "";
        }

    } else {
        return blurb.textContent = "Invalid Input. Please try again.";
    }
    this.reset();
}

// search data for political districts matching zipcode
function searchZips(zipcode, race, racename) {
    for (let i = 0; i < race.length; i++) {
        if (race[i].zip.includes(zipcode) && race[i].name) {
            results.push([race[i], racename, i + 1]);
        }
    }
}

// search data for counties matching zipcode
function searchLocalZips(zipcode) {
    for (let i = 0; i < local.length; i++) {
        if (local[i][1].includes(zipcode)) {
            resultsCounty.push(local[i]);
        }
    }
}

// propagate statewide elections list
elections.innerHTML = candidates.map(item =>
    `<h3>${item.position} | ${item.name}</h3>
    ${item.description}
    `).join("");

    // insert this later after results: ${item.result ? 'WON' : 'LOST'}

// propagate propositions list
proplist.innerHTML = props.map(item =>
    `<h3>${item.name} | ${item.recommended.toUpperCase()}</h3>
    ${item.description}
    `).join("");


form.addEventListener('submit', processZip);