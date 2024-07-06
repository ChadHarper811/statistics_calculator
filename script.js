const getMean = (array) => array.reduce((acc, el) => acc + el, 0)/array.length;

const getMedian = (array) => {
    const sorted = array.sort((a,b) => a-b);
    if (sorted.length % 2 === 1) {
        return sorted[Math.floor(sorted.length / 2)];
    } else if (sorted.length % 2 === 0) {
        return getMean([sorted[sorted.length / 2], sorted[(sorted.length / 2) - 1]])
    }
}

const calculate = () => {
    const value = document.querySelector(".value").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

    const mean = getMean(numbers);
    document.querySelector("#mean").textContent = mean;
}

