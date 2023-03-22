
 import React, { Component } from 'react'
 import axios from 'axios';
import { ListGroupItem } from 'react-bootstrap';
 
class Card extends Component {
      constructor(props) {
         super(props)
         this.state={
           Users :[] 
         }
      }

      getUsers =() => {
         axios.get('https://api.github.com/users')
         .then(response => {
            this.setState({
               Users : response.data
            })
         })
      }
      componentDidMount(){
         this.getUsers();
      } 
     

   render() {
     return (
          (
 
        <div className='container mt-2'>
            <div className='row'>
               {this.state.Users.map(user => (
                  <div className='col-lg-4'>
                  <div className="card">
                     <img className="card-img-top" src={user.avatar_url} />
                     <div className="card-body">
                     <h4 className="card-title"> {user.login} </h4>
                      <a href={user.html_url}> <button className="btn bg-danger text-info" >Read Monde </button></a> 
                   </div>
                  </div>
               </div>

               ) )}
                
            </div>
        </div>
  )
     )
   }
 }
 export default Card;