import "./card.css"
interface CardProps{
    price: number,
    title: string,
    image: string
}
export function Card({price, title, image} : CardProps){
    return(
        <div className="card">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p><b>PREÇO:</b> R$ {price},00</p>
        </div>
    )
}