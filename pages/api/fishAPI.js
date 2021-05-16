import steinStore from 'stein-js-client';

const store = new steinStore(
    'https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4'
);

export const getListFish = () => {
    return store.read("list");
}

export const postFish = (data) => {
    return store.append("list", [data]);
} 

export const getOptionArea = () => {
    return store.read("option_area");
}

export const getOptionSize = () => {
    return store.read("option_sizee");
}

export const deleteFish = (uuid) => {
    return store.delete("list", {
        search: { uuid: uuid }
    })
}

export const updateFish = (data) => {
    return store.edit("list", {
        search: { uuid: data.uuid },
        set: data
    })
}

