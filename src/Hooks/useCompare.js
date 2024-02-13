
export const useCompare = (today, lastDays) => {

    const diferencial = today.value_sell - lastDays[1]["value_sell"];

    return {diferencial}
}