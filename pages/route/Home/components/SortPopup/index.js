import styles from './sort.module.scss';
import ChipsComp from '../../../../components/Chips';
import {SORTOPTIONS as sortOptions} from '../../../../../lib/conts';

const SortPopup = ({value, onChange}) => {

    const handleOnClick = (selected) => {
        onChange(selected);
    }

    return <div className={styles.sortContainer}>
        <div>
            {sortOptions.map(data => <ChipsComp onClick={() => handleOnClick(data)} className={`${styles.chipsStyles} ${data === value ? styles.chipsActive : '' } `} hideIconClear={true} label={data.label} />)}
        </div>
    </div>
}

export default SortPopup;