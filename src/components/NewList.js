import React from 'react'
import { useRecoilValue } from 'recoil'
import { newListState } from '../recoil/listState'

const NewList = () => {
    const newList = useRecoilValue(newListState);	// ở đây chỉ hiện data, nên useRecoilValue là đủ.
    return (
        <div className='col'>
            <h3>New</h3>
            <ul>
                {newList.map((item) => (
                    <li key={item.id}>
                        {item.content}
                        <button>In-Progress</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewList;