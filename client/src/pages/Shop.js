
export default function Shop(){
    const data = [
        {
          cover: <i class="fa-solid fa-shirt"></i>,
          title: "Clothes",
          decs: "Shop everything from our Mens, Womens, and Kids department",
        },
        {
          cover: <i class="fa-solid fa-bag-shopping"></i>,
          title: "Accessories",
          decs: "Browse our list of different accessory items ",
        },
        {
          cover: <i class="fa-solid fa-gifts"></i>,
          title: "Gifts ",
          decs: "Check your lists of item in your gift bag",
        },
        {
          cover: <i class="fa-solid fa-gem"></i>,
          title: "Jewelery ",
          decs: "Select from our many jewelery options",
        },
      ]
    return(
        <>
        <h1>Fashion</h1>
        <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
        
</>
    )
}