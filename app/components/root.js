import Nav from './nav';
import Footer from './footer';
import className from 'className';
import {defer, when} from 'q';
import backgroundBlurred from '../assets/bg_pattern.jpg';
import bgStripes from '../assets/bg_stripes.png';

function getImage(src) {
    const deferred = defer();
    const img = new Image();
    img.onload = _ => deferred.resolve(src);
    img.src = src;
    return deferred;
}

const Root = React.createClass({

    getInitialState() {
        return {
            loaded: false,
            style: {
                background: 'none'
            }
        };
    },

    componentDidMount() {
        when(getImage(backgroundBlurred))
        .then(result => {
            this.setState({
                loaded: true,
                style: {
                    background: `url('${bgStripes}') no-repeat top right / 50% 50%, url('${backgroundBlurred}') repeat`
                }
            });
        });
    },

    render() {
        const classes = className('javazone', {
            'javazone--visible': this.state.loaded
        });

        return (
            <div className={classes} style={this.state.style}>
                <div className='javazone__container'>
                    <Nav {...this.props} />
                </div>
                <div className="javazone__page">
                    {this.props.children}
                    <div className='javazone__container'>
                        <div className="javazone__footer">
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});

export default Root;