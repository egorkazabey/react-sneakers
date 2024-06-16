import './SideBar.scss'
import Box from '../../assets/box.png'
import Arr from '../../assets/box-arr.svg'
import Header from '../header/Header.jsx'


const SideBar = () => {
	
		const log = () => {
			'1234567'
		}
	
		return (
			<>
				<div className='SideBar' >
					<div className='side-bar'>
						<h5>Корзина</h5>
						<div className='box-block'>
							<img src={Box} />
							<h6 className='box-title'>Корзина пустая</h6>
							<p>Добавьте хотя бы одну пару <br /> кроссовок, чтобы сделать заказ.</p>
						</div>
						
						<button>
							<img src={Arr} className='arr' />
							Вернуться назад
						</button>
					</div>
					<Header console={log}/>
				</div>
			</>
		)
}

export default SideBar