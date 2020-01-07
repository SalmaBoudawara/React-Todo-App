import React, { Component } from 'react'
import './Form.css'
import List from '../mapLigne/List'
export default class Form extends Component {
    constructor(props){
        super(props)
        this.state={
        newTask: {text:"",isComplete:false},
         tab:[]
        }
    }
    //function saisie text
    onChangeText=(event)=>{
      
        this.setState({ newTask:{ text:event.target.value ,isComplete:false}});
      
    }
    //function vide input
    cancelCourse = () => { 
      this.setState({
        text: "",
     
      });
    }
    
//function ajout list
    onAdd = (event) => {
      event.preventDefault()
      if(this.state.newTask.text)
        this.setState(state => {
          const tab = [...state.tab, state.newTask];
          return {
           tab,
            newTask:{text:"",isComplete:false},
          };
        });
   
      };
      //function delete list
      onRemoveItem = i => {
        this.setState(state => {
          const tab = state.tab.filter((item, j) => i !== j);
          return {
            tab};
        });
      };
      // function change button complete
      onUpdateItem = i => {
        this.setState(state => {
          const tab = state.tab.map((item, j) => {
            if (i === j) return { text: item.text, isComplete: !item.isComplete };
            else return item;
          });
          return { tab };
        });
      };
    render() {
        return (
       <div className="application"> 
     <div className="title">
            <div className="first-part">  
                   <h1>To-Do App!</h1>
                   <h5>Add New To-DO</h5>
            </div>    
            
              <form className="second-part">
                   <input className="taskadd" type="text" onChange={this.onChangeText} onClick={this.cancelCourse} value={this.state.newTask.text}/>
                   <button className="boutton" onClick={this.onAdd}>Add</button>
        </form>
          
     </div>
      <List list={this.state.tab} remove={this.onRemoveItem} change={this.onUpdateItem}/>
      </div>   
        )
    }
}
