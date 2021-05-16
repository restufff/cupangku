import {CITYA,CITYZ, SMALLESTPRICE, HIGHESTPRICE, DATEOLD, HIGHESTSIZE, SMALLESTSIZE} from './conts';

export const filterData = (originalData, filterValue, sortType, pageNum, countPerPage) => {
    let countItemData = originalData.length;
    
    let filteredData =  originalData.filter((data, i) => {
        let isValid = true;

        //Komoditas
        if (!data['komoditas'] && filterValue['komoditas']) {
            return false;
        } else if (data['komoditas'] && filterValue['komoditas']) {
            isValid = data['komoditas'].toLowerCase().indexOf(filterValue['komoditas'].toLowerCase()) > -1;
            if (!isValid) return false;
        }

        //Location
        const location = `${data.areaKota || ''} ${data.areaProvinsi || ''}`;
        if (!location && filterValue['location']) {
            return false;
        } else if (location && filterValue['location']) {
            isValid = location.toLowerCase().indexOf(filterValue['location'].toLowerCase()) > -1;
            if (!isValid) return false;
        }

         //Price
         if (!data['price'] && filterValue['price']) {
            return false;
        } else if (data['price'] && filterValue['price'] && filterValue['price'].length > 0 ) {
            const priceArr = filterValue['price']
            const smallestPrice = priceArr[0];
            const highestPrice = priceArr[1];

            const currentPrice = +data['price'];
            isValid = currentPrice >= smallestPrice && currentPrice <= highestPrice;
            if (!isValid) return false;
        }

         //Price
         if (!data['size'] && filterValue['size']) {
            return false;
        } else if (data['size'] && filterValue['size'] && filterValue['size'].length > 0 ) {
            const priceArr = filterValue['size']
            const smallestPrice = priceArr[0];
            const highestPrice = priceArr[1];

            const currentPrice = +data['size'];
            isValid = currentPrice >= smallestPrice && currentPrice <= highestPrice;
            if (!isValid) return false;
        }

        return isValid
    });

    countItemData = filteredData.length;

    filteredData.sort((a,b) => {
        if (sortType === SMALLESTPRICE) {
            return +a.price - b.price;
        } 

        if (sortType === HIGHESTPRICE) {
            return +b.price - +a.price;
        }

        if (sortType === SMALLESTSIZE ) {
            return +a.size - b.size;
        } 

        if (sortType === HIGHESTSIZE) {
            return +b.size - +a.size;
        }

        if (sortType === DATEOLD) {
            return new Date(a.date) - new Date(b.date);
        }

        if (sortType === CITYA) {
            return a.area_kota > b.area_kota ? 1 : -1
        }

        if (sortType === CITYZ) {
            return a.area_kota > b.area_kota ? -1 : 1
        }

        return new Date(b.date) - new Date(a.date);
    })

    filteredData = filteredData.filter((da,i) => {
        const offsetStartIdx = (pageNum - 1) * countPerPage; // 0
        const offsetEndIdx = pageNum * countPerPage - 1; // 10

        if (offsetStartIdx > i) return false
        if (offsetEndIdx < i) return false

        return true;
    });

    return {countItemData, filteredData};
}


export const numberWithCommas = (number) => {
    return number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : '';
}

export const camelCase =  (text) => {
    if (!text) return text;

    let txtArr = text.split(' ');
    txtArr.forEach((str, i) => {
        let de = str.toLowerCase();
       
        txtArr[i] =  de[0].toUpperCase() + de.substr(1, de.length);
    });

    return txtArr.join(' ');
}