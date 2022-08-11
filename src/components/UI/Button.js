const Button = props => {
 return (
    <button type={props.type || 'button'} onClick={props.onClick}/>
 );
};

export default Button;