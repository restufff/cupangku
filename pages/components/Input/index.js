import { useRef, useEffect, forwardRef, useMemo } from 'react';
import styles from './input.module.scss';
import NumberFormat from 'react-number-format';


const InputComp = forwardRef((props, ref) => {
    const {compType, warningMessage} = props;

    // const inputRef = useRef();
    // useEffect(() => {
    //     if (typeof value !== "function") inputRef.current.value = value || "";
    // }, [value]);

    const renderWarnMessage = useMemo(() => {
        return warningMessage ? <div className={styles.warningMessage}>{warningMessage}</div> : null;
    }, [warningMessage])


    return <div className={`${styles.inputContainer} ${props.className}`}>
        <label>{props.label}</label>
        {compType === 'number' ? <NumberFormat autoComplete="off" getInputRef={ref} {...props}  thousandSeparator={'.'} decimalSeparator={','} /> : <input autoComplete="off" {...props} ref={ref} type="text" />}
        {renderWarnMessage}
    </div>
})

export default InputComp;