

import Table from '../../components/Table';
import CardContainer from './components/CardContainer';
import styles from './Home.module.scss';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import LoadingComp from '../../components/Loading';


const ProductAdapter = (props) => {
    const {onDelete, isLoading, pageTotal} = props;

    const handleClickDelete = (uuid) => {
        confirmAlert({
            title: 'Konfirmasi',
            message: 'Apakah anda yakin, ingin menghapus komoditas ini ?',
            buttons: [
            {
                label: 'Yakin',
                onClick: () => onDelete(uuid)
            },
            {
                label: 'Batal'
            }
            ]
        });
    }

    return <div>
        <div className={styles.descriptionData}>
            {`menampilkan ${pageTotal} data komoditas`}
        </div>
        <div className={styles.desktop}>
            <Table {...props} onDelete={handleClickDelete} />
        </div>
        <div className={styles.mobile}>
            <CardContainer {...props} onDelete={handleClickDelete} />
        </div>

        {isLoading && <div className={styles.loadingState}>
            <div className={styles.loadingComp}>
                <LoadingComp />
            </div>
        </div>}
    </div>
}

export default ProductAdapter