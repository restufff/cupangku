import { v4 as uuidv4 } from 'uuid';
import { camelCase} from './utils';

export const mappingFishData = (data) => ({
        areaKota: data.area_kota,
        areaProvinsi: data.area_provinsi,
        komoditas: data.komoditas,
        location: `${data.area_kota} - ${data.area_provinsi}`,
        price: data.price,
        size: data.size,
        date: data.tgl_parsed,
        timestamp: data.timestamp,
        uuid: data.uuid}
        
        )


export const mappingViewToFormData = (data) => (
        {
                "uuid": data.uuid ? data.uuid : uuidv4(),
                "komoditas": camelCase(data.komoditas),
                "area_provinsi": data.areaProvinsi.toUpperCase(),
                "area_kota": data.areaKota.toUpperCase(),
                "size": data.size,
                "price": data.price,
                "tgl_parsed":new Date().toJSON(),
                "timestamp": new Date().getTime()
        }
);


export const normalizerData = (data) => {
        return data.filter(d => d.komoditas).map(d => mappingFishData(d));
}

/*
example data : {
        type: '',
        value: 'bandeng'
}
*/
export const normalizerFilter = (data) => {
        return {
                [data.type]: data.value,
        } 
}