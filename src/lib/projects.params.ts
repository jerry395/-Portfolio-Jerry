import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'slick-portfolio-React',
		color: '#5e95e3',
		description:
			'GL Engineers is a company that specializes in electrical panels and engineering projects in Pereira city. As part of their innovation process, they required the development a software that would enable them to read the electrical variables from their products with IoT connectivity. They aimed to launch this software to the market as a new complementary service to the products they were already manufacturing within the company, which they named GLEM (GL Energy Manager).',
		links: [{ to: 'http://glem.com.co/', label: 'URL' }],
		logo: Assets.ReactJs,
		name: 'GLEM',
		period: {
			from: new Date()
		},
		skills: getSkills('reactjs', 'postgres', 'tailwind'),
		type: 'IOT Readings'
	},
	{
		slug: 'slick-portfolio-ATHERAC',
		color: '#ff3e00',
		description:
			'Atherac is a French real estate agency, which has formed a team of advisors dedicated exclusively to the rental of chalets, apartments and studios.Given their post-covid growth, they decided to expand to the La Clusaz area, a French commune famous for its beautiful landscapes throughout the year, especially visited in winter.The project consisted of making the properties available in that region visible through advertising on social networks and the development of a web page that preserved the aesthetics of the other pages of different regions.',
		links: [{ to: 'https://www.laclusaz-reservation.com/agence-atherac/', label: 'URL' }],
		logo: Assets.Unknown,
		name: 'ATHERAC',
		period: {
			from: new Date()
		},
		skills: getSkills('html', 'css'),
		type: 'Website'
	},
	{
		slug: 'slick-portfolio-emapta',
		color: '#5e95e3',
		description:
			'Emapta is a outsourcing company providing offshore staffing services with expertly sourced and immediately accessible talent that aligns with your operational standards, brand and culture. This webpage was made to put in practice my skills in vanilla html and css, it searches for a candidate and shows the status of all their processes within the company.',
		links: [{ to: 'https://www.emaptalatam.com/', label: 'URL' }],
		logo: Assets.CSS,
		name: 'EMAPTA Latam',
		period: {
			from: new Date()
		},
		skills: getSkills('html', 'js', 'css'),
		type: 'Website'
	}
	
];

export default MY_PROJECTS;
