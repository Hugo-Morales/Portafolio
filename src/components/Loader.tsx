import spinner from '../resources/img/spinner.gif';

export default function Spinner() {
    return (
        <img 
            src={spinner} 
            style = {{width:'200px', margin:'auto', display:'block'}}
            alt='Loading'
        />
    )
}