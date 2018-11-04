// import React, { Component } from 'react';

// import DashBoardContent from './DashBoardContent';

// export default class DashBoardContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [{
//         id: 1,
//         title: 'Dr',
//         startDate: '11/1/2018',
//         endDate: '3/1/2019',
//         link: 'http://elegantthemes.com/quis/turpis.aspx?orci=fusce&luctus=consequat&et=nulla&ultrices=nisl&posuere=nunc&cubilia=nisl&curae=duis&nulla=bibendum&dapibus=felis&dolor=sed&vel=interdum&est=venenatis&donec=turpis&odio=enim&justo=blandit',
//         image: 'http://dummyimage.com/181x188.png/cc0000/ffffff',
//       }, {
//         id: 2,
//         title: 'Rev',
//         startDate: '11/1/2018',
//         endDate: '3/1/2019',
//         link: 'http://artisteer.com/ligula/in/lacus.png?tempus=fusce&vel=posuere&pede=felis&morbi=sed&porttitor=lacus&lorem=morbi&id=sem&ligula=mauris&suspendisse=laoreet&ornare=ut&consequat=rhoncus&lectus=aliquet&in=pulvinar&est=sed&risus=nisl&auctor=nunc&sed=rhoncus&tristique=dui&in=vel&tempus=sem&sit=sed&amet=sagittis&sem=nam&fusce=congue&consequat=risus&nulla=semper&nisl=porta&nunc=volutpat&nisl=quam&duis=pede&bibendum=lobortis&felis=ligula&sed=sit&interdum=amet&venenatis=eleifend&turpis=pede&enim=libero&blandit=quis&mi=orci&in=nullam&porttitor=molestie&pede=nibh&justo=in&eu=lectus&massa=pellentesque&donec=at&dapibus=nulla&duis=suspendisse&at=potenti&velit=cras&eu=in&est=purus&congue=eu&elementum=magna&in=vulputate&hac=luctus',
//         image: 'http://dummyimage.com/218x132.png/ff4444/ffffff',
//       }, {
//         id: 3,
//         title: 'Ms',
//         startDate: '11/1/2018',
//         endDate: '3/1/2019',
//         link: 'http://cocolog-nifty.com/integer/ac.js?at=lectus&nibh=pellentesque&in=at&hac=nulla&habitasse=suspendisse&platea=potenti&dictumst=cras&aliquam=in&augue=purus&quam=eu&sollicitudin=magna&vitae=vulputate&consectetuer=luctus&eget=cum&rutrum=sociis&at=natoque&lorem=penatibus&integer=et&tincidunt=magnis&ante=dis&vel=parturient&ipsum=montes&praesent=nascetur&blandit=ridiculus&lacinia=mus&erat=vivamus&vestibulum=vestibulum&sed=sagittis&magna=sapien&at=cum&nunc=sociis&commodo=natoque&placerat=penatibus&praesent=et&blandit=magnis&nam=dis&nulla=parturient&integer=montes&pede=nascetur&justo=ridiculus&lacinia=mus&eget=etiam&tincidunt=vel&eget=augue&tempus=vestibulum',
//         image: 'http://dummyimage.com/245x216.bmp/cc0000/ffffff',
//       }, {
//         id: 4,
//         title: 'Rev',
//         startDate: '11/1/2018',
//         endDate: '3/1/2019',
//         link: 'https://ning.com/sodales/scelerisque/mauris/sit.jsp?magnis=nullam',
//         image: 'http://dummyimage.com/180x238.png/ff4444/ffffff',
//       }, {
//         id: 5,
//         title: 'Ms',
//         startDate: '11/1/2018',
//         endDate: '3/1/2019',
//         link: 'https://ameblo.jp/augue/vestibulum/rutrum/rutrum/neque/aenean.aspx?posuere=lacus&nonummy=morbi&integer=sem&non=mauris&velit=laoreet&donec=ut&diam=rhoncus&neque=aliquet&vestibulum=pulvinar&eget=sed&vulputate=nisl&ut=nunc&ultrices=rhoncus&vel=dui&augue=vel&vestibulum=sem&ante=sed&ipsum=sagittis&primis=nam&in=congue&faucibus=risus&orci=semper&luctus=porta&et=volutpat&ultrices=quam&posuere=pede&cubilia=lobortis&curae=ligula&donec=sit&pharetra=amet&magna=eleifend&vestibulum=pede&aliquet=libero&ultrices=quis&erat=orci&tortor=nullam&sollicitudin=molestie&mi=nibh&sit=in&amet=lectus&lobortis=pellentesque&sapien=at&sapien=nulla&non=suspendisse&mi=potenti&integer=cras&ac=in&neque=purus&duis=eu&bibendum=magna&morbi=vulputate&non=luctus&quam=cum&nec=sociis&dui=natoque&luctus=penatibus&rutrum=et&nulla=magnis&tellus=dis&in=parturient&sagittis=montes&dui=nascetur&vel=ridiculus&nisl=mus&duis=vivamus&ac=vestibulum&nibh=sagittis&fusce=sapien&lacus=cum&purus=sociis&aliquet=natoque',
//         image: 'http://dummyimage.com/155x157.jpg/ff4444/ffffff',
//       }],
//     };
//   }

//   render() {
//     const { data } = this.state;
//     return (
//       <div>
//         {data.map(entry => (
//           <DashBoardContent
//             key={entry.id}
//             entry={entry}
//           />
//         ))
//       }
//       </div>

//     );
//   }
// }
