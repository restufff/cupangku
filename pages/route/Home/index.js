import Head from "next/head";
import styles from "./Home.module.scss";
import { useState, useEffect } from "react";
import { getListFish, deleteFish } from "../../api/fishAPI";
import { mappingFishData, normalizerFilter, normalizerData } from "../../../lib/normalizer";
import { filterData } from "../../../lib/utils";
import FormComp from '../../components/Form';
import SelectComp from '../../components/Select';
import ButtonComp from '../../components/Button';
import ButtonFloatingComp from '../../components/ButtonFloating';
import Modal from 'react-modal';
import HeaderComp from './components/Header'
import { ToastContainer, toast } from 'react-toastify';
import ProductAdapter from "./productAdapter";
import LoadingComp from "../../components/Loading";
import Pagination from "react-js-pagination";


const countPerPage = 10;
const HomePages = () => {
  const [originalDataSource, setOriDataSource] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [sortSelected, setSorting] = useState('');
  const [isOpenModal, toggleModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [edittedData, setDataEdit] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [pageActive, setPage] = useState(1);
  const [totalItem, setTotalItem] = useState(1);

  //Filter
  const [filKomoditas, setFilKom] = useState('');
  const [filLocation, setFilLocation] = useState('');
  const [filPrice, setFilPrice] = useState([]);
  const [filSize, setFilSize] = useState([]);

  const getFishData = async () => {
    try {
      const respData = await getListFish();
      setOriDataSource(normalizerData(respData));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const deleteFishData = async (uuid) => {
    try {
      await deleteFish(uuid);
      getFishData();
      setLoading(false);
      toast.success("Data komoditas berhasil di hapus");
    } catch (err) {
      console.error(error);
    }
  }

  useEffect(() => {
    setLoading(true);
    getFishData();
  }, []);

  useEffect(() => {
    setLoading(true);
    const {filteredData, countItemData} = filterData(originalDataSource, {
      'komoditas': filKomoditas,
      'location': filLocation,
      'price': filPrice,
      'size': filSize,
    }, sortSelected, pageActive, countPerPage);

    setDataSource(filteredData);
    setTotalItem(countItemData);
    setTimeout(() => {
      setLoading(false);
    }, 450)
  },[filKomoditas, filLocation, filPrice, filSize, pageActive, sortSelected, originalDataSource]);

  const handleChangeSort = (selected) => {
    setPage(1);
    setSorting(selected);
  }

  const handleToggleModal = (open) => {
    toggleModal(open)
  }

  const handleFilter = (data) => {
    setPage(1);
    const mappingFilter = normalizerFilter(data);

    if (mappingFilter['price']) {
      const filtPrice = mappingFilter['price'] || '';
      setFilPrice(filtPrice || []);
    } else if (mappingFilter['size'])  {
      const filtSize = mappingFilter['size'] || '';
      setFilSize(filtSize || []);
    }
    else if (typeof mappingFilter['location'] !== 'undefined') {
      const filtLoca = mappingFilter['location'] || '';
      setFilLocation(filtLoca);
    } else {
      const filtKom = mappingFilter['komoditas'] || '';
      setFilKom(filtKom);
    }
  }

  const clearFilter = (name) => {
    setPage(1);
    if (name === 'komoditas') setFilKom('');
    if (name === 'location') setFilLocation('');
    if (name === 'price') setFilPrice([]);
    if (name === 'size') setFilSize([]);
  }

  const handleDelete = (uuid) => {
    setLoading(true);
    deleteFishData(uuid)
  }

  const handleEdit = (data) => {
    setDataEdit(data);
    setIsEdit(true);
    handleToggleModal(true);
  }

  const handleAdd = () => {
    handleToggleModal(true);
    setIsEdit(false);
    setDataEdit({});
  }

  const handlePageChange = (i) => {
    setPage(i)
    window.scrollTo(0, 0);
  }


  return (
    <div className={styles.wrapper}>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet" />
        <meta name="viewport" content="initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=no, width=device-width"></meta>
      </Head>
      <div>
        <div className={styles.titles}>
          <h2>Daftar Komoditas</h2>
        </div>
        <HeaderComp onChangeSort={handleChangeSort} onClickAdd={handleAdd } onChangeFilter={handleFilter} 
          filteredKomoditas={filKomoditas} 
          filteredLocation={filLocation} 
          filteredPrice={filPrice}
          filteredSize={filSize}
          onClearFilter={clearFilter}
        />
        <ProductAdapter pageTotal={totalItem} currentPage={pageActive} pageCount={countPerPage} dataSource={dataSource} onDelete={handleDelete} isLoading={isLoading} onEdit={handleEdit} />
        <div className={styles.paginationContainer}>
          <Pagination 
            activePage={pageActive}
            itemsCountPerPage={countPerPage}
            totalItemsCount={totalItem}
            pageRangeDisplayed={4} 
            marginPagesDisplayed={1}
            onChange={handlePageChange}
          />
        </div>
      </div>
      <Modal className={styles.modalForm} overlayClassName={styles.overlayModalForm} isOpen={isOpenModal} onRequestClose={() => handleToggleModal(false)}>
        <FormComp isEdit={isEdit} dataEdit={edittedData} onSuccess={getFishData} onCloseModal={() => handleToggleModal(false)} />
      </Modal>
      <div className="mobileOnly">
        <ButtonFloatingComp onClick={() => handleToggleModal(true)}>
          <i className="material-icons md-18">add</i>
        </ButtonFloatingComp>
      </div>
      <ToastContainer />
    </div>
  );
}


export default HomePages;