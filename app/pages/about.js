import header from '../assets/javabin_header.jpg';
import github from '../assets/about/github.png';
import trackjs from '../assets/about/trackjs.png';
import heroes from '../data/heroes';
import * as array from '../util/array';
import { Page, PageHeading, Container } from '../components/page';
import {Block, Columns, Column, ColumnHeading, P} from '../components/textblock';

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript#6274381
function shuffle(o){
    for(let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

const imagesContext = require.context('../assets/javabin/', false, /\.jpg$/);
const images = imagesContext.keys().map(image => imagesContext(image));

function getImage(images, imageName) {
    return array.find(images, image => (
        image.indexOf(imageName) >= 0
    ));
}

function removeScheme(url) {
    return url.replace('https://', '').replace('http://', '');
}

const shuffledHeroes = shuffle(heroes).map(hero => (
    {name: hero.name, image: getImage(images, hero.image), hasLink: (typeof hero.url === 'string'), url: hero.url}
));

const headerStyle = {
    backgroundImage: `url('${header}')`
};

const Hero = ({image, name, hasLink, url}) => {
    const label = hasLink
        ? <a href={url} target='_blank' className='about__hero-url'>{removeScheme(url)}</a>
        : '';

    return (
        <li className='about__hero'>
            <div className='about__hero-info'>
                <span className='about__hero-name'>{name}</span>
                {label}
            </div>
            <img src={image} className='about__hero-image'/>
        </li>
    );
};

export default () => (
    <Page>
        <PageHeading background={header}>

        </PageHeading>
        <Container>
            <div className='textblock textblock--first'>
                <div className='textblock__column textblock__column--centered'>
                    <div className='textblock__text'>
                        <h2 className='textblock__title'>Working day and night, creating JavaZone…</h2>
                        <p>
                            JavaZone is a conference organized by and for a great community of developers.
                            More than 50 community members from javaBin are working throughout the year
                            to make the conference possible.
                        </p>
                        <p>
                            The conference has been held in the heart of Oslo for 14 consecutive years,
                            and JavaZone 2016 will be the 15th time we arrange the conference. Help us
                            celebrate the conference, and swing by the javaBin chillout lounge to talk
                            with us and maybe join in on the fun next year.
                        </p>
                    </div>
                </div>
            </div>

            <div className='textblock'>
                <div className='textblock__column'>
                    <div className='textblock__text'>
                        <h2 className='textblock__title'>Open Source</h2>
                        <p>
                            We make almost every piece of software used to run the conference ourselves.
                            And, as a true independent organization, we open source most of it as well.
                            You can find most of our software over at <a href="https://github.com/javabin">Github</a>
                        </p>
                    </div>
                </div>
                <ul className='textblock__column textblock__column--centered about__services'>
                    <li className='about__service'>
                        <a href='https://github.com/javabin'>
                            <img src={github} className='about__service-icon' />
                        </a>
                    </li>
                    <li className='about__service'>
                        <a href='https://trackjs.com'>
                            <img src={trackjs} className='about__service-icon' />
                        </a>
                    </li>
                </ul>
            </div>

            <Block>
                <Column center={true}>
                    <ColumnHeading>The Heroes</ColumnHeading>
                    <P>
                        JavaZone certainly does not make itself. The people
                        below work tirelessly all year around to make sure your
                        conference experience will be perfect.
                    </P>
                </Column>
            </Block>

            <ul className='about__heroes'>
                {shuffledHeroes.map((hero, hk) => (<Hero key={hk} {...hero} />))}
            </ul>
        </Container>
    </Page>
);
