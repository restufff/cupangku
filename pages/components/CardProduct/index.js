
import styles from './card.module.scss';
import {numberWithCommas} from '../../../lib/utils';
import dayjs from 'dayjs'
const CardProduct = (props) => {
    const { onDelete, onEdit, data = {}} = props;

    return <div className={styles.container}>
        <div data-section>
            <div className={styles.highlight}>
                <label>Komoditas</label>
                {data.komoditas}
            </div>
            <div className={`${styles.highlight} ${styles.pricesStyle}`}>
                <label>Harga</label>
                Rp{numberWithCommas(data.price)}
            </div>
        </div>
        <div data-section>
            <div className={styles.locationStyle}>
                {data.location}
            </div>
            <div className={styles.sizeStyle}>
                <label>Ukuran</label>
                {data.size}
            </div>
        </div>
        <div data-section>
            <div className={styles.dateCreated}>
                Tanggal Masuk : {dayjs(data.date).format('DD/MM/YYYY')}
            </div>
        </div>
    
        <div className={styles.actionContainer}>
            <i onClick={() => onDelete(data.uuid)} className="material-icons md-18">delete</i>
            <i onClick={() => onEdit(data)} data-edit className="material-icons md-18">edit</i>
        </div>
    </div>
} 

export default CardProduct;