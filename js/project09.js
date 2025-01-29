let array = [];
        let delay = 100;

        function resetArray() {
            array = Array.from({length: 20}, () => Math.floor(Math.random() * 100) + 10);
            renderArray();
        }

        function renderArray(highlightIndexes = []) {
            const container = document.getElementById("bar-container");
            container.innerHTML = "";
            array.forEach((value, index) => {
                const bar = document.createElement("div");
                bar.classList.add("bar");
                bar.style.height = `${value * 3}px`;
                if (highlightIndexes.includes(index)) {
                    bar.classList.add("highlight");
                }
                container.appendChild(bar);
            });
        }

        async function startSorting(type) {
            delay = 200 - document.getElementById("speed").value * 2;
            if (type === 'bubble') {
                await bubbleSort();
            } else if (type === 'insertion') {
                await insertionSort();
            }
            document.getElementById("commentary").innerText = "Sorting complete!";
        }

        async function bubbleSort() {
            document.getElementById("commentary").innerText = "Starting Bubble Sort...";
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array.length - i - 1; j++) {
                    renderArray([j, j + 1]);
                    await new Promise(resolve => setTimeout(resolve, delay));
                    if (array[j] > array[j + 1]) {
                        [array[j], array[j + 1]] = [array[j + 1], array[j]];
                        document.getElementById("commentary").innerText = `Swapped ${array[j]} and ${array[j + 1]}`;
                    }
                }
            }
        }

        async function insertionSort() {
            document.getElementById("commentary").innerText = "Starting Insertion Sort...";
            for (let i = 1; i < array.length; i++) {
                let key = array[i];
                let j = i - 1;
                while (j >= 0 && array[j] > key) {
                    renderArray([j, j + 1]);
                    await new Promise(resolve => setTimeout(resolve, delay));
                    array[j + 1] = array[j];
                    j = j - 1;
                }
                array[j + 1] = key;
                document.getElementById("commentary").innerText = `Inserted ${key} in the correct position`;
            }
        }

        resetArray();