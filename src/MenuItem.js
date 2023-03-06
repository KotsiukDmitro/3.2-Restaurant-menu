function MenuItem(props) {

    return (<li className="dish" key={props.item.id}>
        <img className="img" src={props.item.img} alt="img" />
        <div>
            <h4 className="name">{props.item.name} <span className="price">${props.item.price}</span></h4>
            <p className="text">{props.item.text}</p>
        </div>
    </li>)
}

export default MenuItem










