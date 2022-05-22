// == import

// npm

// local

// style

function Comments () {
  return(
    <section className='allUser'>
      <h1 className='allSpots_h1'>Tous les commentaires</h1>
      
      {spotsData.map((item) => {
        return (
          <Comment {...item} key={item.id} />
        )
      })}
    </section>
  )
}

export default Comments;