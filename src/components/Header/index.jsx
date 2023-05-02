import style from './Header.module.css'

const header = () => {
    return(
        <header className={style.header}>
            <h1>IMC</h1>
            <span className={style.headerSclamer}>Índice de Massa Corporal</span>
        </header>
    )
        
}

export default header