import React from 'react';
import ModelController from './main.js'
import './Model.css'

class Model extends ModelController {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() { 
        return (
        <div className='fuzzyLogicContent'>
            <div>
                <h1>Fuzzy logic</h1>
            </div>
            <div className='fuzzyLogic'>
                <h3 className='fuzzyLogic__lable'>Rang</h3>
                <input type='range' className='fuzzyLogic__rangeInput'/>
            </div>
            <div className='fuzzyLogic'>
                <h3>Salary</h3>
                <input type='number' step={100} className='fuzzyLogic__rangeInput' value={this.rang}/>
            </div>
            <div className='fuzzyLogic'>
                <h3>Bribe size</h3>
                <input type='number' step={10} className='fuzzyLogic__rangeInput'/>
            </div>
            <div className='fuzzyLogic'>
                <h3>Company transparency level</h3>
                <input type='number' step={100} className='fuzzyLogic__rangeInput'/>
            </div>
            <div className='fuzzyLogic'>
                <h3>Company corruption level</h3>
                <input type='number' step={100} className='fuzzyLogic__rangeInput'/>
            </div>
            <div className='fuzzyLogic'>
                <h3>Faith</h3>
                <input type='number' step={100} className='fuzzyLogic__rangeInput'/>
            </div>
            <div className='fuzzyLogicResult'>
                <h3>Result: </h3>
            </div>
        </div>);
    }
}
 
export default Model;