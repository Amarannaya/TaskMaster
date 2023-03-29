import React from 'react';

function RefreshButton() {
  function handleClick() {
    window.location.reload(true); // Reloads the current page
  }

  return (
    <button
    style={{borderRadius:'10px',fontSize:'18px',padding:'5px',margin:'10px',backgroundColor:'#160F29',color:'white',border:'20px',borderColor:'aqua'}}
     onClick={handleClick}>Refresh</button>
  );
}

export default RefreshButton;
