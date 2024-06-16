import { Component } from 'react'
import Plus from '../../assets/plus.svg'
import './ListItem.scss'


class ListItem extends Component {
	products = [
		{id: 1, title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12 999', img: '../../../public/sneakers-img/sneaker-1.jpeg'},
		{id: 2, title: 'Мужские Кроссовки Nike Air Max 270', price: '12 999', img: '../../../public/sneakers-img/sneaker-2.jpeg'},
		{id: 3, title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 499', img: '../../../public/sneakers-img/sneaker-3.jpeg'},
		{id: 4, title: 'Кроссовки Puma X Aka Boku Future Rider', price: '8 999', img: '../../../public/sneakers-img/sneaker-4.jpeg'},
		{id: 5, title: 'Мужские Кроссовки Under Armour Curry 8', price: '15 199', img: '../../../public/sneakers-img/sneaker-5.jpeg'},
		{id: 6, title: 'Мужские Кроссовки Nike Kyrie 7', price: '11 299', img: '../../../public/sneakers-img/sneaker-6.jpeg'},
		{id: 7, title: 'Мужские Кроссовки Jordan Air Jordan 11', price: '10 789', img: '../../../public/sneakers-img/sneaker-7.jpeg'},
		{id: 8, title: 'Мужские Кроссовки Nike LeBron XVIII', price: '13 999', img: '../../../public/sneakers-img/sneaker-8.jpeg'},
		{id: 9, title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 499', img: '../../../public/sneakers-img/sneaker-9.jpeg'},
		{id: 10, title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 999', img: '../../../public/sneakers-img/sneaker-10.jpeg'},
		{id: 11, title: 'Кроссовки Puma X Aka Boku Future Rider', price: '11 299', img: '../../../public/sneakers-img/sneaker-11.jpeg'},
		{id: 12, title: 'Мужские Кроссовки Nike Kyrie Flytrap IV', price: '11 299', img: '../../../public/sneakers-img/sneaker-12.jpeg'}
	]
	
	listItems = this.products.map(product =>

		<li className='card' key={this.id}>
			<img src={product.img} alt="" />
			<p className='name'>{product.title}</p>
			<div className="bottom">
				<p className="price">Цена: <br/><span>{product.price} руб.</span></p>
				<div className="plus">
					<img src={Plus} alt="plus" className='plus-img' />
				</div>
			</div>
		</li>
	)
	
	render() {
		return (
			<div className='cards'>
				{this.listItems}
			</div>
		)
	}
}


export default ListItem;