import css from './core.module.css';

export default function Footer() {

return (
  <div className={css.footer}>
  	<div className={css.footerBox}>
		  <div className={`${css.icon} ${css.icon1}`}/>
		  <div className={css.iconTxt}>Instagram</div>
  	</div>
  	<div className={css.footerBox}>
  	  <div className={`${css.icon} ${css.icon2}`}/>
	  	<div className={css.iconTxt}>Depop</div>
  	</div>
  	<div className={css.footerBox}>
  	  <div className={`${css.icon} ${css.icon3}`}/>
	  	<div className={css.iconTxt}>Email</div>
  	</div>
  </div>
)}

