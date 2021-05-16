import styles from './pricefilter.module.scss';
import InputComp from '../../../Input'
import { useState } from 'react';

const PriceFilter = ({value, onChangePrice}) => {
    return <div className={styles.inputContainer}>
            <InputComp  value={value ? value[0] : null} placeholder="Mulai Dari" compType="number" onValueChange={(val) => onChangePrice(0,val)} /> - <InputComp value={value ? value[1] : null} onValueChange={(val) => onChangePrice(1,val)} compType="number" placeholder="Sampai" />
        </div>
}

export default PriceFilter;