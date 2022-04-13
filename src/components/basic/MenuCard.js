import React from 'react'

const MenuCard = ({menuData}) => {
    
  return (
    <>  
    <section className='main-card--cointainer'>
    {menuData.map((currElement)=>{

        return (
            <div className="card-container" key={currElement.id}>
            <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle">{currElement.id}</span>
                    <span className="card-author subtle">{currElement.category}</span>
                    <h2 className="card-title">{currElement.name}</h2>
                    <span className="card-description subtle">
                    {currElement.description}
                    </span>
                    <div className="card-read">Read</div>
                </div>
                <img src={currElement.image} alt="" className="card-media" />
                <span className="card-tag subtle">Order Now</span>
            </div>
            
        </div>
        )

    })}
    
    </section>
        </>  )
}

export default MenuCard