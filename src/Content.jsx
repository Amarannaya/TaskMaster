import React from 'react';
import Service1 from './images/addtask.jpg';
import Service2 from './images/deletetask.jpg';
import Service3 from './images/sharetask.jpg';
import Service4 from './images/marktask.jpg';

function Content() {
  return (
    <section id="services">
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center', background: '#160F29', color: '#FFB60A' }}>With our App, you can:</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <div style={{ width: 'calc(45% - 1rem)', marginBottom: '2rem', textAlign:'center' }}>
          <img src={Service1} alt="Service 1" style={{ width: '50%', marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.5rem',color:'#160F29', fontWeight: 'bold', textAlign:'center'}}>Add Tasks</h3>
          <p>You can enter a description of a new task in the input field and click the "Add Task" button to add it to the list of tasks stored in the smart contract.</p>
        </div>
        <div style={{ width: 'calc(55% - 1rem)', marginBottom: '2rem' , textAlign:'center'}}>
          <img src={Service4} alt="Service 2" style={{ width: '50%', marginBottom: '1rem', textAlign:'center' }} />
          <h3 style={{ fontSize: '1.5rem',color:'#160F29', fontWeight: 'bold', textAlign:'center' }}>Mark Tasks</h3>
          <p>For each task displayed in the list, the user can click the "Complete" button to mark it as completed or the "Incomplete" button to mark it as incomplete. This information is stored in the smart contract and reflected in the component's state.</p>
        </div>
        <div style={{ width: 'calc(55% - 1rem)', marginBottom: '2rem' , textAlign:'center'}}>
          <img src={Service2} alt="Service 3" style={{ width: '30%', marginBottom: '1rem' , textAlign:'center'}} />
          <h3 style={{ fontSize: '1.5rem',color:'#160F29', fontWeight: 'bold' , textAlign:'center'}}>Delete Completed Tasks</h3>
          <p>The user cannot delete task except it is completed, that way ever user must strife to complete task he/she added.</p>
        </div>
        <div style={{ width: 'calc(45% - 1rem)', marginBottom: '2rem' , textAlign:'center'}}>
          <img src={Service3} alt="Service 4" style={{ width: '50%', marginBottom: '1rem', textAlign:'center' }} />
          <h3 style={{ fontSize: '1.5rem',color:'#160F29', fontWeight: 'bold' , textAlign:'center'}}>Share task with other users</h3>
          <p>User can share task with another user, but cannot modify task he/she did not add.</p>
        </div>
        <div class="notification is-link is-light" style={{backgroundColor:'#160F29',color:'white'}}>
      <button class="delete"  style={{backgroundColor:'#160F29',color:'white'}}></button>
      This app is a simple application that allows users to manage their to-do list by leveraging the power of a decentralized network such as Ethereum. It provides basic functionality for adding, completing, and deleting tasks while leveraging the security and transparency of blockchain technology.
     
     </div>
      </div>
    </section>
  );
}

export default Content;