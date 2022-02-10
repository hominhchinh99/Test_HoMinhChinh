function miNiMaxSum(s) {

    // handle data
    let data = s.split(' ');

    // sort data
    data = data.sort();

    // sum
    const sum = data.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue), 0);

    // max/min value
    console.log(sum - data[data.length - 1], sum - data[0]);
}

miNiMaxSum('1 2 3 4 5');
miNiMaxSum('3 2 8 4 5');

