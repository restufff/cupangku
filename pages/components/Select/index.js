import Select from 'react-select';
import styles from './select.module.scss'

  const SelectComp = (props) => <Select className={`${styles.selectContainer} ${props.className || ''}`} classNamePrefix={'select-react'} {...props}  />

  export default SelectComp;