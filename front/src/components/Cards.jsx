import Card from './Card';
import styles from './Cards.module.css';
import React from 'react';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className={styles.cards}>
         {
            characters.map((c) => {
               return (
                  <Card
                     //name={c.name}
                     //species={c.species}
                     //gender={c.gender}
                     //image={c.image}
                     {...c}
                     onClose={()=>props.onClose(c.id)}
                  />
               );
            })
         }
      </div>
   );
}
