import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  constructor(){
    super();
    this.state = {data: {
            name: "Dr. Deepak. V",
            role: "Full Statck Developer",
            bio: "Software Architect & Minimalist.",
            status: [{label: "Posts", value: "84"},
                     {label: "Followers", value: "2.5k"},
                     {label: "Following", value: "190"}]
        }};
  }
  render() {
        const {data} = this.state;
        const BASEURL = import.meta.env.BASE_URL;
    return (
      <div>
        <div className='app'>
                <div className='profile'>
                    <img src={BASEURL+"user.png"} alt='' />
                    <div className='info'>
                        <legend className='name'>{data.name}</legend>
                        <legend className='role'>{data.role}</legend>
                        <legend className='bio'>{data.bio}</legend>
                        <button className='follow'>Follow</button>
                        <button className='message'>Message</button>
                    </div>
                </div>
                <div className='status'>
                    {data.status.map((d)=>(
                        <div className='info'>
                            <legend className='value'>{d.value}</legend>
                            <legend className='label'>{d.label.toUpperCase()}</legend>
                        </div>
                    ))}
                </div>
            </div>
      </div>
    )
  }
}
