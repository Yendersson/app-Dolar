
export const filterByYears = (obj) => {
    let filteredData = [];
    let arrayOfDolarByYears = {};
    obj.forEach(item => {
        const itemYear = new Date(item.d).getFullYear();
        arrayOfDolarByYears[itemYear] = item;
    })

    for (const year in arrayOfDolarByYears) {
        filteredData.push(arrayOfDolarByYears[year]);
      }

      return filteredData;
}

export const filterByMounth = (obj) => {

    let filterMounth = {};
    let months = [];
    const filteredByCurrentYear = obj.filter(item => new Date(item.d).getFullYear() === new Date().getFullYear());
    filteredByCurrentYear.forEach(item => {
        filterMounth[new Date(item.d).getMonth()] = item;
    })

    for (const month in filterMounth){
        months.push(filterMounth[month]);
    }
    
    return months;
}

export const filterByLastFifteenDays = (obj) => {
   return obj.filter((item, index) => new Date(item.d).getFullYear() === new Date().getFullYear() && index > obj.length-16);    
}

export const filterByLastFiveDays = (obj) => {
    return obj.filter((item, index) => new Date(item.d).getFullYear() === new Date().getFullYear() && index > obj.length-6);    
 }