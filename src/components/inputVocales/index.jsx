import { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const InputVocales = () => {
    const { addToList } = useContext(ShopContext)
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleKeyDown = (e) => {
        const key = e.key.toLowerCase()
        const vowels = ['a', 'e', 'i', 'o', 'u']

        if(vowels.includes(key)){
            e.preventDefault()
        }
    }

    return (
        <div className="App">
        <header className="App-header">
        <h1>Input sin vocales</h1>
        <input
            type="text"
            value={inputValue}
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => handleKeyDown(e)}
            placeholder="Ingresa texto sin vocales"
        />
        <button onClick={() => addToList('Hola')}>Guardar</button>
        </header>
    </div>
    );
}

export default InputVocales