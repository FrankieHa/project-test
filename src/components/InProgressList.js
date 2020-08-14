import React from 'react'
import { useRecoilValue } from 'recoil'
import { inprogressListState } from '../recoil/listState'

 const InProgressList = () => {
    const inProgressList=useRecoilValue(inprogressListState)
    return (
        <div className='col'>
            <h3>In-Progress</h3>
            <ul>
                {inProgressList.map((item) => (
                  <li key={item.id}>
                      {item.content}
                      <button>Completed</button>
                  </li>
                ))}
            </ul>
        </div>
    )
}
export default InProgressList