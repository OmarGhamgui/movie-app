import React from "react";
import { Card,Button }from "react-bootstrap";

const Cards = (props) => {
  return (
    <div key={props.Movie.id}>
       <Card style={{width:"400px" ,height:"950px"}} className='m-3'>
    <Card.Img variant="top" src={props.Movie.url} />
    <Card.Body className="d-flex flex-column justify-content-around">
      <Card.Title> {props.Movie.name} </Card.Title>
      <Card.Text style={{height:200}}>
      {props.Movie.desc}
      </Card.Text > <br/><br/>
      <h4 ><p style={{textAlign:"center"}}>   Rating : {props.Movie.rating} </p></h4>
      <div className="mx-auto  d-flex w-100 "><Button className="mx-auto w-50" variant="outline-info"> Watch Now </Button>{' '}</div>

    </Card.Body>
     
  </Card>
    </div>
  );
};

export default Cards;
