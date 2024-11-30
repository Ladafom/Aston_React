import { listData } from '/src/assets/listData.js'
import './style.css'

function List() {

  return (
    <div className='list'>
      <h2>
      List example:
      </h2>

      <ul>
        {
          listData.map((item, index)=>(
            <li key={index}>
              {item}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default List;