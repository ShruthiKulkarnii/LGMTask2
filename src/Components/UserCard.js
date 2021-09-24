import "./UserCard.css"
const UserCard = ({ email, first_name, last_name, avatar }) => {
    return(
        <div className="box-card column-4 column-s-6">
            <div className="card"> 
                <div className='row'>
                    <div className='column-2 column-s-4'>
                        <img src={avatar} alt="Avatar" style={{width: "50%"}}style={{height: "50%"}}/>
                    </div>
                    <div className='column-12 column-s-12'>
                        <div className="box">
                            <span><b>{ first_name +' '+ last_name }</b></span>
                            <p className='email'>{ email }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard;