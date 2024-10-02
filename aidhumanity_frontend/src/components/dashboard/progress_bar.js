import React from 'react'

function Progress_bar(props) {
	
	const Parentdiv = {
		height: 10,
    width: "100%",
		backgroundColor: '#f1f1f1',
		borderRadius: 40,
	}
  const Parentdiv2 = {
		height: 10,
    width: "100%",
		backgroundColor: '#f1f1f1',
		borderRadius: 40,
	}
	
	const Childdiv = {
		height: '100%',
		width: `${props.progress}%`,
		backgroundColor: "#00ade9",
	  borderRadius:40,
		textAlign: 'right'
	}
	
	const progresstext = {
		color: '#00C98B',
		fontWeight: 900,
    fontSize: "1.1rem"
	}
  
  const option = props.option
  if (option == 1) {
    return (
      <div className='flex gap-8 items-center'>
        <div style={Parentdiv}>
          <div style={Childdiv}></div>
        </div>
        <span style={progresstext}>{`${props.progress}%`}</span>
      </div>
    )
  }
  if (option == 2) {
    return (
      <div className='relative' style={Parentdiv2}>
        <div style={Childdiv}></div>
        <span className='absolute right-0 top-6' style={progresstext}>{`${props.progress}%`}</span>
      </div>
    )
  }	
}

export default Progress_bar;
