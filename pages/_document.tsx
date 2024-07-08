import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="robots" content="index,follow" />
				<link rel="icon" type="image/png" href="/img/logo/favicon.svg" />

				{/* SEO */}
				<meta name="keyword" content={'nestar, nestar.uz, devex mern, mern nestjs fullstack'} />
				<meta
					name={'description'}
					content={
						'Buy and sell goods anywhere anytime in South Korea. Best products at Best prices on hankang.uz  | ' +
						'Покупайте и продавайте товары в любом месте и в любое время в Южной Корее. Лучшие товары по лучшим ценам на hankang.uz | ' +
						'대한민국 언제 어디서나 물건을 사고팔 수 있습니다. hankang.uz에서 최고의 가격으로 최고의 제품을 만나보세요'
					}
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
