import InputComp from '../Input';
import SelectComp from '../Select';
import styles from './searchbox.module.scss';
import { useState} from 'react';
import PriceFilter from './components/PriceFilter';

const optionsFilter = [
    { value: 'komoditas', label: 'Komoditas' },
    { value: 'location', label: 'Lokasi' },
    { value: 'price', label: 'Harga' },
    { value: 'size', label: 'Ukuran' },
  ];
  

const SearchBox = ({onSubmit}) => {
    const [generalSearch, setGeneralSearch] = useState('');
    const [typeSearch, setTypeSearch] = useState({ value: 'komoditas', label: 'Komoditas' });
    const [rangeSearch, setRangeSearch] = useState([0, 0]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            type: typeSearch.value,
            value: typeSearch.value === 'price' || typeSearch.value === 'size' ? rangeSearch : generalSearch
        });
    }
    const handleChangeRange = (i, price) => {
        const tempPrice = [...rangeSearch];
        tempPrice[i] = price.value;
        setRangeSearch(tempPrice);
    }

    return <div className={styles.container}>
        <form onSubmit={handleSubmit} >
            <div className={styles.searchContainer}>
                <SelectComp className={styles.selectContainer} options={optionsFilter} value={typeSearch} onChange={(val) => setTypeSearch(val)}  />
                {typeSearch.value === 'price' || typeSearch.value === 'size' ? <PriceFilter value={rangeSearch} onChangePrice={handleChangeRange} /> : <InputComp className={styles.inputContainer} placeholder="Cari disini" onChange={(e) => setGeneralSearch(e.target.value)} />}
            </div>
            <button type="submit" style={{opacity: 0, position: 'absolute'}} />
        </form>
    </div>
}

export default SearchBox;