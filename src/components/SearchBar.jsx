import styles from './SearchBar.module.css';

export default function SearchBar(props) {

   return (
      <div>
         <input type='search' />
         <button onClick={() => props.onSearch('Not found id')}>Agregar</button>
      </div>
   );
}
