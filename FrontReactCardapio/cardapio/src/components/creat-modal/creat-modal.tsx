//[IMPORTS SESSION]
import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";
import "./modal.css";
//:: [FIM IMPORTE SESSION]

//[CREAT]::
/*  
 ::  Criação do componente input.
 ::Motivo: Melhor aparencia no código e evitar repetição de Inputs
 */
interface ModalProps{
    closeModal(): void
}
 interface InputProps{
    label:string,
    value:string | number,
    updateValue(value: any): void
 }

const Input = ({label,value,updateValue}: InputProps) => { /*::    Definição de parametro label, value e updateValue*/
    return(
        <> 
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}/>
        </>
    )
}

export function CreateModal({closeModal}: ModalProps){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const {mutate, isSuccess, isLoading} = useFoodDataMutate();

    const submit = () =>{
        const foodData:FoodData = {
            title,
            price,
            image
        }
        mutate(foodData);
    }
    useEffect(() =>{
        if(isSuccess){
            closeModal()
        }
        else return;
    },[isSuccess])
    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form action="input-container">
                    <Input label="title" value={title} updateValue={setTitle}/>
                    <Input label="price" value={price} updateValue={setPrice}/>
                    <Input label="image" value={image} updateValue={setImage}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                {isLoading? 'Postando...':'Postar'}</button>
            </div>
        </div>
    )
}