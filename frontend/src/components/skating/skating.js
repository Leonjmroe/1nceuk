import css from './skating.module.css';

export default function Skating() {

  return (
    <div className={css.skating_container}>
      <div className={css.skating_cont}>
        <div className={css.skating_title}>Skating</div>
        <div className={css.content_cont}>
          <div className={css.main_text}>
              Within this community, it is customary to acknowledge skateboarders by admiring their attire. Our ultimate objective was to establish a company that not only caters to the clothing needs of skaters but also understands their subculture. By supplying the local skating community with a distinct identity, we aimed to facilitate recognition and connection among skaters of all levels. Through the medium of clothing, 1nceuk endeavors to unify us all, transcending individual skill levels.
          </div>
          <div className={css.text}>Text about skate vid 1</div>
          <iframe className={css.video} width="560" height="315" src="https://www.youtube.com/embed/OoE-yuzmoHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe className={css.video} width="560" height="315" src="https://www.youtube.com/embed/OoE-yuzmoHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className={css.text}>Text about skate vid 2</div>
          <div className={css.text}>Text about skate vid 3</div>
          <iframe className={css.video} width="560" height="315" src="https://www.youtube.com/embed/OoE-yuzmoHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

