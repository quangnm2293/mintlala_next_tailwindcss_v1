import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../store/GlobalState';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import { displayPrice } from '../../utils/validProduct';

function OrderDetail() {
	const router = useRouter();
	const { id } = router.query;

	const { state, dispatch } = useContext(DataContext);
	const { auth } = state;
	const { token } = auth;

	const [total, setTotal] = useState(0);

	const [orderDetail, setOrderDetail] = useState({ user: { email: '' }, cart: [] });

	useEffect(() => {
		let isCancelled = false;

		const fetOrders = async () => {
			try {
				await axios
					.get(`/api/order/${router.query.id}`, { headers: { Authorization: token } })
					.then(res => {
						if (!isCancelled) {
							if (res.data.err)
								return dispatch({ type: 'NOTIFY', payload: { error: res.data.err } });
							setOrderDetail(res.data.order);
						}
					});
			} catch (err) {
				dispatch({ type: 'NOTIFY', payload: { error: err.message } });
			}
		};
		if (id && token) fetOrders();

		const getTotal = () => {
			const res = orderDetail.cart.reduce((prev, item) => {
				return prev + item.priceSale * item.quantity;
			}, 0);
			setTotal(res);
		};
		getTotal();
		return () => {
			isCancelled = true;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [orderDetail.cart, id, token]);

	const handleDelivered = async id => {
		dispatch({ type: 'NOTIFY', payload: { loading: true } });
		await axios.patch(`/api/order/${id}`).then(res => {
			if (res.data.err) return dispatch({ type: 'NOTIFY', payload: { error: res.data.err } });
			setOrderDetail(res.data.order);
			return dispatch({ type: 'NOTIFY', payload: { success: res.data.msg } });
		});
		await axios.get('/api/order', { headers: { Authorization: auth.token } }).then(res => {
			if (res.data.err) return dispatch({ type: 'NOTIFY', payload: { error: res.data.err } });
			dispatch({ type: 'ADD_ORDERS', payload: res.data.orders });
		});
	};
	if (!auth.user) return null;
	if (orderDetail === {}) return null;

	return (
		<div className='my-3'>
			<Head>
				<title>Chi ti???t ????n h??ng</title>
			</Head>

			<div>
				<button className='btn btn-secondary' onClick={() => router.back()} style={{ minWidth: 120 }}>
					<i className='fas fa-long-arrow-alt-left' aria-hidden></i> Tr??? l???i
				</button>
			</div>

			<div className='my-4 mx-auto'>
				<div>
					<h2>Chi ti???t ????n h??ng {orderDetail._id ? orderDetail._id.substring(20, 24) : ''}</h2>
					<p>
						<strong>T??n:</strong> {orderDetail.fullName}
					</p>
					<p>
						<strong>Email:</strong>{' '}
						{orderDetail.user.email === 'miqshop261192@gmail.com'
							? 'GUEST'
							: orderDetail.user.email}
					</p>
					<p>
						<strong>?????a ch???:</strong> {orderDetail.address}
					</p>
					<p>
						<strong>S??? ??i???n tho???i:</strong> {orderDetail.phone}
					</p>

					<p>
						<strong>T???ng s??? ti???n c???n thanh to??n:</strong>{' '}
						<span className='text-danger'>
							<small>&#x20AB;</small>
							{orderDetail.delivered
								? 0
								: total < 500000
								? displayPrice(total + 20000)
								: displayPrice(total)}
						</span>
					</p>
					<p>
						<strong>Ph????ng th???c thanh to??n:</strong>{' '}
						{orderDetail.paymentMethod === 'transfer' ? (
							<span className='text-danger'>
								Vui l??ng chuy???n kho???n qua stk: 0441000733443 Nguy???n Minh Quang -
								Vietcombank v???i n???i dung ten_sodienthoai
							</span>
						) : (
							'Thanh to??n khi nh???n h??ng'
						)}
					</p>
					<p>
						<strong>Tr???ng th??i:</strong>{' '}
						{orderDetail.isPaid
							? `???? thanh to??n l??c ${new Date(orderDetail.updatedAt).toLocaleString()}`
							: 'Ch??a thanh to??n'}
					</p>
				</div>

				<div
					className={
						orderDetail.delivered
							? 'alert alert-success d-flex justify-content-between align-items-center'
							: 'alert alert-danger d-flex justify-content-between align-items-center'
					}
					role='alert'
					style={{ maxWidth: 600 }}
				>
					{orderDetail.delivered
						? `???? giao h??ng l??c ${new Date(orderDetail.updatedAt).toLocaleString()}`
						: 'Ch??a giao h??ng'}
					{auth.user.role === 'admin' && !orderDetail.delivered && (
						<button className='btn btn-dark' onClick={() => handleDelivered(orderDetail._id)}>
							????nh d???u ???? giao
						</button>
					)}
				</div>

				<h3 className='text-center'>Chi ti???t s???n ph???m</h3>

				<div className='table-responsive my-4'>
					<table className='table table-bordered table-striped'>
						<thead>
							<tr>
								<th>STT</th>
								<th style={{ minWidth: '200px' }}>T??n s???n ph???m</th>
								<th style={{ minWidth: '100px' }}>S??? l?????ng</th>
								<th>Gi??</th>
							</tr>
						</thead>
						<tbody>
							{orderDetail.cart.map(item => (
								<tr key={item._id}>
									<td className='align-middle'>
										<Link href={`/product/${item._id}`}>
											<a>
												{/* eslint-disable-next-line @next/next/no-img-element  */}
												<img
													className='img-thumbnail'
													src={item.images[0].url}
													alt='s???n ph???m'
													style={{
														height: 65,
														width: 65,
														minWidth: 70,
													}}
												></img>
											</a>
										</Link>
									</td>
									<td className='align-middle text-capitalize'>
										<Link href={`/product/${item._id}`}>
											<a>
												<strong>{item.title}</strong>
											</a>
										</Link>
									</td>
									<td className='align-middle text-capitalize'>{item.quantity}</td>
									<td className='align-middle text-capitalize text-danger'>
										<small>&#x20AB;</small>
										{displayPrice(item.priceSale * item.quantity)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default OrderDetail;

