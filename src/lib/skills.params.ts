import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'js',
		color: 'yellow',
		description:
			'JavaScript is a versatile and widely-used programming language that is primarily employed to add interactivity and dynamic elements to websites. As a client-side scripting language, it runs directly within the user webbrowser, enabling developers to manipulate web page content, handle user input, and create interactive web applications, while also being utilized on the server-side with frameworks like Node.js. Its flexibility and widespread adoption make it a fundamental tool for webdevelopment, contributing to the rich and engaging experiences users encounter while browsing the internet.',
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'css',
		color: 'blue',
		description:
			'CSS (Cascading Style Sheets) is a stylesheet language used in web development to control the presentation and layout of HTML documents. It works alongside HTML to define how elements should be displayed on a webpage, allowing developers to customize the appearance of text, colors, fonts, spacing, positioning, and other visual aspects. By separating the content from its presentation, CSS enables consistent and efficient design across multiple web pages and ensures a more accessible and user-friendly experience for visitors. With CSS, web designers can create visually appealing and responsive websites that adapt to different screen sizes and devices.',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description:
			'HTML (Hypertext Markup Language) is the standard markup language used in web development to create the structure and content of web pages. It consists of a series of elements or tags that define the different components of a webpage, such as headings, paragraphs, images, links, forms, and more. HTML allows developers to organize and present information in a structured manner, making it accessible and understandable to both browsers and users. When a web browser interprets the HTML code, it renders the page, displaying the content and applying any associated CSS styles for visual presentation. HTML is the backbone of the World Wide Web, providing the foundation for creating websites and web applications.',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'sass',
		color: 'pink',
		description:
			'Sass (Syntactically Awesome Style Sheets) is a popular extension of CSS, a preprocessor that adds powerful features and capabilities to traditional CSS. It enhances the way developers write and organize their stylesheets, making CSS code more maintainable and efficient. Sass introduces variables, which allow for easy reuse of values throughout the stylesheet. It also supports nesting, enabling developers to nest selectors inside one another, making the code structure more intuitive and reducing repetition. Another essential feature of Sass is mixins, which are reusable blocks of CSS properties and values that can be included in different parts of the stylesheet. Additionally, Sass supports mathematical operations, making it easier to perform calculations directly in the stylesheet. All these features help streamline the CSS development process, improve code readability, and reduce the chances of errors, ultimately leading to more maintainable and scalable stylesheets. After writing Sass code, it needs to be compiled into standard CSS before deployment to ensure browser compatibility.',
		logo: Assets.Sass,
		name: 'Sass'
	}),
	s({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'React is a widely-used JavaScript library for building user interfaces. Developed by Facebook, it follows a component-based architecture, allowing developers to create reusable UI components and efficiently manage their state. React utilizes a virtual DOM to optimize rendering performance, reducing the number of updates needed to the actual DOM for smoother user experiences. Its one-way data flow ensures a clear and predictable flow of data from parent to child components. Reacts popularity is attributed to its modularity, maintainability, and performance, making it a top choice for creating interactive and dynamic web applications.',
		logo: Assets.ReactJs,
		name: 'React Js'
	}),
	s({
		slug: 'svelte',
		color: 'orange',
		description: "Svelte is a modern JavaScript framework known for its performance-oriented approach, where most of the work is done at compile-time rather than runtime. It compiles components into highly optimized vanilla JavaScript, leading to smaller and faster applications. With its intuitive syntax and built-in reactivity, Svelte allows developers to create reusable components and manage state efficiently. Its focus on performance and simplicity has made it increasingly popular among web developers for building high-quality user interfaces and applications.",
		logo: Assets.Svelte,
		name: 'Svelte'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
