import { useState } from "react";

import {SMALLESTPRICE, HIGHESTPRICE, CITYA, CITYZ, DATEOLD, SMALLESTSIZE, HIGHESTSIZE, SORTOPTIONS as sortOptions } from '../../../../../lib/conts';
import { numberWithCommas } from '../../../../../lib/utils';
import Modal from 'react-modal';

import ButtonComp from "../../../../components/Button";
import ButtionIconComp from "../../../../components/ButtonIcon";
import SelectComp from "../../../../components/Select";
import SearchBox from "../../../../components/SearchBox";
import Chips from "../../../../components/Chips";

import SortPopupComp from '../SortPopup';

import styles from "./header.module.scss";




const Header = ({
  onClickAdd,
  onChangeSort,
  onChangeFilter,
  filteredKomoditas,
  filteredLocation,
  filteredPrice,
  filteredSize,
  onClearFilter
}) => {
  const [sortSelected, setSelected] = useState(sortOptions[0]);
  const [isSortModalOpen, setSortModal] = useState(false);

  const handleChangeSort = (selected) => {
    setSelected(selected);
    onChangeSort(selected.value);
  };

  const handleSubmitFilter = (data) => {
    onChangeFilter(data);
  };

  const handleToggleModal = (isOpen) => {
    setSortModal(isOpen);
  }

  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.buttonAdd}>
          <ButtonComp type="button" onClick={onClickAdd} data-type="primary" >
            {" "}
            Tambah Komoditas{" "}
          </ButtonComp>
        </div>
        <div className={styles.filterContainer}>
          <div className={styles.searchBox}>
            <SearchBox onSubmit={handleSubmitFilter} />
          </div>
          <div className={styles.selectContainer}>
            <SelectComp
              options={sortOptions}
              value={sortSelected}
              onChange={handleChangeSort}
            />
          </div>
        </div>
        <div className={styles.buttonFilterMobile}>
          <ButtionIconComp onClick={() => handleToggleModal(true)}>
            <i className="material-icons md-18">filter_list</i>
          </ButtionIconComp>
        </div>
      </div>
      <div className={styles.filteredContainer}>
        <div className={styles.filteredWrapper}>
          {filteredKomoditas ? <Chips onClear={() => onClearFilter('komoditas')} label={filteredKomoditas} /> : null}
          {filteredLocation ? <Chips onClear={() => onClearFilter('location')} label={filteredLocation} /> : null}
          {filteredPrice && filteredPrice.length > 0 ? <Chips onClear={() => onClearFilter('price')} label={`Rp${numberWithCommas(filteredPrice[0])} - Rp${numberWithCommas(filteredPrice[1])}`} /> : null}
          {filteredSize && filteredSize.length > 0 ? <Chips onClear={() => onClearFilter('size')} label={`${numberWithCommas(filteredSize[0])} - ${numberWithCommas(filteredSize[1])}`} /> : null}
        </div>
      </div>
      <Modal className={styles.sortModalForm} overlayClassName={styles.overlayModal} isOpen={isSortModalOpen} onRequestClose={() => handleToggleModal(false)}>
        <SortPopupComp value={sortSelected} onChange={handleChangeSort} />
      </Modal>
    </div>
  );
};

export default Header;
