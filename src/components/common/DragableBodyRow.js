import React, { useRef } from 'react';

import { useDrag, useDrop } from 'react-dnd';

const type = 'DragableBodyRow';

/**
 * Componente reutilizable para usar el arrastar y soltar tablas.
 */
export const DragableBodyRow = ({ index, moveRow, className, style, ...restProps }) => {
  
  const ref = useRef();
  
  const [ { isOver, dropClassName }, drop ] = useDrop(() => ({

    accept: type,
    
    collect: ( monitor ) => {

      const { index: dragIndex } = monitor.getItem() || {};
      
      if ( dragIndex === index ) { return {} }

      return {
        isOver: monitor.isOver(),
        dropClassName: `drop-over-${ dragIndex < index ? 'downward' : 'upward'}`,
      }

    },
    
    drop: ( item ) => { moveRow( item.index, index ); }

  }), [ index ]);

  const [ , drag ] = useDrag(() => ({
    type,
    item: { index },
    collect: ( monitor ) => ({ isDragging: monitor.isDragging() })
  }), [ index ]);

  drop( drag( ref ) );

  return (
    <tr
      ref={ ref }
      className={ `${ className }${ isOver ? dropClassName : '' }` }
      style={{ cursor: "move", ...style }}
      { ...restProps }>        
    </tr>
  );

}