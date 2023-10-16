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
            <label>{label}</label><br/>
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
             return;
         }
         else return;
    },[isSuccess])
    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <div className="modal-form">
                    <h2>CADASTRE UM NOVO ITEM NO CARDÁPIO</h2>
                    <form action="input-container" className="input-container">
                        <Input label="Titulo" value={title} updateValue={setTitle}/>
                        <Input label="Preço" value={price} updateValue={setPrice}/>
                        <Input label="URL Imagem" value={image} updateValue={setImage}/>
                    </form>
                </div>
                <div className="modal-button">
                    <button onClick={submit} className="btn-secondary">
                    {isLoading? 'POSTANDO...':'POSTAR'}</button>
                    <button onClick={closeModal} className="modal-button-fechar">
                        X
                    </button>
                </div>
            </div>
        </div>
    )
}