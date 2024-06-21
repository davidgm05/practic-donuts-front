export const getDonutsData = async () => {
    const url = "http://localhost:3000/donuts/getdonuts"
    const donuts = await fetch(url)
    const response = await donuts.json()
    return response.data
}

export const getDonutDataById = async (id) => {
    const url = `http://localhost:3000/donuts/getdonutbyid/${id}`
    const donut = await fetch(url)
    const response = await donut.json()
    return response.data
}

export const postDonut = async (newDonutData) => {
    const url = "http://localhost:3000/donuts/postdonut"
    const newDonut = await fetch(url, {
        method: "POST",
        headers:{
            "Content-type": "application/json",
        },
        body: JSON.stringify(newDonutData),
    });
    const response = await newDonut.json()
    return response.data
}

export const deleteDonut = async (id) => {
    const url = `http://localhost:3000/donuts/deletedonut/${id}`
    const donutToDelete = await fetch(url, {
        method: "DELETE",
        headers:{
            "Content-type": "application/json",
        },
    });
    const response = await donutToDelete.json()
    return response.data
}

export const updateDonut = async (id, updateDonutData) => {
    const url = `http://localhost:3000/donuts/updatedonut/${id}`
    const donutToUpdate = await fetch(url, {
        method: "PATCH",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify(updateDonutData),
    });
    const response = await donutToUpdate.json()
    return response.data
}

export const getFavoritesData = async () => {
    const url = "http://localhost:3000/favoritos/getfavorites";
    const favoritesData = await fetch(url);
    const response = await favoritesData.json()
    return response.data
}

export const addFavorites = async (id) => {
    const url = `http://localhost:3000/favoritos/addfavoritos/${id}`;
    const addingFavorite = await fetch(url, {
        method: "POST",
        headers:{
            "Content-type": "application/json",
        },
    });
    const response = await addingFavorite.json()
    return response.data
}

export const deleteFavorites = async (id) => {
    const url = `http://localhost:3000/favoritos/deletefavorite/${id}`;
    const deletedFavorites = await fetch(url, {
        method: "DELETE",
        headers:{
            "Content-type": "application/json"
        },
    });
    const response = await deletedFavorites.json();
    return response.data
}