export const filterByYears = (obj, type) => {
    let filteredData = [];
    let arrayOfDolarByYears = {};
    let objByType = obj.evolution.filter(item => item.source.toLowerCase() === type);
    
    objByType.forEach(item => {
        const itemYear = new Date(item.date).getFullYear();
        arrayOfDolarByYears[itemYear] = item;
    })

    for (const year in arrayOfDolarByYears) {
        filteredData.push(arrayOfDolarByYears[year]);
      }
      return filteredData;
}
const word = "";

export const filterByMounth = (obj, type) => {

    let filterMounth = {};
    let months = [];
    const filteredByCurrentYear = obj.evolution.filter(item => new Date(item.date).getFullYear() === new Date().getFullYear() && item.source.toLowerCase() === type);
    filteredByCurrentYear.forEach(item => {
        filterMounth[new Date(item.date).getMonth()] = item;
    })

    for (const month in filterMounth){
        months.push(filterMounth[month]);
    }
    
    return months;
}

export const filterByLastFifteenDays = (obj, type) => {
   return obj.evolution.filter((item, index) => new Date(item.date).getFullYear() === new Date().getFullYear() && index < 30 && item.source.toLowerCase() === type).reverse();    
}

export const filterByLastFiveDays = (obj, type) => {
    return obj.evolution.filter((item, index) => new Date(item.date).getFullYear() === new Date().getFullYear() && index < 10 && item.source.toLowerCase() === type).reverse();    
 }

 export const inflacionFilterByCurrentYear = (obj) => {
    let currentYear = obj.filter(item => new Date(item.d).getFullYear() === new Date().getFullYear());
    return currentYear;
 }

 export const inflacionFilterByLast12Month = (obj) => {
    return obj.filter((item, index) => index > (obj.length - 12));
 }