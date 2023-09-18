export const filterByYears = (obj, type) => {
    let filteredData = [];
    let arrayOfDolarByYears = {};
    let objByType = [];
    console.log(obj)
    if (type){
        objByType = obj.evolution.filter(item => item.source.toLowerCase() === type);
    } else {
        objByType = obj;
    }
    
    objByType.forEach(item => {
        let itemYear;
        if (type) {
            itemYear = new Date(item.date).getFullYear();
        } else {
            itemYear = new Date(item.d).getFullYear();
        }
        arrayOfDolarByYears[itemYear] = item;
    })

    for (const year in arrayOfDolarByYears) {
        filteredData.push(arrayOfDolarByYears[year]);
      }
      return filteredData;
}

export const filterByMounth = (obj, type) => {

    let filterMounth = {};
    let months = [];
    let filteredByCurrentYear = [];

    if (type){
        filteredByCurrentYear = obj.evolution.filter(item => new Date(item.date).getFullYear() === new Date().getFullYear() && item.source.toLowerCase() === type);
    } else {
        filteredByCurrentYear = obj.filter(item => new Date(item.d).getFullYear() === new Date().getFullYear());   
    }

    filteredByCurrentYear.forEach(item => {
        if (type) {
            filterMounth[new Date(item.date).getMonth()] = item;
        } else {
            filterMounth[new Date(item.d).getMonth()] = item;
        }
    })

    for (const month in filterMounth){
        months.push(filterMounth[month]);
    }
    
    return months;
}

export const filterByLastFifteenDays = (obj, type) => {
    if (type) {
        return obj.evolution.filter((item, index) => new Date(item.date).getFullYear() === new Date().getFullYear() && index < 30 && item.source.toLowerCase() === type).reverse();    
    } else {
        return obj.filter((item, index) => new Date(item.d).getFullYear() === new Date().getFullYear() && index > (obj.length - 16));    
    }
}

export const filterByLastFiveDays = (obj, type) => {
    if (type) {
        return obj.evolution.filter((item, index) => new Date(item.date).getFullYear() === new Date().getFullYear() && index < 10 && item.source.toLowerCase() === type).reverse();    
    }else {
        return obj.filter((item, index) => new Date(item.d).getFullYear() === new Date().getFullYear() && index > (obj.length - 6));    
    }
 }


 //INFLACION INTERANUAL/MENSUAL

 export const inflacionFilterByCurrentYear = (obj) => {
    let currentYear = obj.filter(item => new Date(item.d).getFullYear() === new Date().getFullYear());
    return currentYear;
 }

 export const inflacionFilterByLast12Month = (obj) => {
    return obj.filter((item, index) => index > (obj.length - 12));
 }