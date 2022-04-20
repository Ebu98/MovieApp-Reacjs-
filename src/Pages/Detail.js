// import React, { useEffect,useState } from 'react';

// const Detail=(props)=>{
//     const [location,setLocation] = useState(true)
//     const [history, setHistory] = useState( '')

//     useEffect( ()=>{
//     //  const { location, history } = location.props;
//      if(location.state === undefined) {
//          history.push('/');
//      }
//  },[])
//  const { state } = props.location;
//  if (state) {
//      return <span>{state.title}</span>;
//    }
//     else
//      return null;

//  }

//  export default Detail;
import React from "react";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   title: this.props.state.title || '',
      location: this.props.state.location || '',
      history: this.props.state.history|| '',
    };
  }
  componentDidMount() {
    const { state } = this.props;
    const { location, history } =state;
    this.setState({ location, history });

    // const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { state } = this.props.location;
    if (state) {
      return <span>{state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
