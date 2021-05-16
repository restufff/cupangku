import styles from './button.module.scss';
const ButtonComp = (props) => {
    return <div className={styles.wrapperContainer}>
        <button className={styles.buttonContainer} {...props} />
    </div>
}

export default ButtonComp;