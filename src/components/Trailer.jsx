const Trailer = (props) => {
    const trailer = props.MovieList.find(({ name }) => name === props.match.params.Ntitle);

    return (
      <div>
        <p className='d-flex flex-column my-5 mx-auto align-items-center'>
    <h1 className='m-3 '>{trailer.name}</h1>
          <iframe
            width="853"
            height="480"
            src={trailer.trailer}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h4 style={{textAlign:'center', margin:70}}>{trailer.desc}</h4>
          
          
        </p>{" "}
       
      </div>
    );
  }
  export default Trailer