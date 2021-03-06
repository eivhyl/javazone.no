import { Page, PageHeading, PageBody } from '../../components/page';
import { Block, BlockHeading, Columns, Column, BackgroundImage, ColumnHeading, P } from '../../components/textblock';
import header from '../../assets/academy/header.jpg';
import accenture from '../../assets/academy/accenture.jpg';
import kantega from '../../assets/academy/kantega.jpg';

const sponsors = [accenture, kantega];

export default () => (
    <Page name='trondheim'>
        <PageHeading background={header}>Academy Trondheim</PageHeading>
        <PageBody>
            <Block block={true}>
                <BlockHeading center={true}>Academy Trondheim – February 18th</BlockHeading>
                <Columns>
                    <Column center={true}>
                        Welcome to JavaZone Academy Trondheim! It will be a day packed
                        full of great talks, food and mingling. See the final
                        program below, and start getting excited.
                    </Column>
                </Columns>
            </Block>

            <ul className='academy__sponsors academy__sponsors--small'>
                {sponsors.map((sponsor, key) => (
                    <li key={key} className='academy__sponsor'>
                        <img className='academy__sponsor-image' src={sponsor} />
                    </li>
                ))}
            </ul>

            <Block block={true}>
                <Columns>
                    <Column>
                        <ul className='program'>
                            <li className='program__slot'>
                                <div className='program__hours'>1130</div>
                                <div className='program__event'>
                                    <div className='program__title'>Doors open</div>
                                </div>
                            </li>
                            <li className='program__slot'>
                                <div className='program__hours'>1200 - 1230</div>
                                <div className='program__event'>
                                    <div className='program__title'>Intro</div>
                                </div>
                            </li>
                            <li className='program__slot'>
                                <div className='program__hours'>1230 - 1330</div>
                                <div className='program__event'>
                                    <div className='program__title'>How to make your code sustainable - what they don’t teach you</div>
                                    <div className='program__speaker'>Christin Gorman</div>
                                </div>
                            </li>
                            <li className='program__slot'>
                                <div className='program__hours'>1330 - 1345</div>
                                    <div className='program__event'>
                                    <div className='program__title'>Break</div>
                                </div>
                            </li>
                            <li className='program__slot'>
                                <div className='program__hours'>1345 - 1445</div>
                                <div className='program__event'>
                                    <div className='program__title'>Universell utforming for alle!</div>
                                    <div className='programm__speaker'>Lotte Johansen</div>
                                </div>
                            </li>
                            <li className='program__slot'>
                                <div className='program__hours'>1445 - 1515</div>
                                <div className='program__event'>
                                    <div className='program__title'>Break w/snack</div>
                                </div>
                            </li>
                            <li className='program__slot'>
                                <div className='program__hours'>1515 - 1540</div>
                                <div className='program__event'>
                                    <div className='program__title'>Student lightning talks</div>
                                </div>
                            </li>
                            <li className='program__slot'>
                                <div className='program__hours'>1540 - 1640</div>
                                <div className='program__event'>
                                    <div className='program__title'>Playing with Hypermedia</div>
                                    <div className='programm__speaker'>Einar Høst</div>
                                </div>
                            </li>
                            <li className='program__slot'>
                                <div className='program__hours'>1640 - 1700</div>
                                <div className='program__event'>
                                    <div className='program__title'>Break</div>
                                </div>
                            </li>
                            <li className='program__slot'>
                                <div className='program__hours'>1700 - 1800</div>
                                <div className='program__event'>
                                    <div className='program__title'>Making Java more dynamic</div>
                                    <div className='programm__speaker'>Rafael Winterhalter</div>
                                </div>
                            </li>
                            <li className='program__slot'>
                                <div className='program__hours'>1800</div>
                                <div className='program__event'>
                                    <div className='program__title'>Food and drinks</div>
                                </div>
                            </li>
                        </ul>
                    </Column>
                </Columns>
            </Block>
        </PageBody>
    </Page>
);
