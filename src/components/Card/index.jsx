import './style.css'

export function Card(props){
    return(
        <div className="card">
            <strong>{props.name}</strong>
            <small>{props.age}</small>
            <small>{props.time}</small>
        </div>
    )
}