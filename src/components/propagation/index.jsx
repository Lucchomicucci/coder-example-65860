import styles from './styles.module.css'

const Propagation = () => {

    return(
        <div className={styles['container']} onClick={() => console.log('Mandame al detalle')}>
        <div className={styles['container']}
        onClick={(e) => {
            e.stopPropagation()
            console.log('Otro click')
        }}
        >
            <button
                onClick={(e) => {
                    e.stopPropagation()
                    console.log('Agrega el producto al carrito')
                }
            }>
                Click btn
            </button>
        </div>
        </div>
    )
}

export default Propagation