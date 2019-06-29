import React from 'react'

const Characters = props => {
  return (
    <div className='ui grid container' style={{ margin: '20px' }}>
      <div className='ui four column grid'>
        <div className='row'>
          <div className='column'>
            <div className='ui card'>
              <div className='image'>
                <img alt='game' src={props.character1} style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </div>
              <div className='content'>
                <a className='header'>Takeshi Kovacs</a>
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='ui card'>
              <div className='image'>
                <img alt='game' src={props.character2} style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </div>
              <div className='content'>
                <a className='header'>Kristin Ortega</a>
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='ui card'>
              <div className='image'>
                <img alt='game' src={props.character3} style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </div>
              <div className='content'>
                <a className='header'>Reileen Kanawara</a>
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='ui card'>
              <div className='image'>
                <img alt='game' src={props.character4} style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </div>
              <div className='content'>
                <a className='header'>Mister Leung</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Characters
