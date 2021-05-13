import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import './main.css';

// list of items
const list = [
  { src: 'https://www.vectorlogo.zone/logos/java/java-ar21.svg' },
  { src: 'https://www.vectorlogo.zone/logos/python/python-horizontal.svg' },
  { src: "https://www.vectorlogo.zone/logos/pytorch/pytorch-ar21.svg" },
  { src: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-ar21.svg" },
  { src: "https://www.vectorlogo.zone/logos/numpy/numpy-ar21.svg" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" },
  { src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg" },
  { src: "https://www.vectorlogo.zone/logos/docker/docker-ar21.svg" }
];

// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
  return <div
    className={`menu-item ${selected ? 'active' : ''}`}
    ><img className="zoom" src={text} draggable="false"/>   </div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {src} = el;

    return <MenuItem text={src} key={src} selected={selected} />;
  });


const Arrow = ({ text, className }) => { 
    {
    if(text==">"){
      return (<div
      className={className}
      >
      <ArrowRightIcon fontSize="large"/>
      </div>
        );
    }
    else{
        return (<div
            className={className}
            >
            <ArrowLeftIcon fontSize="large"/>
            </div>
              );
        }
    }   
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = 'item3';

export default class TechTools extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }

  state = {
    selected
  };

  onSelect = key => {
    this.setState({ selected: key });
  }


  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;

    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}