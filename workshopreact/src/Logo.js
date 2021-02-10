import logo from './img/logoPizza.png';

console.log(logo);

function Header() {
    return <img src={logo} style={{width:'75px'}}/>
}

export default Header;