import React, { useState } from 'react';
import { Stack, Box } from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Product } from '../../types/product/product';
import { useMutation, useQuery } from '@apollo/client';
import { ProductsInquiry } from '../../types/product/product.input';
import TrendProductCard from './TrendProductCard';
import { GET_PRODUCTS } from '../../../apollo/user/query';
import { T } from '../../types/common';
import { LIKE_TARGET_PRODUCT } from '../../../apollo/user/mutation';
import { Message } from '../../enums/common.enum';
import { sweetMixinErrorAlert, sweetTopSmallSuccessAlert } from '../../sweetAlert';

interface TrendProductsProps {
	initialInput: ProductsInquiry;
}

const TrendProducts = (props: TrendProductsProps) => {
	const { initialInput } = props;
	const device = useDeviceDetect();
	const [trendProducts, setTrendProducts] = useState<Product[]>([]);

	/** APOLLO REQUESTS **/
	const [likeTargetProduct] = useMutation(LIKE_TARGET_PRODUCT);

	const {
		loading: getProductsLoading, // bu processda aniq animationlardi korsatar ekan
		data: getProductsData, // data kirib kelgunga qadar error bulsa pasdagi erroni beradi
		error: getProductsError,
		refetch: getProductsRefetch,
	} = useQuery(GET_PRODUCTS, {
		fetchPolicy: "cache-and-network", // birinchi cache oqib keyin networkga o'tiladi
		variables: {input: initialInput},
		notifyOnNetworkStatusChange:true,
		onCompleted: (data: T) => { 
			setTrendProducts(data?.getProducts?.list);
		},
	});
	/** HANDLERS **/

	const likeProductHandler = async (user: T, id: string ) => {
		try {
			if(!id) return;
			if(!user._id) throw new Error(Message.NOT_AUTHENTICATED);
			await likeTargetProduct({
				variables: {input: id} // postman da variables joyidagi input ga ID ni kiritishini sorayapmiz
			});
			await getProductsRefetch({ input: initialInput });

			await sweetTopSmallSuccessAlert("success", 800); // 800 = mili seconds
		} catch (err: any) {
			console.log('ERROR likePropertyHandler', err.message );
			sweetMixinErrorAlert(err.message).then();
		}
	};


	if (trendProducts) console.log('trendProducts:', trendProducts);
	if (!trendProducts) return null;

	if (device === 'mobile') {
		return (
			<Stack className={'trend-properties'}>
				<Stack className={'container'}>
					<Stack className={'info-box'}>
						<span>Trend Products</span>
					</Stack>
					<Stack className={'card-box'}>
						{trendProducts.length === 0 ? (
							<Box component={'div'} className={'empty-list'}>
								Trends Empty
							</Box>
						) : (
							<Swiper
								className={'trend-property-swiper'}
								slidesPerView={'auto'}
								centeredSlides={true}
								spaceBetween={15}
								modules={[Autoplay]}
							>
								{trendProducts.map((product: Product) => {
									return (
										<SwiperSlide key={product._id} className={'trend-property-slide'}>
											{/* <TrendProductCard product={product} likeProductHandler={likeProductHandler} /> */}
										</SwiperSlide>
									);
								})}
							</Swiper>
						)}
					</Stack>
				</Stack>
			</Stack>
		);
	} else {
		return (
			<Stack className={'trend-properties'}>
				<Stack className={'container'}>
					<Stack className={'info-box'}>
						<Box component={'div'} className={'left'}>
							<span>Trend Products</span>
							<p>Trend is based on likes</p>
						</Box>
						<Box component={'div'} className={'right'}>
							<div className={'pagination-box'}>
								<WestIcon className={'swiper-trend-prev'} />
								<div className={'swiper-trend-pagination'}></div>
								<EastIcon className={'swiper-trend-next'} />
							</div>
						</Box>
					</Stack>
					<Stack className={'card-box'}>
						{trendProducts.length === 0 ? (
							<Box component={'div'} className={'empty-list'}>
								Trends Empty
							</Box>
						) : (
							<Swiper
								className={'trend-property-swiper'}
								slidesPerView={'auto'}
								spaceBetween={15}
								modules={[Autoplay, Navigation, Pagination]}
								navigation={{
									nextEl: '.swiper-trend-next',
									prevEl: '.swiper-trend-prev',
								}}
								pagination={{
									el: '.swiper-trend-pagination',
								}}
							>
								{trendProducts.map((product: Product) => {
									return (
										<SwiperSlide key={product._id} className={'trend-property-slide'}>
											<TrendProductCard product={product} likeProductHandler={likeProductHandler}/>
										</SwiperSlide>
									);
								})}
							</Swiper>
						)}
					</Stack>
				</Stack>
			</Stack>
		);
	}
};

TrendProducts.defaultProps = {
	initialInput: {
		page: 1,
		limit: 8,
		sort: 'productLikes',
		direction: 'DESC',
		search: {},
	},
};

export default TrendProducts;
