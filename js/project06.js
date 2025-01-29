const elements = [
    { atomicNumber: 1, symbol: "H", name: "Hydrogen", group: "Nonmetals", row: 1, col: 1 },
{ atomicNumber: 2, symbol: "He", name: "Helium", group: "Noble Gases", row: 1, col: 18 },
{ atomicNumber: 3, symbol: "Li", name: "Lithium", group: "Alkali Metals", row: 2, col: 1 },
{ atomicNumber: 4, symbol: "Be", name: "Beryllium", group: "Alkaline Earth Metals", row: 2, col: 2 },
{ atomicNumber: 5, symbol: "B", name: "Boron", group: "Metalloids", row: 2, col: 13 },
{ atomicNumber: 6, symbol: "C", name: "Carbon", group: "Nonmetals", row: 2, col: 14 },
{ atomicNumber: 7, symbol: "N", name: "Nitrogen", group: "Nonmetals", row: 2, col: 15 },
{ atomicNumber: 8, symbol: "O", name: "Oxygen", group: "Nonmetals", row: 2, col: 16 },
{ atomicNumber: 9, symbol: "F", name: "Fluorine", group: "Halogens", row: 2, col: 17 },
{ atomicNumber: 10, symbol: "Ne", name: "Neon", group: "Noble Gases", row: 2, col: 18 },
{ atomicNumber: 11, symbol: "Na", name: "Sodium", group: "Alkali Metals", row: 3, col: 1 },
{ atomicNumber: 12, symbol: "Mg", name: "Magnesium", group: "Alkaline Earth Metals", row: 3, col: 2 },
{ atomicNumber: 13, symbol: "Al", name: "Aluminum", group: "Other Metals", row: 3, col: 13 },
{ atomicNumber: 14, symbol: "Si", name: "Silicon", group: "Metalloids", row: 3, col: 14 },
{ atomicNumber: 15, symbol: "P", name: "Phosphorus", group: "Nonmetals", row: 3, col: 15 },
{ atomicNumber: 16, symbol: "S", name: "Sulfur", group: "Nonmetals", row: 3, col: 16 },
{ atomicNumber: 17, symbol: "Cl", name: "Chlorine", group: "Halogens", row: 3, col: 17 },
{ atomicNumber: 18, symbol: "Ar", name: "Argon", group: "Noble Gases", row: 3, col: 18 },
{ atomicNumber: 19, symbol: "K", name: "Potassium", group: "Alkali Metals", row: 4, col: 1 },
{ atomicNumber: 20, symbol: "Ca", name: "Calcium", group: "Alkaline Earth Metals", row: 4, col: 2 },
{ atomicNumber: 21, symbol: "Sc", name: "Scandium", group: "Transition Metals", row: 4, col: 3 },
{ atomicNumber: 22, symbol: "Ti", name: "Titanium", group: "Transition Metals", row: 4, col: 4 },
{ atomicNumber: 23, symbol: "V", name: "Vanadium", group: "Transition Metals", row: 4, col: 5 },
{ atomicNumber: 24, symbol: "Cr", name: "Chromium", group: "Transition Metals", row: 4, col: 6 },
{ atomicNumber: 25, symbol: "Mn", name: "Manganese", group: "Transition Metals", row: 4, col: 7 },
{ atomicNumber: 26, symbol: "Fe", name: "Iron", group: "Transition Metals", row: 4, col: 8 },
{ atomicNumber: 27, symbol: "Co", name: "Cobalt", group: "Transition Metals", row: 4, col: 9 },
{ atomicNumber: 28, symbol: "Ni", name: "Nickel", group: "Transition Metals", row: 4, col: 10 },
{ atomicNumber: 29, symbol: "Cu", name: "Copper", group: "Transition Metals", row: 4, col: 11 },
{ atomicNumber: 30, symbol: "Zn", name: "Zinc", group: "Transition Metals", row: 4, col: 12 },
{ atomicNumber: 31, symbol: "Ga", name: "Gallium", group: "Other Metals", row: 4, col: 13 },
{ atomicNumber: 32, symbol: "Ge", name: "Germanium", group: "Metalloids", row: 4, col: 14 },
{ atomicNumber: 33, symbol: "As", name: "Arsenic", group: "Metalloids", row: 4, col: 15 },
{ atomicNumber: 34, symbol: "Se", name: "Selenium", group: "Nonmetals", row: 4, col: 16 },
{ atomicNumber: 35, symbol: "Br", name: "Bromine", group: "Halogens", row: 4, col: 17 },
{ atomicNumber: 36, symbol: "Kr", name: "Krypton", group: "Noble Gases", row: 4, col: 18 },
{ atomicNumber: 37, symbol: "Rb", name: "Rubidium", group: "Alkali Metals", row: 5, col: 1 },
{ atomicNumber: 38, symbol: "Sr", name: "Strontium", group: "Alkaline Earth Metals", row: 5, col: 2 },
{ atomicNumber: 39, symbol: "Y", name: "Yttrium", group: "Transition Metals", row: 5, col: 3 },
{ atomicNumber: 40, symbol: "Zr", name: "Zirconium", group: "Transition Metals", row: 5, col: 4 },
{ atomicNumber: 41, symbol: "Nb", name: "Niobium", group: "Transition Metals", row: 5, col: 5 },
{ atomicNumber: 42, symbol: "Mo", name: "Molybdenum", group: "Transition Metals", row: 5, col: 6 },
{ atomicNumber: 43, symbol: "Tc", name: "Technetium", group: "Transition Metals", row: 5, col: 7 },
{ atomicNumber: 44, symbol: "Ru", name: "Ruthenium", group: "Transition Metals", row: 5, col: 8 },
{ atomicNumber: 45, symbol: "Rh", name: "Rhodium", group: "Transition Metals", row: 5, col: 9 },
{ atomicNumber: 46, symbol: "Pd", name: "Palladium", group: "Transition Metals", row: 5, col: 10 },
{ atomicNumber: 47, symbol: "Ag", name: "Silver", group: "Transition Metals", row: 5, col: 11 },
{ atomicNumber: 48, symbol: "Cd", name: "Cadmium", group: "Transition Metals", row: 5, col: 12 },
{ atomicNumber: 49, symbol: "In", name: "Indium", group: "Other Metals", row: 5, col: 13 },
{ atomicNumber: 50, symbol: "Sn", name: "Tin", group: "Other Metals", row: 5, col: 14 },
{ atomicNumber: 51, symbol: "Sb", name: "Antimony", group: "Metalloids", row: 5, col: 15 },
{ atomicNumber: 52, symbol: "Te", name: "Tellurium", group: "Metalloids", row: 5, col: 16 },
{ atomicNumber: 53, symbol: "I", name: "Iodine", group: "Halogens", row: 5, col: 17 },
{ atomicNumber: 54, symbol: "Xe", name: "Xenon", group: "Noble Gases", row: 5, col: 18 },
{ atomicNumber: 55, symbol: "Cs", name: "Cesium", group: "Alkali Metals", row: 6, col: 1 },
{ atomicNumber: 56, symbol: "Ba", name: "Barium", group: "Alkaline Earth Metals", row: 6, col: 2 },
{ atomicNumber: 57, symbol: "La", name: "Lanthanum", group: "Lanthanides", row: 6, col: 3 },
{ atomicNumber: 58, symbol: "Ce", name: "Cerium", group: "Lanthanides", row: 9, col: 4 },
{ atomicNumber: 59, symbol: "Pr", name: "Praseodymium", group: "Lanthanides", row: 9, col: 5 },
{ atomicNumber: 60, symbol: "Nd", name: "Neodymium", group: "Lanthanides", row: 9, col: 6 },
{ atomicNumber: 61, symbol: "Pm", name: "Promethium", group: "Lanthanides", row: 9, col: 7 },
{ atomicNumber: 62, symbol: "Sm", name: "Samarium", group: "Lanthanides", row: 9, col: 8 },
{ atomicNumber: 63, symbol: "Eu", name: "Europium", group: "Lanthanides", row: 9, col: 9 },
{ atomicNumber: 64, symbol: "Gd", name: "Gadolinium", group: "Lanthanides", row: 9, col: 10 },
{ atomicNumber: 65, symbol: "Tb", name: "Terbium", group: "Lanthanides", row: 9, col: 11 },
{ atomicNumber: 66, symbol: "Dy", name: "Dysprosium", group: "Lanthanides", row: 9, col: 12 },
{ atomicNumber: 67, symbol: "Ho", name: "Holmium", group: "Lanthanides", row: 9, col: 13 },
{ atomicNumber: 68, symbol: "Er", name: "Erbium", group: "Lanthanides", row: 9, col: 14 },
{ atomicNumber: 69, symbol: "Tm", name: "Thulium", group: "Lanthanides", row: 9, col: 15 },
{ atomicNumber: 70, symbol: "Yb", name: "Ytterbium", group: "Lanthanides", row: 9, col: 16 },
{ atomicNumber: 71, symbol: "Lu", name: "Lutetium", group: "Lanthanides", row: 9, col: 17 },
{ atomicNumber: 72, symbol: "Hf", name: "Hafnium", group: "Transition Metals", row: 6, col: 4 },
{ atomicNumber: 73, symbol: "Ta", name: "Tantalum", group: "Transition Metals", row: 6, col: 5 },
{ atomicNumber: 74, symbol: "W", name: "Tungsten", group: "Transition Metals", row: 6, col: 6 },
{ atomicNumber: 75, symbol: "Re", name: "Rhenium", group: "Transition Metals", row: 6, col: 7 },
{ atomicNumber: 76, symbol: "Os", name: "Osmium", group: "Transition Metals", row: 6, col: 8 },
{ atomicNumber: 77, symbol: "Ir", name: "Iridium", group: "Transition Metals", row: 6, col: 9 },
{ atomicNumber: 78, symbol: "Pt", name: "Platinum", group: "Transition Metals", row: 6, col: 10 },
{ atomicNumber: 79, symbol: "Au", name: "Gold", group: "Transition Metals", row: 6, col: 11 },
{ atomicNumber: 80, symbol: "Hg", name: "Mercury", group: "Transition Metals", row: 6, col: 12 },
{ atomicNumber: 81, symbol: "Tl", name: "Thallium", group: "Other Metals", row: 6, col: 13 },
{ atomicNumber: 82, symbol: "Pb", name: "Lead", group: "Other Metals", row: 6, col: 14 },
{ atomicNumber: 83, symbol: "Bi", name: "Bismuth", group: "Other Metals", row: 6, col: 15 },
{ atomicNumber: 84, symbol: "Po", name: "Polonium", group: "Other Metals", row: 6, col: 16 },
{ atomicNumber: 85, symbol: "At", name: "Astatine", group: "Metalloids", row: 6, col: 17 },
{ atomicNumber: 86, symbol: "Rn", name: "Radon", group: "Noble Gases", row: 6, col: 18 },
{ atomicNumber: 87, symbol: "Fr", name: "Francium", group: "Alkali Metals", row: 7, col: 1 },
{ atomicNumber: 88, symbol: "Ra", name: "Radium", group: "Alkaline Earth Metals", row: 7, col: 2 },
{ atomicNumber: 89, symbol: "Ac", name: "Actinium", group: "Actinides", row: 7, col: 3 },
{ atomicNumber: 90, symbol: "Th", name: "Thorium", group: "Actinides", row: 10, col: 4 },
{ atomicNumber: 91, symbol: "Pa", name: "Protactinium", group: "Actinides", row: 10, col: 5 },
{ atomicNumber: 92, symbol: "U", name: "Uranium", group: "Actinides", row: 10, col: 6 },
{ atomicNumber: 93, symbol: "Np", name: "Neptunium", group: "Actinides", row: 10, col: 7 },
{ atomicNumber: 94, symbol: "Pu", name: "Plutonium", group: "Actinides", row: 10, col: 8 },
{ atomicNumber: 95, symbol: "Am", name: "Americium", group: "Actinides", row: 10, col: 9 },
{ atomicNumber: 96, symbol: "Cm", name: "Curium", group: "Actinides", row: 10, col: 10 },
{ atomicNumber: 97, symbol: "Bk", name: "Berkelium", group: "Actinides", row: 10, col: 11 },
{ atomicNumber: 98, symbol: "Cf", name: "Californium", group: "Actinides", row: 10, col: 12 },
{ atomicNumber: 99, symbol: "Es", name: "Einsteinium", group: "Actinides", row: 10, col: 13 },
{ atomicNumber: 100, symbol: "Fm", name: "Fermium", group: "Actinides", row: 10, col: 14 },
{ atomicNumber: 101, symbol: "Md", name: "Mendelevium", group: "Actinides", row: 10, col: 15 },
{ atomicNumber: 102, symbol: "No", name: "Nobelium", group: "Actinides", row: 10, col: 16 },
{ atomicNumber: 103, symbol: "Lr", name: "Lawrencium", group: "Actinides", row: 10, col: 17 },
{ atomicNumber: 104, symbol: "Rf", name: "Rutherfordium", group: "Transition Metals", row: 7, col: 4 },
{ atomicNumber: 105, symbol: "Db", name: "Dubnium", group: "Transition Metals", row: 7, col: 5 },
{ atomicNumber: 106, symbol: "Sg", name: "Seaborgium", group: "Transition Metals", row: 7, col: 6 },
{ atomicNumber: 107, symbol: "Bh", name: "Bohrium", group: "Transition Metals", row: 7, col: 7 },
{ atomicNumber: 108, symbol: "Hs", name: "Hassium", group: "Transition Metals", row: 7, col: 8 },
{ atomicNumber: 109, symbol: "Mt", name: "Meitnerium", group: "Transition Metals", row: 7, col: 9 },
{ atomicNumber: 110, symbol: "Ds", name: "Darmstadtium", group: "Transition Metals", row: 7, col: 10 },
{ atomicNumber: 111, symbol: "Rg", name: "Roentgenium", group: "Transition Metals", row: 7, col: 11 },
{ atomicNumber: 112, symbol: "Cn", name: "Copernicium", group: "Transition Metals", row: 7, col: 12 },
{ atomicNumber: 113, symbol: "Nh", name: "Nihonium", group: "Other Metals", row: 7, col: 13 },
{ atomicNumber: 114, symbol: "Fl", name: "Flerovium", group: "Other Metals", row: 7, col: 14 },
{ atomicNumber: 115, symbol: "Mc", name: "Moscovium", group: "Other Metals", row: 7, col: 15 },
{ atomicNumber: 116, symbol: "Lv", name: "Livermorium", group: "Other Metals", row: 7, col: 16 },
{ atomicNumber: 117, symbol: "Ts", name: "Tennessine", group: "Halogen", row: 7, col: 17 },
{ atomicNumber: 118, symbol: "Og", name: "Oganesson", group: "Noble Gases", row: 7, col: 18 }
    ];

    const tableContainer = document.getElementById("periodicTable");
    const details = document.getElementById("details");
    const searchBar = document.getElementById("searchBar");

    function renderTable() {
        tableContainer.innerHTML = "";
        elements.forEach((element) => {
            const elementDiv = document.createElement("div");
            elementDiv.className = "element";
            elementDiv.textContent = element.symbol;
            elementDiv.style.gridColumn = element.col;
            elementDiv.style.gridRow = element.row;
            elementDiv.dataset.atomicNumber = element.atomicNumber;

            elementDiv.addEventListener("click", () => {
                highlightElement(element.atomicNumber);
                showDetails(element);
            });

            tableContainer.appendChild(elementDiv);
        });
    }

    function highlightElement(atomicNumber) {
        document.querySelectorAll(".element").forEach((el) => el.classList.remove("highlight"));
        const selectedElement = document.querySelector(`.element[data-atomic-number='${atomicNumber}']`);
        selectedElement.classList.add("highlight");
    }

    function showDetails(element) {
        details.innerHTML = `
            <p><strong>Name:</strong> ${element.name}</p>
            <p><strong>Symbol:</strong> ${element.symbol}</p>
            <p><strong>Atomic Number:</strong> ${element.atomicNumber}</p>
            <p><strong>Group:</strong> ${element.group}</p>
        `;
    }

    searchBar.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const foundElement = elements.find(
            (el) =>
                el.name.toLowerCase().includes(query) ||
                el.symbol.toLowerCase().includes(query) ||
                el.atomicNumber.toString() === query
        );

        if (foundElement) {
            highlightElement(foundElement.atomicNumber);
            showDetails(foundElement);
        }
    });

    renderTable();