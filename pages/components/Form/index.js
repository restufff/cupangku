import { postFish, getOptionArea, updateFish} from '../../api/fishAPI';
import {mappingViewToFormData} from '../../../lib/normalizer';
import { useState, useEffect} from 'react';
import InputComp from '../Input';
import styles from './form.module.scss';
import ButtonComp from '../Button';
import LoadingComp from '../Loading';
import { get, useForm } from 'react-hook-form';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const defaultValue = {
    price: '',
    komoditas: '',
    size: '',
    areaProvinsi: '',
    areaKota: ''
}

const FormComp = ({onSuccess, onCloseModal, isEdit, dataEdit}) => {
    const { register, handleSubmit, errors, reset, setValue, getValues } = useForm(); // initialize the hook
    const [listArea, setListArea] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [formData, setFormData] = useState(isEdit ? dataEdit : defaultValue);

    const fetchLocation = async () => {
        try {
            const data = await getOptionArea();
            setListArea(data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchLocation();
        Object.keys(formData).forEach(function(key) {
            setValue(key, formData[key]);
        });
    }, [])


    const handleReset = () => {
        reset();
        setValue('size', '');

    }

    const submitFishData = async (dataObj) => {
        try {
            let message = 'Data komoditas berhasil di tambahkan';
            if (isEdit) {
                message = 'Data komoditas berhasil di ubah'
                await updateFish(mappingViewToFormData(dataObj));
            } else {
                await postFish(mappingViewToFormData(dataObj));
            }
            setFormData(defaultValue);
            handleReset();
            setLoading(false);
            toast.success(message);
            onSuccess();
        } catch (error) {
            console.error(error);
            toast.error("Data komoditas gagal di tambahkan");
            setLoading(false);
        } 
    }

    const onSubmit = () => {
        setLoading(true);
        submitFishData(formData);
    }

    const handleChangeForm = (value, key) => {
        let tempFormData = {...formData};
        const tempValue = value || '';
        tempFormData[key] = tempValue;

        setFormData(tempFormData);
    }


    return <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.title}>
                    <span>{isEdit ? 'Ubah Komoditas' : 'Tambah Komoditas'}</span>
                </div>
                <div className={styles.gridInput}>
                    <InputComp name="komoditas" warningMessage={errors.komoditas && "Komoditas harus diisi ya"} ref={register({ required: true })} label="Komoditas" placeholder="Komoditas" onChange={e => handleChangeForm(e.target.value, 'komoditas') } />
                    <InputComp  value={formData.size} name="size" warningMessage={errors.size && "Ukurannya diisi ya"} ref={register({ required: true })} label="Ukuran" compType="number" placeholder="Size" thousandSeparator={'.'} decimalSeparator={','}  onValueChange={obj => handleChangeForm(obj.value, 'size')}  />
                </div>
                <InputComp name="areaProvinsi" warningMessage={errors.areaProvinsi && "Provinsi dipilih ya"} label="Provinsi" placeholder="Provinsi" ref={register({ required: true })}  onChange={e => handleChangeForm(e.target.value, 'areaProvinsi') } />
                <InputComp name="areaKota" warningMessage={errors.areaKota && "Kota juga dipilih ya"} label="Kota" placeholder="Kota" ref={register({ required: true })} onChange={e => handleChangeForm(e.target.value, 'areaKota') } />
                <InputComp value={formData.price} name="price" warningMessage={errors.price && "Harga jangan lupa diisi"} label="Harga" compType="number" ref={register({ required: true })} placeholder="Masukan Harga" thousandSeparator={'.'} decimalSeparator={','} onValueChange={obj => handleChangeForm(obj.value, 'price')} />
                <div className={styles.actionContainer}>
                    <ButtonComp type="button" onClick={onCloseModal}> 
                        Cancel
                    </ButtonComp>
                    <ButtonComp data-type="primary" type="submit"> 
                        Simpan
                    </ButtonComp>
                </div>
                {isLoading ?
                <div className={styles.loadingContainer}>
                    <LoadingComp />
                </div> : null
                }
        </form>
        <ToastContainer />
    </div>
}

export default FormComp;