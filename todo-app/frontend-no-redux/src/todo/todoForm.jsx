import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
  <div role='form' className='todoForm'>
    <Grid desktop='12' tablet='9' desktop='10'>
      <input onChange={props.handleChange} id='description' className='form-control' placeholder='Adicione uma tarefa' 
      value={props.value} />
    </Grid>

    <Grid mobile='12' tablet='3' desktop='2'>
      <IconButton styleBtn='primary' icon='plus'
        onClick={props.handleAdd} />
        <IconButton styleBtn='primary' icon='search'
          onClick={props.handleSearch} />
    </Grid>
  </div>
)