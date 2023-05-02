import { useState } from 'react';
import style from './Formulario.module.css'

const form = () => {
    let [peso, setPeso] = useState(0);
    let [altura, setAltura] = useState(0);
    
    const calcularIMC = (peso, altura) => peso / (altura * altura)
    const imc = calcularIMC(peso, altura)

    function handleSubmit(event) {
        event.preventDefault();

    }

    const classificarIMC = (imc) => {
        console.log('imc', imc)
        if (imc < 18.5) {
            return "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 25) {
            return "Peso normal";
        } else if (imc >= 25 && imc < 30) {
            return "Sobrepeso";
        } else if (imc >= 30 && imc < 35) {
            return "Obesidade grau 1";
        } else if (imc >= 35 && imc < 40) {
            return "Obesidade grau 2";
        } else {
            return "Obesidade grau 3";
        }
    }

    return (
        <>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.formCampo}>
                    <label className={style.formLabel} htmlFor="peso">Peso:</label>
                    <input className={style.formInput} type="text" id='peso' onBlur={e => setPeso(Number(e.target.value))} />
                </div>
                <div>
                    <label className={style.formLabel} htmlFor="altura">Altura:</label>
                    <input className={style.formInput} type="text" id='altura' onBlur={e => setAltura(Number(e.target.value))} />
                </div>
                <button className={style.formBtn} type='submit'>Calcular</button>
                <span className={style.formSclamer}>{ isNaN(imc) || !isFinite(imc) ? '' : `IMC: ${imc.toFixed(1)}, ${classificarIMC(imc)}`}</span>
            </form>
        </>
    )
}





export default form