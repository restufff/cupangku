import styles from './button.module.scss';
const ButtonComp = (props) => {
    return <button className={styles.buttonContainer} {...props} />
}

export default ButtonComp;