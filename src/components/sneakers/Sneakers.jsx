import './Sneakers.scss'
import Sneaker from '../../assets/snk1.jpeg'
import Plus from '../../assets/plus.svg'

const Sneakers = () => {
    return (
        <div className="container">
            <main>
                <div className="top">
                    <div className="rightside">
                        <h1>Все кроссовки</h1>
                    </div>
                    <div className="leftside">
                        <div className="input">
                            <input type="text" placeholder='Поиск...'/>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src={Sneaker} alt="" />
                        <p className='name'>Мужские Кроссовки <br /> Nike Blazer Mid Suede</p>
                        <div className="bottom">
                            <p className="price">Цена: <br/><span>12 999 руб.</span></p>
                            <div className="plus">
                                <img src={Plus} alt="plus" className='plus-img' />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Sneaker} alt="" />
                        <p className='name'>Мужские Кроссовки <br /> Nike Blazer Mid Suede</p>
                        <div className="bottom">
                            <p className="price">Цена: <br/><span>12 999 руб.</span></p>
                            <div className="plus">
                                <img src={Plus} alt="plus" className='plus-img' />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Sneaker} alt="" />
                        <p className='name'>Мужские Кроссовки <br /> Nike Blazer Mid Suede</p>
                        <div className="bottom">
                            <p className="price">Цена: <br/><span>12 999 руб.</span></p>
                            <div className="plus">
                                <img src={Plus} alt="plus" className='plus-img' />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Sneaker} alt="" />
                        <p className='name'>Мужские Кроссовки <br /> Nike Blazer Mid Suede</p>
                        <div className="bottom">
                            <p className="price">Цена: <br/><span>12 999 руб.</span></p>
                            <div className="plus">
                                <img src={Plus} alt="plus" className='plus-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Sneakers