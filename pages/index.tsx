import { NextPage } from 'next';
import useDeviceDetect from '../libs/hooks/useDeviceDetect';
import withLayoutMain from '../libs/components/layout/LayoutHome';
import CommunityBoards from '../libs/components/homepage/CommunityBoards';
import PopularProducts from '../libs/components/homepage/PopularProducts';
import TopSellers from '../libs/components/homepage/TopSellers';
import Events from '../libs/components/homepage/Events';
import TrendProducts from '../libs/components/homepage/TrendProducts';
import { Stack } from '@mui/material';
import Advertisement from '../libs/components/homepage/Advertisement';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }: any) => ({
	props: {
		...(await serverSideTranslations(locale, ['common'])),
	},
});

const Home: NextPage = () => {
	const device = useDeviceDetect();

	if (device === 'mobile') {
		return (
			<Stack className={'home-page'}>
				<TrendProducts />
				<PopularProducts />
				<Advertisement />
				<TopSellers />
			</Stack>
		);
	} else {
		return (
			<Stack className={'home-page'}>
				<TrendProducts />
				<PopularProducts />
				<Advertisement />
				<TopSellers />
				<Events />
				<CommunityBoards />
			</Stack>
		);
	}
};

export default withLayoutMain(Home);
