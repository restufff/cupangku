
import CardProduct from '../../../../components/CardProduct';
import styles from './card.module.scss';

const CardContainerComp = ({dataSource, onDelete, onEdit, isLoading}) => {
    return <div className={styles.cardContainer}>
        {dataSource && dataSource.length > 0 ? dataSource.map((data, i) => <CardProduct key={data.uuid + i} data={data || {}} onDelete={onDelete} onEdit={onEdit} />
        ): <div className={styles.emptyState}>
            <img src="/empty.svg" alt="Cari yg lain"/>
            <div className={styles.descriptionEmpty}>
                Komoditas yang anda cari belum ada nih, coba cari yang lain yah...
            </div>
        </div>}
    </div>
    
}

export default CardContainerComp;