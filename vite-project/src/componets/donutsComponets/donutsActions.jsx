export const LOAD_DONUTS = "LOAD_DONUTS";
export const GET_DONUT_BY_ID = "GET_DONUT_BY_ID";


export const loadDonuts = (donuts) => {
    return{
        type: LOAD_DONUTS,
        payload:{
            donuts,
        }
    }
}

export const getDonutById = (donutId) => {
    return{
        type: GET_DONUT_BY_ID,
        payload:{
            donutId,
        }
    }
}


