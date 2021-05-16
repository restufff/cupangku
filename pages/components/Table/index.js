import styles from './table.module.scss';
import {numberWithCommas} from '../../../lib/utils';

import dayjs from 'dayjs'
const TableComp = ({dataSource, onDelete, isLoading, onEdit, pageCount, currentPage}) => {

    const setNum = (i) => {
        return (currentPage - 1) * pageCount + i;
    }

    return <div className={styles.tableWrapper}> 
            <table className={styles.tableContainer}>
                <thead>
                    <tr>
                        <td width="30px" align="center">
                            No
                        </td>
                        <td>
                            Komoditas
                        </td>
                        <td width="100px">
                            Ukuran
                        </td>
                        <td width="200px">
                            Harga
                        </td>
                        <td width="200px">
                            Tanggal Masuk
                        </td>
                        <td>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {dataSource && dataSource.length > 0 ? dataSource.map((data, i) => <tr key={data.uuid + i}>
                        <td width="30px" align="center">
                            {setNum(i + 1)}
                        </td>
                        <td>
                            <div data-highlight>
                                {data.komoditas}
                            </div>
                            <div>
                                {data.location}
                            </div>
                        </td>
                        <td width="100px">
                                {data.size}
                        </td>
                        <td width="200px">
                                Rp{numberWithCommas(data.price)}
                        </td>
                        <td width="200px">
                                {dayjs(data.date).format('DD/MM/YYYY')}
                        </td>
                        <td>
                            <div className={styles.actionContainer}>
                                <i onClick={() => onDelete(data.uuid)} className="material-icons md-18">delete</i>
                                <i onClick={() => onEdit(data)} data-edit className="material-icons md-18 edit">edit</i>
                            </div>
                        </td>
                    </tr>): 
                    <tr>
                        <td colSpan="5">
                            <div className={styles.emptyState}>
                                <img src="/empty.svg" alt="Cari yg lain"/>
                                <div className={styles.descriptionEmpty}>
                                    Komoditas yang anda cari belum ada nih, coba cari yang lain yah...
                                </div>
                            </div>
                        </td>
                    </tr>}
                </tbody>
            </table>
        </div>
}

export default TableComp;