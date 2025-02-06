import{Button } from 'react-bootstrap'
function From(props) {
    return ( 
        <>
        <div>
    <label>{props.labelle}</label>
    <input type="text" name={props.namee}></input>
    <Button variant="primary">inc</Button>
    </div>
    </>
     );
}

export default From;