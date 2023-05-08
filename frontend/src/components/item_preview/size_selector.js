import css from './item_preview.module.css';

export default function SizeSelector(props) {
 
   return (
    <div className={css.size_cont}>
      <div className={props.size_small} onClick={() => { props.size_select('S') }}>S</div>                                           
      <div className={props.size_medium} onClick={() => { props.size_select('M') }}>M</div>                                             
      <div className={props.size_large} onClick={() => { props.size_select('L') }}>L</div>                                            
      <div className={props.size_extra_large} onClick={() => { props.size_select('XL') }}>XL</div>                                                
    </div>
  );
}
