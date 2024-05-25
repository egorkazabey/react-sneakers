import './Header.scss'
import Logo from '../../assets/logo.svg'
import Basket from '../../assets/basket.svg'
import Profile from '../../assets/profile.svg'
import Heart from '../../assets/heart.svg'

const Header = () => {
    return (
        <>
        <div className="container">
        <header className='header'>
            <div className='leftside'>
                <img src={Logo} alt="" className="logo" />
                <div>
                    <h3>REACT SNEAKERS</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className="rightside">
                <div className="basket">
                    <div className="flex">
                        <img src={Basket} alt="basket" />
                        <li><span>1205 руб.</span></li>
                    </div>
                </div>
                <div className="heart">
                    <div className="flex">
                        <img src={Heart} alt="heart" className='heart'/>
                        <li>Закладки</li>
                    </div>
                </div>
                <div className="profile">
                    <div className="flex">
                        <img src={Profile} alt="user" />
                        <li>Профиль</li>    
                    </div>
                </div>
            </div>
        </header>
        </div>
        <hr />
        </>
    )
}

export default Header;