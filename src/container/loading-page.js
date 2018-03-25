import React from 'react';
import { Loader } from '../components/loader';
import { Results } from './searchresult';
import { Redirect } from 'react-router-dom';
export class Page extends React.Component {
    componentDidMount(){
        var seconds=1;
        this.timeoutHandle = setTimeout(()=>{
            seconds--;
            console.log("test");
          //  this.apply();
        }, 5000);
   }
    /*apply = ()=>{
       return(<Redirect to="searchresults"/>);
   }*/
   componentWillUnmount(){
        clearTimeout(this.timeoutHandle);
   }
    render() {
        return (
            <div className="load">
                <Loader />
            </div>
        );
    }
}