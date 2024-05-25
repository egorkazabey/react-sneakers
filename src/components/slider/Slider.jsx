import './Slider.scss'
import sliderLogo from '../../assets/slider-logo.svg' 
import sliderImg from '../../assets/slider-img.png'

const Slider = () => {
    return (
        <div className="container">
                <div className="slider-card">
                    
                    <div className="rightside">
                        <img src={sliderLogo} alt="logo" className="slider-logo" />
                        <h3><span>Stan Smith</span>, <br /> Forever!</h3>
                        <button className="buy">Купить</button>
                    </div>

                    <div className="leftside">
                        <img src={sliderImg} alt="" className='slider-img'/>
                    </div>
                </div>
        </div>
    )
}

export default Slider;